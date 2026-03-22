import type { Config } from "tailwindcss";

const config: Config = {
    content: [ 
        "./app/**/*.{ts,tsx,js,jsx,mdx}",
        "./components/**/*.{ts,tsx,js,jsx,mdx}",
        "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: "#000000",
                    100: "#000319",
                    
                }
            }
        },
    },
    plugins: [],
}
