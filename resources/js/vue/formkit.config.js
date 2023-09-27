import { generateClasses } from '@formkit/themes'
import TailwindTheme from './tailwind-theme.js'

export default {
  config: {
    classes: generateClasses(TailwindTheme),
  },
}