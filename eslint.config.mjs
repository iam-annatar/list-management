import { defineConfig } from "@fullstacksjs/eslint-config";

export default defineConfig({
  tailwind: { entryPoint: "./src/styles/global.css" },
  rules: {
    "better-tailwindcss/enforce-consistent-class-order": "off",
  },
});
