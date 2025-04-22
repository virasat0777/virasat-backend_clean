import AuthLogo from "./extensions/logo.png";
import MenuLogo from "./extensions/menu.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ["en"],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#e9fcfc",
          primary200: "#bcf6f5",
          primary500: "#8ff0ee",
          primary600: "#32324d",
          primary700: "#32324d",
          danger700: "#b72b1a",
        },
      },

      // overwrite dark theme properties
      dark: {
        // ...
      },
    },
    // Extend the translations
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Log in to your Virasat account",
        "app.components.LeftMenu.navbrand.title": "Virasat",
        "Auth.form.welcome.title": "Virasat Admin Panel!",
        "Auth.form.email.placeholder": "Your Email",
        "HomePage.helmet.title": "Virasat Admin",
        "app.components.HomePage.welcome.again": "Welcome to Virasat Admin Panel 👋",
        "app.components.HomePage.welcomeBlock.content.again":"We just don’t build homes and offices, but we build communities."
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() { },
};