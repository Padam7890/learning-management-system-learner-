import { SiteHeader } from "@/components/site-header"
import { ContinueLearning } from "@/components/continue-learning"
import { AllMaterials } from "@/components/all-materials"

export default function Home() {
  return (
    <div className="min-h-screen ">
      <SiteHeader />
      <main className="container mx-auto">
        {/* <ContinueLearning />
        <AllMaterials /> */}
      </main>
    </div>
  )
}

