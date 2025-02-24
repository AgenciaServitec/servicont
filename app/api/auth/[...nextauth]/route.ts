import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "@/firebase";
import { querySnapshotToArray } from "@/firebase/firestore";
import assert from "assert";
import { JWT } from "next-auth/jwt";

const existsUser = async (email: string, password: string) => {
  const usersRef = collection(firestore, "users");

  const _query = query(
    usersRef,
    where("email", "==", email),
    where("password", "==", password),
    limit(1),
  );

  const querySnapshot = await getDocs(_query);

  return querySnapshotToArray(querySnapshot);
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "tu@ejemplo.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        assert(credentials?.email, "sign-in/missing_email");
        assert(credentials?.password, "sign-in/missing_password");

        const users = await existsUser(credentials.email, credentials.password);
        const user = users?.[0];

        if (!user) {
          throw new Error("sign-in/invalid_email_or_password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = <JWT>user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
