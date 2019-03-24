import Typography from 'typography'
import Theme from 'typography-theme-moraga'

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
