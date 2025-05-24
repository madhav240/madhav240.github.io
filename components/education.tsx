"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const educationData = [
    {
      institution: "Indian Institute of Technology Madras",
      degree: "Bachelor of Science in Data Science and Applications",
      duration: "May 2023 - Present",
      location: "Chennai, Tamil Nadu, India",
      cgpa: "8.22",
      status: "Pursuing",
      coursework: [
        "Mathematics",
        "Machine Learning",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
      ],
      achievements: [
        "Maintained CGPA of 8.22",
        "Active participant in coding competitions",
        "Member of technical societies",
      ],
      type: "Undergraduate",
    },
    {
      institution: "Saraswati Vidya Mandir Inter College",
      degree: "Higher Secondary Certificate (12th Grade)",
      duration: "2021 - 2023",
      location: "India",
      percentage: "85%+",
      status: "Completed",
      coursework: ["Physics", "Chemistry", "Mathematics"],
      achievements: [
        "Scored 85%+ in board examinations",
        "Strong foundation in STEM subjects",
        "Computer Science specialization",
      ],
      type: "Secondary",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pursuing":
        return "default"
      case "Completed":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Undergraduate":
        return GraduationCap
      case "Secondary":
        return Award
      default:
        return GraduationCap
    }
  }

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise and analytical thinking.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = getTypeIcon(edu.type)
            return (
              <motion.div
                key={`${edu.institution}-${edu.duration}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                          <div className="text-lg font-semibold text-primary mb-2">{edu.institution}</div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Coursework */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
