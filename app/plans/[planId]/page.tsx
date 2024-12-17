"use client";
import { useEffect, useState } from "react";
import { plans } from "@/data-list";
import { useParams, useRouter } from "next/navigation";

export default function PlanId() {
  const { planId } = useParams();
  const router = useRouter();

  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const _plan = plans.find((plan) => plan.id === planId);

    if (!_plan) {
      router.back();
      return;
    }

    setPlan(_plan);
  }, [planId]);

  return (
    <div className="w-full p-6">
      <h1 className="mb-3 text-4xl">Plan seleccionado</h1>
      <div className="plan-wrapper flex">
        {plan && (
          <div className="bg-secondary text-white p-6 rounded-lg w-auto">
            <h2 className="text-2xl">{plan.name}</h2>
            <strong className="text-4xl">S/ {plan.price}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
