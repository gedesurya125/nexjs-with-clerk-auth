import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
import Link from "next/link";
import { Box, Button } from "@gedesurya125/surya-ui";
import { useRouter } from "next/router";

export const UserBar = () => {
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        mt: "2rem",
      }}
    >
      {!isSignedIn ? (
        <>
          <Link
            style={{
              fontSize: "2rem",
            }}
            href="/sign-up"
          >
            Sign up
          </Link>
          <Link
            style={{
              fontSize: "2rem",
            }}
            href="/sign-in"
          >
            Sign in
          </Link>
        </>
      ) : (
        <Button
          onClick={(e) => {
            e.preventDefault();
            return signOut(() => {
              router.push("/");
            });
          }}
          sx={{
            bg: "red",
            fontSize: "2rem",
            lineHeight: 1,
            p: "1rem 2rem",
            display: "flex",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Log Out
        </Button>
      )}
    </Box>
  );
};
