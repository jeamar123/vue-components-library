import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import dts from "vite-plugin-dts"
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types'
    }),
    typescript2({
      check: false,
      include: [
        'src/components/*.vue',
        'src/components/**/*.vue',
        'src/*.ts',
        'src/**/*.ts',
      ],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts', 'main.ts', 'src/router/*.ts',],
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/index.ts',
      name: 'VueComponentsLibrary',
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: 'style.css',
        exports: "named",
        globals: {
          Vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})