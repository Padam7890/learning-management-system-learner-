"use client"
import { SiteHeader } from "@/components/site-header";
import { AllMaterials } from "@/components/all-materials";

export default function Home() {

  return (
    <div className="min-h-screen ">
      <SiteHeader />
      <main className="container mx-auto">
        {/* <ContinueLearning /> */}
        <AllMaterials />
      </main>
    </div>
  );
}
