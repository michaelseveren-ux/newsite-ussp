## Why

The header navigation on the Service & Flight Training page is displaying with a transparent background instead of the correct solid styling. This is a regression—the issue was previously fixed but was reintroduced when an older iteration of the page was inadvertently restored during recent changes.

## What Changes

- Restore the correct header nav styling on the Service & Flight Training page
- Ensure the header displays with the proper non-transparent background consistent with other pages
- No new functionality—this is a regression fix to restore previous working behavior

## Capabilities

### New Capabilities
<!-- None - this is a regression fix -->

### Modified Capabilities
<!-- None - restoring previously working behavior, no spec-level changes -->

## Impact

- **Affected Code**: Service & Flight Training page component and/or its associated styles
- **User Impact**: Visual bug affecting navigation visibility/usability on the training page
- **Risk**: Low—restoring known-good behavior
