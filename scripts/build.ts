import dts from 'bun-plugin-dts';

// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
const output = await Bun.build({
  entrypoints: ['src/index.ts'],
  minify: true,
  outdir: 'dist',
  plugins: [dts()],
});

if (!output.success) {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.error(output);
}
