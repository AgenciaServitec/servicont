import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import assert from "assert";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestoreAdmin } from "@/lib/firestore";
import { firestore } from "@/firebase";
import { collection, getDocs, limit, query, where } from "@firebase/firestore";
import { querySnapshotToArray } from "@/firebase/firestore";
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
  adapter: FirestoreAdapter(firestoreAdmin),
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
      async authorize(credentials) {
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
      console.log("Session Callback - Token:", token);
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
