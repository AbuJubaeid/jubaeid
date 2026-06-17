import type { Config } from "tailwindcss";

// Tailwind CSS v4: theme tokens (colors, dark mode, fonts, keyframes) now
// live in globals.css via @theme and @custom-variant. This file only
// needs to register the tailwindcss-animate plugin.
const config: Partial<Config> = {
  plugins: [require("tailwindcss-animate")],
};

export default config;
