import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
// other themes :
import { ThemeProvider } from "@gedesurya125/surya-ui";
import { theme } from "theme";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      frontendApi="clerk.superb.mayfly-83.lcl.dev"
      appearance={{
        // baseTheme: shadesOfPurple,
        layout: {
          socialButtonsVariant: "iconButton",
          socialButtonsPlacement: "bottom",
        },
        elements: {
          card: {
            border: "0.3rem solid teal",
            // this remove the secured by clerk
            overflow: "hidden",
          },
          headerTitle: {
            margin: "0 auto",
          },
          headerSubtitle: {
            margin: "0 auto",
          },
          dividerLine: {
            backgroundColor: "teal",
          },
          dividerText: {
            color: "teal",
          },
          footer: {
            margin: "0 auto",
          },
          formButtonPrimary: {
            backgroundColor: "teal",
            "&:hover": {
              backgroundColor: "darkslategrey",
            },
          },
          logoBox: {
            margin: "0 auto",
            width: "100%",
            // height: "4rem",
            height: "100%",
            borderRadius: "0.5rem",
            overflow: "hidden",
          },
          logoImage: {
            width: "100%",
          },
          formFieldInput: {
            "&:hover, &:active &:focus": {
              borderColor: "teal",
            },
          },
          navbar: {
            background: "teal",
            borderRadius: "0.8rem",
          },
          navbarButton: {
            color: "white",
          },
          headerTitle: {
            marginRight: "auto",
            color: "teal",
          },
          headerSubtitle: {
            marginRight: "auto",
          },
          profileSectionTitleText: {
            color: "teal",
          },
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default MyApp;
