import { ProjectsPage } from "@/components/projects-page"
import { Navigation } from "@/components/navigation"

export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsPage />
    </main>
  )
}
