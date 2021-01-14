import { Service } from 'umi';
import { join } from 'path';
import { readFileSync } from 'fs';

const fixtures = join(__dirname, 'fixtures');

test('normal', async () => {
  const cwd = join(fixtures, 'normal');
  const service = new Service({
    cwd,
    plugins: [require.resolve('./')],
  });

  await service.run({
    name: 'g',
    args: {
      _: ['g', 'html'],
    },
  });

  const html = readFileSync(join(cwd, 'dist', 'index.html'), 'utf-8');
  expect(html).toContain('umi.js');
});

test('setup chunk to default', async () => {
  const cwd = join(fixtures, 'chunk-default');
  const service = new Service({
    cwd,
    plugins: [require.resolve('./')],
  });

  await service.run({
    name: 'g',
    args: {
      _: ['g', 'html'],
    },
  });

  const html = readFileSync(join(cwd, 'dist', 'index.html'), 'utf-8');
  expect(html).toContain('umi.js');
});

test('setup chunk to "app"', async () => {
  const cwd = join(fixtures, 'chunk-rename');
  const service = new Service({
    cwd,
    plugins: [require.resolve('./')],
  });
  console.log('service ---> ', service);

  await service.run({
    name: 'g',
    args: {
      _: ['g', 'html'],
    },
  });

  const html = readFileSync(join(cwd, 'dist', 'index.html'), 'utf-8');
  console.log('html ---> ', html);
  expect(html).toContain('app.js');
});
