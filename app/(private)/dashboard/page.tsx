"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

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

const Home = ({ session }: { session: Session }) => {
  return (
    <div className="min-h-svh">
      <h1>Bienvenido {session?.user?.email}</h1> <br />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
