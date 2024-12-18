import React from "react";
import { ContentWrapper } from "@/app/components";
import { plans } from "@/data-list";
import { PlanCard } from "@/app/plans/[planId]/PlanCard";

export const PlansSectionComponent = () => {
  return (
    <ContentWrapper>
      <div className="w-full ">
        <div className="relative isolate bg-white px-6 py-10 sm:py-4 lg:px-8">
          <div
            className="absolute inset-x-0-top-3-z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-primary">Precios</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Elige el plan adecuado para ti
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Elija un plan asequible que incluya los servicios de acuerdo a sus
            requerimientos para su empresa.
          </p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-4 sm:mt-20 sm:gap-y-5 lg:max-w-4xl lg:grid-cols-3">
            {plans.map((plan, index) => (
              <PlanCard
                key={plan?.id || index}
                planId={plan.id}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                services={plan.services}
              />
            ))}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
