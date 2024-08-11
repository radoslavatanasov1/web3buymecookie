import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: '#4169e1', // Custom color for royalblue
      },
    },
  },
  plugins: [],
  safelist: [
    'border',
    'border-[#252525]',
    'p-8',
    'rounded-[6px]',
    'w-[500px]',
    'mb-4',
    'text-center',
    'flex-col',
    'flex',
    'text-base',
    'text-[10px]',
    'text-[12px]',  // Added for the new styles
    'text-[#888]',
    'p-2',
    'p-4',          // Added for the new styles
    'border-0',
    'bg-gray-800',
    'bg-[#151515]', // Added for the new styles
    'text-white',
    'rounded-md',
    'rounded-[6px]', // Retained as it matches the new styles
    'mt-2',
    'my-4',         // Added for the new styles
    'mb-2',
    'text-xs',
    'bg-royalblue',
    'bg-blue-800',
    'justify-between', // Added for the new styles
  ],
};

export default config;
