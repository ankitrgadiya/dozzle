import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,

} from 'unocss'

import { presetTypography } from '@unocss/preset-typography'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['main-bg', 'bg-light dark:bg-dark'],
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto:200',
        playfair: [
          {
            name: 'Playfair Display',
            weights: [100, 200, 400, 700],
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      brand: 'hsl(44, 100%, 77%)',
      light: '#eff0eb',
      dark: '#1e1e20',
    },
  },
})