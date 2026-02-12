import { useCallback, useEffect, useState } from 'react';
import { set, unset } from 'sanity';
import { useClient, useFormValue } from 'sanity';
import { Card, Select, Stack, Text } from '@sanity/ui';

interface ModelTemplate {
  _id: string;
  name: string;
  manufacturer?: string;
  model?: string;
  type?: string;
  specs?: Record<string, string>;
}

interface Props {
  onChange: (patch: ReturnType<typeof set> | ReturnType<typeof unset>) => void;
  value?: string;
}

export function ModelTemplateInput(props: Props) {
  const { onChange, value } = props;
  const [templates, setTemplates] = useState<ModelTemplate[]>([]);
  const [loading, setLoading] = useState(true);

  const client = useClient({ apiVersion: '2024-01-01' });
  const documentId = useFormValue(['_id']) as string | undefined;

  useEffect(() => {
    const query = `*[_type == "modelTemplate"] | order(name asc) {
      _id,
      name,
      manufacturer,
      model,
      type,
      specs
    }`;

    client
      .fetch<ModelTemplate[]>(query)
      .then((result) => {
        setTemplates(result ?? []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch model templates:', err);
        setLoading(false);
      });
  }, [client]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedId = event.target.value;

      if (!selectedId) {
        onChange(unset());
        return;
      }

      const template = templates.find((t) => t._id === selectedId);
      if (!template) return;

      onChange(set(selectedId));

      // Build patches for all fields to copy from template
      const patches: Array<{ path: string; value: unknown }> = [];

      if (template.manufacturer) {
        patches.push({ path: 'manufacturer', value: template.manufacturer });
      }
      if (template.model) {
        patches.push({ path: 'model', value: template.model });
      }
      if (template.type) {
        patches.push({ path: 'type', value: template.type });
      }
      if (template.specs) {
        patches.push({ path: 'specs', value: template.specs });
      }

      // Apply patches via the Sanity client
      if (documentId && patches.length > 0) {
        const patchSet: Record<string, unknown> = {};
        patches.forEach(({ path, value }) => {
          patchSet[path] = value;
        });

        client
          .patch(documentId)
          .set(patchSet)
          .commit()
          .then(() => {
            // Reload the page to reflect changes (Sanity will show updated values)
            window.location.reload();
          })
          .catch((err) => {
            console.error('Failed to apply template:', err);
            alert('Failed to apply template. Please try again.');
          });
      }
    },
    [templates, onChange, client, documentId]
  );

  if (loading) {
    return (
      <Card padding={3}>
        <Text size={1} muted>
          Loading templates...
        </Text>
      </Card>
    );
  }

  if (templates.length === 0) {
    return (
      <Card padding={3} tone="caution">
        <Text size={1}>No templates available. Create a Model Template first.</Text>
      </Card>
    );
  }

  return (
    <Stack space={2}>
      <Select onChange={handleChange} value={value ?? ''}>
        <option value="">Select a template to apply...</option>
        {templates.map((template) => (
          <option key={template._id} value={template._id}>
            {template.name}
          </option>
        ))}
      </Select>
      <Text size={1} muted>
        Selecting a template will overwrite manufacturer, model, type, and all specifications.
      </Text>
    </Stack>
  );
}
