## Context

The Sanity Studio currently has an Aircraft document type with extensive specification fields (cruise speed, max speed, range, engine, etc.). When editors create new aircraft listings, they must manually enter all specs even for well-known models like Jabiru J230-D where the base specs are always the same.

Current file structure:
- `studio/schemas/aircraft.ts` - Aircraft document type with ~30 spec fields
- `studio/schemas/index.ts` - Schema registry
- `studio/sanity.config.ts` - Studio configuration

## Goals / Non-Goals

**Goals:**
- Allow editors to create and manage model templates directly in Sanity
- Enable one-click auto-fill of specs when creating aircraft listings
- Copy template values (not reference) so each aircraft has independent, editable specs
- Keep the solution simple and maintainable

**Non-Goals:**
- Linked references (where changing template updates all aircraft) - values are copied, not referenced
- Frontend display of templates - this is purely a content editing convenience
- Automatic template detection based on model name

## Decisions

### 1. Separate Document Type for Templates
**Decision**: Create a new `modelTemplate` document type rather than a configuration object

**Rationale**:
- Templates are content, managed by editors, not developers
- Sanity's document UI provides editing, validation, and publishing out of the box
- Easier to add new templates without code changes

**Alternatives considered**:
- Hardcoded templates in code → Rejected: requires developer for every change
- Single "settings" document with array of templates → Rejected: worse editing UX

### 2. Custom Input Component for Template Selection
**Decision**: Create a React component that renders a dropdown and patches multiple fields on selection

**Rationale**:
- Sanity's `defineField` doesn't support auto-fill behavior natively
- Custom components can use `useFormValue` and `set` to modify sibling fields
- Dropdown provides clear UX with "Apply Template" action

**Implementation approach**:
```
ModelTemplateInput.tsx
├── Fetches all modelTemplate documents via Sanity client
├── Renders select dropdown
└── On selection:
    ├── Reads selected template's fields
    └── Patches: manufacturer, model, type, and all specs.* fields
```

### 3. Field Copying Strategy
**Decision**: Copy manufacturer, model, type, and the entire specs object

**Fields copied from template**:
- `manufacturer`
- `model`
- `type` (light-sport, experimental, etc.)
- `specs.*` (all specification fields)

**Fields NOT copied** (user fills these per-aircraft):
- `title`, `slug`, `year`
- `registration`, `serialNumber`
- `price`, `status`, `featured`
- `shortDescription`, `fullDescription`, `features`, `history`
- `images`
- `totalTime`, `engineTime`, `propTime`

### 4. Template Schema Structure
**Decision**: Mirror the specs structure from Aircraft, add name/description for identification

```typescript
modelTemplate = {
  name: string,           // "Jabiru J230-D"
  description?: string,   // Optional notes
  manufacturer: string,
  model: string,
  type: string,
  specs: { /* same structure as aircraft.specs */ }
}
```

## Risks / Trade-offs

**[Risk] Template changes don't propagate** → Accepted trade-off. By design, values are copied. If a template is updated, existing aircraft keep their old values. This is intentional - each aircraft should have independent specs that can be customized.

**[Risk] User confusion about when to apply template** → Mitigation: Place template selector prominently at top of Identity group with clear "Apply Template" label and helper text explaining it will overwrite specs.

**[Risk] Accidental overwrite of customized specs** → Mitigation: Consider adding a confirmation dialog in the custom component before applying template. For v1, rely on Sanity's revision history for recovery.
