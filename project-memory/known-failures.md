# Known Failures

- `npm test` exits with status 1 because `package.json` defines `test` as `echo "Error: no test specified" && exit 1`. This is a placeholder test command, not a product test failure.
- The bounded documentation preflight is blocked because its expected docs navigation files are absent: `docs/source-of-truth/README.md` and `.docs-nav.json`. No navigation files were created because this pass is limited to canonical project memory.
