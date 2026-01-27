## Specs

No new capabilities or requirement changes. This is a regression fix restoring previously working behavior.

The existing Navigation component contract remains:
- `transparent={true}` (default): Header starts transparent, becomes solid on scroll
- `transparent={false}`: Header is always solid, regardless of scroll position
