import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirige si el usuario no está autenticado
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Rutas protegidas
};
