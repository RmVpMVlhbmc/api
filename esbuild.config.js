import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

const config = {
  bundle: true,
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.js',
  platform: 'node',
  plugins: [pnpPlugin()]
}

if (process.argv.at(-1) === 'dev') {
  console.log('Using build config development.')
  config['minify'] = false
} else {
  console.log('Using build config production.')
  config['minify'] = true
}

console.log('Starting build process.')
esbuild.build(config)
