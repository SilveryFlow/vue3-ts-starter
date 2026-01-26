import { fileURLToPath } from 'node:url'
import { defineConfig, configDefaults } from 'vitest/config'
import { mergeConfig } from 'vite'
import viteConfig from './vite.config'

export default defineConfig(async (env) => {
  const baseConfig = typeof viteConfig === 'function' ? viteConfig(env) : viteConfig

  return mergeConfig(
    baseConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    }),
  )
})
