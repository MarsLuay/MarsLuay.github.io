import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const entrypoint = await readFile(join(projectRoot, 'index.html'), 'utf8');

const requiredSections = ['hero', 'about', 'projects', 'contact'];
const missingSections = requiredSections.filter(
  (section) => !entrypoint.includes(`id="${section}"`)
);

if (missingSections.length > 0) {
  throw new Error(`Missing required sections: ${missingSections.join(', ')}`);
}

for (const anchor of requiredSections.slice(1)) {
  if (!entrypoint.includes(`href="#${anchor}"`)) {
    throw new Error(`Missing navigation anchor: #${anchor}`);
  }
}

for (const marker of ['id="blob"', 'requestAnimationFrame', '<footer']) {
  if (!entrypoint.includes(marker)) {
    throw new Error(`Missing entrypoint marker: ${marker}`);
  }
}

console.log('Static site smoke test passed.');
