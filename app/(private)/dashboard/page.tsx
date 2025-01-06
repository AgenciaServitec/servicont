"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function HomeIntegration() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in.</div>;
  }

  return <Home session={session} />;
}

const Home = ({ session }: { session: any }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <h1>Bienvenido {session?.user?.email}</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
