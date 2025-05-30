
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#345890',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F0F4F8',
					foreground: '#0F172A'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F0F4F8',
					foreground: '#0F172A'
				},
				accent: {
					DEFAULT: '#F0F4F8',
					foreground: '#0F172A'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				// White Shoe AI Brand Colors
				'midnight-brief': '#0F172A',
				'slate-docket': '#345890',
				'ice-fog': '#F0F4F8',
				'pure-white': '#FFFFFF',
			},
			borderRadius: {
				lg: '1.5rem', // 24px as per brand system
				md: 'calc(1.5rem - 2px)',
				sm: 'calc(1.5rem - 4px)'
			},
			fontFamily: {
				'garamond': ['EB Garamond', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			letterSpacing: {
				'garamond': '-0.025em', // -1 tracking for Garamond display
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					from: {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'ripple': {
					to: {
						transform: 'scale(4)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.35s ease-out',
				'ripple': 'ripple 600ms linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
