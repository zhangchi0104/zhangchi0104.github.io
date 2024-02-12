export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-url": {
      url: "rebase"
    }
  },
  extract: "./dist/styles.css"
};
