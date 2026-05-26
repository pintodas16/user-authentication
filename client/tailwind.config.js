/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-img": "url('/src/assets/img/LandingImg/landing-one.png')",
                "hero-img-mobile":
                    "url('/src/assets/img/LandingImg/landing-one-mobile.png')",
                "login-hero-img":
                    "url('/src/assets/img/LandingImg/login-landing.png')",
            },
            fontSize: {
                ssss: ["0.625rem", "1.25rem"], //10px,20px
                xsss: ["0.625rem", "0.625rem"], //10px,10px
                xss: ["0.75rem", "0.75rem"], // 12px , 12px
                "1.5xs": ["0.875rem", "0.875rem"], //14px , 14px
                xs: ["0.75rem", "1rem"], // 12px, 16px
                sm: ["0.75rem", "1.25rem"], // 12px 20px
                "tiny-small": ["0.75rem", "1.25rem"], // 12px 20px
                ss: ["0.75rem", "1rem"], // 12px, 16px
                small: ["0.875rem", "1.5rem"], // 14px, 24px
                "extra-small": ["1rem", "1.5rem"], // 16px, 24px
                "extra-ss": ["1.125rem", "1.5rem"], //18px , 24px
                medium: ["1rem", "1.75rem"], // 16px, 28px
                "extra-medium": ["1.125rem", "1.875rem"], // 18px, 30px
                "extra-mm": ["1.125rem", "2.25rem"], //18px,36px
                large: ["1.25rem", "1.875rem"], // 20px, 30px
                "extra-large": ["1.375rem", "2rem"], // 22px, 32px
                "tiny-xl": ["1.5rem", "2.125rem"], // 24px , 34px
                xl: ["1.625rem", "2.25rem"], // 26px, 36px
                "1.5xl": ["1.75rem", "2.25rem"], //28px, 38px
                "2xl": ["1.875rem", "2.5rem"], // 30px, 40px
                "2.25xl": ["2rem", "2.625rem"], // 32px, 42px
                "2.5xl": ["2.125rem", "2.75rem"], //34px , 44px
                "3xl": ["2.5rem", "3.125rem"], // 40px, 50px
                "4xl": ["3.125rem", "3.75rem"], // 50px, 60px
                "5xl": ["3.5rem", "4.125rem"], // 56px,66px
                "xs-heading": ["1.25rem", "1.25rem"], //20px,20px
                "small-heading": ["1.375rem", "1.375rem"], //22px,22px
                "heading-one": ["1.5rem", "1.5rem"], // 24px, 24px
                "heading-two": ["2.25rem", "2.875rem"], // 36px, 46px
                "heading-four": ["3rem", "3.625rem"], //48px, 58px
                "sub-heading": ["1rem", "1.25rem"], // 16px, 20px
                "faq-heading": ["1rem", "1rem"], // 16px, 16px
                "error-text": ["0.75rem", "0.75rem"], // 12px 12px
                "order-label": ["0.75rem", "1.25rem"], // 12px, 20px
                email: ["0.75rem", "1.375rem"], //12px ,22px
                "profile-heading": ["1.875rem", "1.875rem"], // 30,30
                pricing: ["1.125rem", "1.75rem"], // 18px , 28px
                "heading-six": ["1.125rem", "1.125rem"], //18px, 18px
                "main-heading": ["4rem", "5rem"], // 64px , 80 px
            },
            fontFamily: {
                Fraunces: ["Fraunces", "serif"],
                Manrope: ["Manrope", "sans-serif"],
                "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
            },
            colors: {
                grey: "#D2D2D2",
                "light-gray": "#D9D9D9",
                dark: "#121212",
                "light-dark": "#3F3F3F",
                white: "#ffffff",
                "light-white": "#F9F9F9",
                "off-white": "#F7F7F7",
                "error-red": "#EC5D57",
                red: "#EA3323",
            },
            borderRadius: {
                xs: "0.125rem", // 2px
                sm: "0.25rem", // 4px
                ss: "0.3125rem", //5px
                md: "0.375rem", // 6px
                lg: "0.5rem", // 8px
                xl: "0.625rem", // 10px
                "2xl": "0.75rem", // 12px
                "2.5xl": "0.9375rem", // 15px
                "3xl": "1rem", // 16px
                "4xl": "1.25rem", // 20px
                "5xl": "1.5rem", // 24px
                "6.5xl": "1.875rem", // 30px
            },
            boxShadow: {
                custom: "0px 5px 50px 0px #0000000D",
                "custom-background": " 0px 20px 100px 0px #00000026",
                "shadow-one": "0px 30px 90px 0px #00000012",
                "shadow-two": "0px 20px 100px 0px #0000001F",
                "shadow-three": "0px 12px 36px 0px #00000026",
                "shadow-four": " 0px 10px 60px 0px #0000001A",
                "shadow-five": "0px 14px 48px 0px #00000026 ",
                "shadow-six": " 0px -12px 36px 0px #0000000D",
                "shadow-seven": "box-shadow: 0px 12px 48px 0px #00000012",
                "seller-form-shadow": "0px 24px 100px 0px #00000012",
            },
            gap: {
                1.25: "0.3125rem", //5px
                1.75: "0.4375rem", // 7px
                3.75: "0.9375rem", // 15px
                4.25: "1.125rem", //18px
                7.5: "1.875rem", //30px
                8: "2.375rem", //38px
                11.5: "2.8125rem", // 45px
                17.5: "4.375rem", // 70px
                19: "4.75rem", //76px
            },
            padding: {
                1.25: "0.3125rem", //5px
                2.75: "0.6875rem", // 11px    //
                3.25: "0.8125rem", // 13px
                3.75: "0.9375rem", // 15px
                4.25: "1.125rem", //18px
                7.5: "1.875rem", //30px
                11.5: "2.8125rem", //45px
                15: "3.75rem", // 60px
                17.5: "4.375", //70px
                18.5: "4.6875rem", //75px
                11.5: "2.8125rem", // 45px
                25: "6.25rem", // 100px
            },
            margin: {
                1.6: "0.4375rem", // 7px
                3.75: "0.9375rem", //15px
                4.25: "1.125rem", //18px
                7.5: "1.875rem", //30px
                8.5: "2.125rem", // 34px
                11.5: "2.8125rem", //45px
                15: "3.75rem", // 60px
                18: "4.375rem", //70px
                21.5: "7.875rem", //126px
                32.5: "8.125rem", // 130px
                34: "9.375rem", // 150px
            },
            space: {
                3.75: "0.9375rem", // 15px
                7.5: "1.875rem", // 30px
            },
            maxWidth: {
                "1.5xl": "39.375rem",
            },
            width: {
                4.5: "1.125rem", //18px
                7.5: "1.875rem", //30px
            },
            height: {
                4.5: "1.125rem", //18px
            },
        },
    },

    plugins: [],
};
