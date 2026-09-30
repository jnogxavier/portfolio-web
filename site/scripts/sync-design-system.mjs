// O design system e a fonte unica. O site e consumidor: copia, nunca edita.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const ds = resolve(aqui, '../../design-system');

const arquivos = [
  [resolve(ds, 'tokens.css'), resolve(aqui, '../src/styles/tokens.css')],
  [resolve(ds, 'project/components/bundle.css'), resolve(aqui, '../src/styles/bundle.css')],
  [resolve(ds, 'project/components/bundle.js'), resolve(aqui, '../public/bundle.js')],
];

for (const [de, para] of arquivos) {
  mkdirSync(dirname(para), { recursive: true });
  copyFileSync(de, para);
  console.log('copiado', para.replace(resolve(aqui, '..'), 'site'));
}
