import { useCallback, useEffect, useState } from 'react';
import { set, useFormValue, useClient } from 'sanity';
import { TextInput, Stack, Text, Button, Flex } from '@sanity/ui';

interface SlugValue {
  _type: 'slug';
  current: string;
}

interface Props {
  onChange: (patch: ReturnType<typeof set>) => void;
  value?: SlugValue;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and dashes)
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-') // Replace multiple dashes with single dash
    .replace(/^-+|-+$/g, ''); // Trim dashes from start and end
}

export function AutoSlugInput(props: Props) {
  const { onChange, value } = props;
  const [isGenerating, setIsGenerating] = useState(false);

  const client = useClient({ apiVersion: '2024-01-01' });
  const documentId = useFormValue(['_id']) as string | undefined;
  const title = useFormValue(['title']) as string | undefined;

  const generateUniqueSlug = useCallback(async () => {
    if (!title) return;

    setIsGenerating(true);
    const baseSlug = slugify(title);

    try {
      // Check if base slug is unique
      let candidateSlug = baseSlug;
      let counter = 1;

      while (true) {
        // Query for existing documents with this slug (excluding current document)
        const query = `count(*[_type == "aircraft" && slug.current == $slug && _id != $id])`;
        const existingCount = await client.fetch<number>(query, {
          slug: candidateSlug,
          id: documentId ?? '',
        });

        if (existingCount === 0) {
          // This slug is unique
          break;
        }

        // Try next number
        counter++;
        candidateSlug = `${baseSlug}-${counter}`;
      }

      onChange(set({ _type: 'slug', current: candidateSlug }));
    } catch (err) {
      console.error('Failed to generate slug:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [title, client, documentId, onChange]);

  // Auto-generate slug when title changes and slug is empty
  useEffect(() => {
    if (title && !value?.current) {
      generateUniqueSlug();
    }
  }, [title, value?.current, generateUniqueSlug]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSlug = slugify(event.target.value);
      onChange(set({ _type: 'slug', current: newSlug }));
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <Flex gap={2}>
        <TextInput
          style={{ flex: 1 }}
          value={value?.current ?? ''}
          onChange={handleChange}
          disabled={isGenerating}
        />
        <Button
          text={isGenerating ? 'Generating...' : 'Regenerate'}
          onClick={generateUniqueSlug}
          disabled={isGenerating || !title}
          mode="ghost"
        />
      </Flex>
      <Text size={1} muted>
        Auto-generated from title. Conflicts are resolved with -2, -3, etc.
      </Text>
    </Stack>
  );
}
