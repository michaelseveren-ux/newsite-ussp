## 1. Model Template Schema

- [x] 1.1 Create `studio/schemas/modelTemplate.ts` with fields: name, description, manufacturer, model, type, and specs object (mirroring aircraft specs structure)
- [x] 1.2 Register modelTemplate in `studio/schemas/index.ts`
- [x] 1.3 Verify Model Templates appears in Sanity Studio navigation

## 2. Custom Input Component

- [x] 2.1 Create `studio/components/` directory
- [x] 2.2 Create `studio/components/ModelTemplateInput.tsx` React component that:
  - Fetches all published modelTemplate documents
  - Renders a select dropdown with template names
  - Shows "No templates available" when empty
- [x] 2.3 Implement auto-fill logic: on template selection, patch manufacturer, model, type, and all specs fields into the parent document

## 3. Aircraft Schema Integration

- [x] 3.1 Add `applyTemplate` field to aircraft.ts using the custom ModelTemplateInput component
- [x] 3.2 Position the field at the top of the Identity group (before title field)
- [x] 3.3 Add helper text explaining the field will overwrite specs when a template is selected

## 4. Testing

- [x] 4.1 Create a test Model Template (e.g., "Jabiru J230-D") with sample specs
- [x] 4.2 Create a new Aircraft and apply the template, verify all spec fields populate
- [x] 4.3 Verify non-template fields (title, year, price, etc.) are not affected
- [x] 4.4 Verify applied values can be manually edited after applying template
