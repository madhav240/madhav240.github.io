"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      company: "Tall Breeze",
      position: "Software Engineer",
      type: "Internship",
      location: "Remote · Ghaziabad, Uttar Pradesh, India",
      duration: "August 2024 - September 2024",
      description: "Worked on multiple projects. Converted Figma designs to code, ensuring responsive and high-quality implementation.",
      technologies: ["Next.js", "Storybook", "React.js", "TypeScript"],
    },
    {
      company: "Esoteric Mineral Solutions",
      position: "Web Developer",
      type: "Freelance",
      location: "Remote · Bengaluru, Karnataka, India",
      duration: "July 2024",
      description: <>I single-handedly developed a modern, fully responsive company website (<a href="https://esotericminerals.com" className="text-black underline underline-offset-4">esotericminerals.com</a>) that ensures seamless performance across all devices while collaborating closely with the website designer to prioritize visual appeal and usability. Additionally, I implemented an automated email notification system that sends confirmations to users upon contact form submission, enhancing the overall user experience and streamlining communication processes.</>,
      technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Hostinger"],
    },
    {
      company: "Lamarr",
      position: "Frontend Engineer",
      type: "Internship",
      location: "Remote · Kanpur, Uttar Pradesh, India",
      duration: "June 2024",
      description: "I developed a user-friendly search webpage that enables efficient retrieval and display of records based on user inputs, while also customizing the Quill editor to enhance user experience by adding a templating feature that streamlines content creation and improves overall functionality.",
      technologies: ["Next.js", "TailwindCSS", "FastAPI", "RadixUI", "Supabase"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional experience building scalable web applications and delivering high-quality solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.duration}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <Badge variant="outline">{exp.type}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* <ul className="space-y-2"> */}
                    {/* {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))} */}
                  {/* </ul> */}
                  <p className="text-muted-foreground">

                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
