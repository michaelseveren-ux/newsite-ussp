## Why

Creating aircraft listings in Sanity requires manually entering all specifications for each model, even though many aircraft share the same base specs (e.g., all Jabiru J230-D aircraft have the same cruise speed, max speed, range, etc.). This is time-consuming and error-prone. A model template system would allow editors to select a template and auto-fill standard specs, with the ability to manage templates directly in Sanity.

## What Changes

- Add a new "Model Template" document type in Sanity for storing reusable aircraft specifications
- Add a template selector field to the Aircraft schema that copies template values into the aircraft document
- Create a custom Sanity input component that handles the auto-fill behavior when a template is selected
- Model templates are editable content in Sanity (not hardcoded), allowing editors to add/modify templates without code changes

## Capabilities

### New Capabilities
- `sanity-model-templates`: Sanity document type and custom input component for aircraft model templates that auto-fill specifications when creating new aircraft listings

### Modified Capabilities
<!-- No existing spec requirements are changing - this adds new functionality to the Sanity studio -->

## Impact

- **Sanity Studio schemas**: New `modelTemplate.ts` schema, modified `aircraft.ts` schema
- **Custom components**: New `ModelTemplateInput.tsx` React component in `studio/components/`
- **Studio config**: Register new schema type in `studio/schemas/index.ts`
- **No frontend changes**: This only affects the Sanity Studio content editing experience
