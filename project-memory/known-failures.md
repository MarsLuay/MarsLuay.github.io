# Known Failures

- `npm test` exits with status 1 because `package.json` defines `test` as `echo "Error: no test specified" && exit 1`. This is a placeholder test command, not a product test failure.
