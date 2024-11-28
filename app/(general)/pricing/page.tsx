import {Metadata} from "next";

export const metadata : Metadata = {
  title: 'Pricing page',
  description: 'Esta es la página de precios'
};

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">
        Pricing page
        </span>
    </>
  );
}
