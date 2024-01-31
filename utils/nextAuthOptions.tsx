import type { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export interface CustomSession extends Session {
  user: any;
  accessToken: string;
  refreshToken: string;
}

export const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      type: "credentials",
      credentials: {
        credential: { type: "text" },
      },
      async authorize(credentials: any) {
        // Add logic here to look up the user from the credentials supplied
        let result = [] as any;
        console.log("credentials", credentials);
        const data = {
          ...(credentials?.email && { email: credentials?.email }),
          ...(credentials?.password && { password: credentials?.password }),
          ...(credentials?.otp && { otp: credentials?.otp }),
          ...(credentials?.details && { details: credentials?.details }),
          ...(credentials?.type && { type: credentials?.type }),
          ...(credentials?.token && { token: credentials?.token }),
        };
        if (credentials?.typeLogin === "me") {
          result = "sdfsdftokensdfsdfsdfsdfsdfsdfsdfsdfsdf";
        }
        if (!result) {
          throw new Error("No user Found with Code Please Sign Up...!");
        }
        if (result) {
          // Any object returned will be saved in `user` property of the JWT
          return result;
        }
        // If you return null or false then the credentials will be rejected
        return null;
        // You can also Reject this callback with an Error or with a URL:
        // throw new Error('error message') // Redirect to error page
        // throw '/path/to/redirect'        // Redirect to a URL
      },
    }),
    // ...add more providers here
  ],
  secret: "JXiis/sJpKBgfBCYRawlY1JXvb2MB3VwkDGbMqBXlds=",
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 24 hours
  },

  callbacks: {
    async jwt({ token, user, account }) {
      console.log("token", token);
      // const updatedToken = { ...token }; // Create a new object with the properties of `token`
      // if (account) {
      //   if (account?.provider === "google") {
      //     updatedToken.provider = account?.provider as string;
      //   } else if (account?.provider === "facebook") {
      //     updatedToken.provider = account?.provider as string;
      //   }
      // }
      return { ...token, ...user }; // Only add `user` if it has a valid value
    },
    // `session` callback-д өөрчилсөн `CustomSession` типыг ашиглах
    async session({ session, token }) {
      console.log("session", session);
      // const queryClient = new QueryClient();
      // // @ts-ignore
      // const updatedSession: CustomSession = { ...session }; // Create a new object with the properties of `session`
      //
      // if (token?.customer) {
      //   updatedSession.accessToken = token?.token as string;
      //
      //   updatedSession.refreshToken = token?.refresh_token as string;
      //
      //   updatedSession.user = token?.customer as LoginResponseUserType;
      // }
      //
      // // google provider
      // // @ts-ignore
      // if (token?.provider === "google") {
      //   const dataGoogle = {
      //     account: {
      //       name: token?.name,
      //       email: token?.email,
      //       picture: token?.picture,
      //       sub: token?.sub,
      //       id: token?.sub,
      //       image: "",
      //       iat: "",
      //       exp: "",
      //       jti: "",
      //     },
      //   };
      //
      //   const result = await queryClient.fetchQuery(
      //     [API_ENDPOINTS.GMAIL_LOGIN, dataGoogle],
      //     () =>
      //       fetchGmailLogin(dataGoogle)
      //         .then((res) => {
      //           return res;
      //         })
      //         .catch((e) => {
      //           throw new Error(e.response?.data?.detail);
      //         }),
      //   );
      //
      //   updatedSession.user = result?.customer;
      //
      //   updatedSession.accessToken = result.token;
      //
      //   updatedSession.refreshToken = result?.refresh_token as string;
      // }
      // // facebook provider
      // if (token?.provider === "facebook") {
      //   const dataFacebook = {
      //     account: {
      //       name: token?.name,
      //       email: token?.email,
      //       picture: token?.picture,
      //       sub: token?.sub,
      //       id: token?.sub,
      //       image: "",
      //       iat: "",
      //       exp: "",
      //       jti: "",
      //     },
      //   };
      //
      //   const result = await queryClient.fetchQuery(
      //     [API_ENDPOINTS.FACEBOOK_LOGIN, dataFacebook],
      //     () =>
      //       fetchFacebookLogin(dataFacebook)
      //         .then((res) => {
      //           return res;
      //         })
      //         .catch((e) => {
      //           throw new Error(e.response?.data?.detail);
      //         }),
      //   );
      //   updatedSession.user = result?.customer;
      //
      //   updatedSession.accessToken = result.token;
      //
      //   updatedSession.refreshToken = result?.refresh_token as string;
      // }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },
  theme: {
    colorScheme: "light",
  },
};
