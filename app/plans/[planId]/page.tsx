"use client";
import { useEffect, useState } from "react";
import { plans } from "@/data-list";
import { useParams, useRouter } from "next/navigation";
import { PlanCard } from "@/components/pages/PlanCard";
import { loadLyraForm } from "@lyracom/embedded-form-glue";

export default function PlanId() {
  const { planId } = useParams();
  const router = useRouter();

  const [plan, setPlan] = useState<Plan | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const _plan = plans.find((plan) => plan.id === planId);

    if (!_plan) {
      router.back();
      return;
    }

    setPlan(_plan);
  }, [planId]);

  useEffect(() => {
    (async () => {
      try {
        const PUBLIC_KEY =
          "69876341:testpublickey_DEMOPUBLICKEY95me92597fd28tGD4r5";
        const DEMO_TOKEN = "DEMO-TOKEN-FOR-TESTING";

        await loadLyraForm({
          publicKey: PUBLIC_KEY,
          formToken: DEMO_TOKEN,
          containerId: "myPaymentForm",
        });
        console.log("Formulario cargado correctamente");
      } catch (e) {
        console.error("Error al cargar el formulario: ", e);
      }
    })();
  }, []);

  return (
    <div className="w-full p-6">
      <h1 className="mb-3 text-4xl">Plan seleccionado</h1>
      <div>
        <div className="container">
          <div>
            <div
              className="kr-smart-form"
              kr-form-token="DEMO-TOKEN-FOR-TESTING"
            ></div>
          </div>
        </div>
        <div>
          {/*<div className="plan-wrapper flex">*/}
          {/*  {plans.map(*/}
          {/*    (plan, index) =>*/}
          {/*      plan.id === planId && (*/}
          {/*        <PlanCard*/}
          {/*          key={plan?.id || index}*/}
          {/*          planId={plan.id}*/}
          {/*          name={plan.name}*/}
          {/*          price={plan.price}*/}
          {/*          description={plan.description}*/}
          {/*          services={plan.services}*/}
          {/*        />*/}
          {/*      ),*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
