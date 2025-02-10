import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
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
      exclude: ['vite.config.ts', 'main.ts'],
    }),
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: './src/VueComponentsLibrary.ts',
      name: 'VueComponentsLibrary',
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `VueComponentsLibrary.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          Vue: 'Vue',
        },
      },
    },
  },
})