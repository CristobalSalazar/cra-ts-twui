const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
