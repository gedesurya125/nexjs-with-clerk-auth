import { SignUp } from "@clerk/nextjs";

// External Components
import { Box } from "@gedesurya125/surya-ui";

const SignUpPage = () => (
  <Box
    className="signup-page"
    sx={{
      width: "100%",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/protectedPage"
      afterSignInUrl="/protectedPage"
    />
  </Box>
);

export default SignUpPage;
