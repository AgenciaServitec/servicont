import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    email: "admin@servicont.com",
    password: "123456", // Simula una base de datos
  },
];

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
      async authorize(credentials) {
        const user = users.find((u) => u.email === credentials?.email);

        if (user && credentials?.password === user.password) {
          return { id: user.id, email: user.email };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirige al inicio de sesión personalizado
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // Genera un valor único con `openssl rand -base64 32`
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
