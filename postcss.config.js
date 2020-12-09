module.exports = {
  plugins: {
    autoprefixer: {
      grid: true,
    },
    'postcss-nested': {},
    'postcss-custom-properties': {
      preserve: true,
      importFrom: './utils/global-styles.css',
    },
  },
}
