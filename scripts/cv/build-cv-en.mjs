import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Genera el CV inglés imprimiendo `cv-en.html` con un navegador Chromium ya
// instalado (Edge o Chrome). No añade dependencias al proyecto.
//
// Uso: npm run cv:build
//      EDGE_PATH="ruta/al/ejecutable" npm run cv:build

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const source = join(here, 'cv-en.html');
const target = join(root, 'public', 'cv-ricardo-aguilera-en.pdf');

const candidates = [
  process.env.EDGE_PATH,
  process.env.CHROME_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/microsoft-edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((candidate) => existsSync(candidate));

if (!browser) {
  console.error(
    '[cv] No se encontró Edge ni Chrome. Define EDGE_PATH con la ruta al ejecutable y vuelve a intentarlo.',
  );
  process.exit(1);
}

if (!existsSync(source)) {
  console.error(`[cv] Falta el HTML de origen: ${source}`);
  process.exit(1);
}

// Perfil temporal para no tocar el perfil real del usuario ni chocar con una
// instancia abierta del navegador.
const profile = mkdtempSync(join(tmpdir(), 'cv-build-'));

try {
  const result = spawnSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${target}`,
      pathToFileURL(source).href,
    ],
    { stdio: 'pipe', encoding: 'utf8' },
  );

  if (result.status !== 0 || !existsSync(target)) {
    console.error('[cv] La impresión falló.');
    console.error(result.stderr || result.error || '');
    process.exit(1);
  }

  const { size } = statSync(target);
  console.log(`[cv] Generado ${target} (${Math.round(size / 1024)} KB)`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
