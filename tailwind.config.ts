import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [{
      dark: {
        "primary": "#36ffa1",
        "primary-focus": "#20dfaf",
        "primary-content": "#ffffff",

        "secondary": "#9d7efa",
        "secondary-focus": "#7579e1",
        "secondary-content": "#ffffff",

        "accent": "#00ffff",
        "accent-focus": "#0f65f0",
        "accent-content": "#ffffff",

        "neutral": "#2a2e37",
        "neutral-focus": "#16181d",
        "neutral-content": "#ffffff",

        "base-100": "#3b424e",
        "base-200": "#2a2e37",
        "base-300": "#16181d",
        "base-content": "#ebecf0",

        "info": "#a8b2ff",
        "success": "#8bdab1",
        "warning": "#c9ea80",
        "error": "#e6a07a",

        "--rounded-box": "1rem",
        "--rounded-btn": ".5rem",
        "--rounded-badge": "1.9rem",

        "--animation-btn": ".25s",
        "--animation-input": ".2s",

        "--btn-text-case": "normal",
        "--navbar-padding": ".5rem",
        "--border-btn": "1px",
      },
    }, {
      light: {
        "primary": "#36ffa1",
        "primary-focus": "#20dfaf",
        "primary-content": "#ffffff",

        "secondary": "#9c7efa",
        "secondary-focus": "#7579e1",
        "secondary-content": "#ffffff",

        "accent": "#00ffff",
        "accent-focus": "#0f65f0",
        "accent-content": "#ffffff",

        "neutral": "#3b424e",
        "neutral-focus": "#2a2e37",
        "neutral-content": "#ffffff",

        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#ced3d9",
        "base-content": "#1e2734",

        "info": "#00fffe",
        "success": "#29ff86",
        "warning": "#f5ed00",
        "error": "#ff5b24",

        "--rounded-box": "1rem",
        "--rounded-btn": ".5rem",
        "--rounded-badge": "1.9rem",

        "--animation-btn": ".25s",
        "--animation-input": ".2s",

        "--btn-text-case": "normal",
        "--navbar-padding": ".5rem",
        "--border-btn": "1px",
      },
    }],
  },
  plugins: [daisyui],
} satisfies Config;
