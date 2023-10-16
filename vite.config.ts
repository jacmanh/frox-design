import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import viteSvgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSvgr({
      exportAsDefault: true
    }),
    dts({
      include: ['components'],
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ],

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
      formats: ['es', 'umd'],
      name: 'FroxDesign',
      fileName: format => `frox-design.${format}.js`
    },

    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    }
  }
})
