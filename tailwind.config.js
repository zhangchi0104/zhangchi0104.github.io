export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.3s cubic-bezier(0.4, 0, 1, 1)",
        "fade-bounce-in": "fade-bounce-in 0.2s cubic-bezier(0.4, 0, 1, 1)",
        "bounce-emphasis": "bounce-emphasis 0.3s cubic-bezier(0.4, 0, 1, 1)",
        "bounce-in-x": "bounce-in-x 1.5s ease-in-out 0.3s",
        "spin-bounce": "spin-bounce 0.3s linear",
        "fade-out": "fade-out 0.3s linear 0.3s"
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0)"
          },
          "65%": {
            opacity: "0.7",
            transform: "scale(1.2)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        "bounce-emphasis": {
          "0%": {
            transform: "scaleX(1)"
          },
          "65%": {
            transform: "scaleX(1.1)"
          },
          "100%": {
            transform: "scaleX(1)"
          }
        },
        "bounce-in-x": {
          "0%": {
            transform: "scaleX(0)"
          },
          "100%": {
            transform: "scaleX(1)"
          }
        },
        "spin-bounce": {
          "0%": {
            transform: "translateY(0) rotate(0deg)"
          },
          "50%": {
            transform: "translateY(-10px) rotate(90deg)"
          },
          "100%": {
            transform: "translateY(0) rotate(180deg)"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        }
      }
    }
  },
  plugins: []
};
