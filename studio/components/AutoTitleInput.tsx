import { useCallback, useEffect } from 'react';
import { set, useFormValue } from 'sanity';
import { TextInput, Stack, Text } from '@sanity/ui';

interface Props {
  onChange: (patch: ReturnType<typeof set>) => void;
  value?: string;
  elementProps: React.InputHTMLAttributes<HTMLInputElement>;
}

export function AutoTitleInput(props: Props) {
  const { onChange, value, elementProps } = props;

  const year = useFormValue(['year']) as number | undefined;
  const model = useFormValue(['model']) as string | undefined;
  const registration = useFormValue(['registration']) as string | undefined;

  // Auto-generate title when year, model, or registration changes
  useEffect(() => {
    const parts = [
      year ? String(year) : '',
      model ?? '',
      registration ?? '',
    ].filter(Boolean);

    const generatedTitle = parts.join(' ');

    if (generatedTitle && generatedTitle !== value) {
      onChange(set(generatedTitle));
    }
  }, [year, model, registration, onChange, value]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(set(event.target.value));
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <TextInput {...elementProps} value={value ?? ''} onChange={handleChange} />
      <Text size={1} muted>
        Auto-generated from Year + Model + Registration. You can edit manually if needed.
      </Text>
    </Stack>
  );
}
