import { SignUp, SignIn } from "@clerk/nextjs";

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
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      afterSignInUrl="/protectedPage"
      afterSignUpUrl="/protectedPage"
    />
  </Box>
);

export default SignUpPage;
