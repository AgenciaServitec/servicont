"use client";
import React, { Suspense, useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import { PlanCard } from "@/components/pages/PlanCard";
import KRGlue from "@lyracom/embedded-form-glue";
import { config } from "@/app/config";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Script from "next/script";

interface PaymentRequestBody {
    amount: number;
    currency: string;
    paymentMethods: string[];
    customer: {
        email: string;
    };
    orderId: string;
}

export default function PlanId() {
    const { planId } = useParams();
    const router = useRouter();

    const [plan, setPlan] = useState<Plan | null>(null);
    const [message, setMessage] = useState<string>("");

    const mapPayment = (payment?: Payment): Payment => ({
        id: "asdfdg32456tfds3",
        clientId: "asdfdg32746tfds3",
        billing: {
            method: "card",
            service: "izipay",
            totalPrice: "200",
        },
        contact: {
            documentNumber: "43115156",
            email: "juanito@gmail.com",
            firstName: "Juanito",
            maternalSurname: "Quispicanchi",
            paternalSurname: "Toribio",
            phone: {
                prefix: "+51",
                number: "954285471",
            },
        },
        product: {
            type: "service",
            name: "Plan Medio",
            price: "200",
        },
        service: {
            id: "izipay",
            events: {
                formTokenCreationDate: new Date(),
                paymentNotification: "",
            },
        },
    });

    const getToken = async () => {
        try {
            const response = await fetch(
                "https://api-servitecsales.web.app/payments/izipay/token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(mapPayment()),
                },
            );

            const data = await response.json();

            const token = data.answer.formToken;

            console.log("token:", token);

            const { KR } = await KRGlue.loadLibrary(
                config.development.izipay.endpoint,
                config.development.izipay.publicKey,
            );

            await KR.setFormConfig({ formToken: token });
            await KR.renderElements("#myPaymentForm");

            console.log("Formulario cargado correctamente");
        } catch (e) {
            console.error("Error al cargar el formulario: ", e);
        }
    };

    return (
        <Suspense fallback={"loading..."}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/neon-reset.css"
                />
                <Script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/neon.js"></Script>
            </Head>
            <div className="w-full p-6">
                <Button onClick={getToken}>Obtener Token</Button>
                <h1 className="mb-3 text-4xl">Plan seleccionado</h1>
                <div>
                    <div
                        id="myPaymentForm"
                        className="flex flex-col justify-center items-center"
                    >
                        <div className="kr-smart-form" kr-card-form-expanded="true" />
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
        </Suspense>
    );
}
