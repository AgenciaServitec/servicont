import { LoginForm } from "@/components/login-form";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function LoginIntegration() {
  return <Login />;
}

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-primary-foreground">
              <Image
                src="/images/isotipo.png"
                width={170}
                height={42}
                alt="logo servicont"
                className="w-full max-w-[200px] h-auto"
              />
            </div>
            ServiCont
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://picsum.photos/1200/900"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
