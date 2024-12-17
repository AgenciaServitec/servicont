import React from "react";
import Link from "next/link";

interface Props {
  planId: string;
  name: string;
  price: string;
  description: string;
  services: string[];
}

export const PlanCard = ({
  planId,
  name,
  price,
  description,
  services = [],
}: Props) => {
  return (
    <div
      className={`rounded-3xl p-8 ring-1 ring-gray-900/10 min-h-[40em] h-auto sm:mx-8 sm:p-10 lg:mx-0 ${planId === "plan-mipe" ? "bg-gray-900" : "bg-white/60"}`}
    >
      <h3 id="tier-plan" className="text-base/7 font-semibold text-primary">
        {name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className={`text-5xl font-semibold tracking-tight  ${planId === "plan-mipe" ? "text-white" : "text-gray-900"}`}
        >
          S/ {price}
        </span>
        <span className="text-base text-gray-500">/mes</span>
      </p>
      <p
        className={`mt-6 text-base/7 min-h-[5em] ${planId === "plan-mipe" ? "text-gray-200" : "text-gray-600"}`}
      >
        {description}
      </p>
      <ul
        role="list"
        className={`space-y-3 sm:mt-10 text-sm/6 min-h-[20em] mt-0 flex flex-col justify-start ${planId === "plan-mipe" ? "text-gray-200" : "text-gray-600"}`}
      >
        {(services || []).map((service, index) => (
          <li key={index} className="flex items-center gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-secondary"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </svg>
            {service}
          </li>
        ))}
      </ul>
      <Link
        href={`/plans/${planId}`}
        aria-describedby="tier-plan"
        className={`${planId === "plan-mipe" ? "mt-8 block rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:mt-10" : "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 ring-1 ring-blue-200 ring-inset hover:ring-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:mt-10"}`}
      >
        Empieza hoy
      </Link>
    </div>
  );
};
