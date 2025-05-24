import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"
import { Education } from "@/components/education"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </main>
  )
}
