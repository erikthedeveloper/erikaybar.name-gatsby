import Typography from 'typography'
import Theme from 'typography-theme-moraga'
import '../styles/code-syntax-night-owl.css'

Theme.baseFontSize = '22px'
Theme.scaleRatio = 2
Theme.overrideThemeStyles = () => ({
  '@media only screen and (max-width: 768px)': {
    html: {
      fontSize: '125%',
      lineHeight: '26px',
    },
  },
})

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
