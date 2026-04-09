import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-jost)", "ui-sans-serif", "system-ui"],
                display: ["var(--font-orbitron)", "ui-sans-serif", "system-ui"],
            },
            colors: {
                "port-sky": "#02b3e9",
            },
        },
    },
    plugins: [],
};

export default config;