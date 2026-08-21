"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  User,
  GraduationCap,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  Download,
  MapPin,
  Calendar,
  Building,
} from "lucide-react"
import { motion } from "framer-motion"

import projects from "@/lib/projects.json"
import experiences from "@/lib/experiences.json"

function X() {
  return (
    <svg className="w-5 h-5 bi" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  )
}


export function Dashboard() {
  const techCategories = [
    {
      title: "Programming",
      technologies: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
      ],
    },
    {
      title: "Web",
      technologies: ["HTML", "CSS", "Node.js", "Express.js", "Svelte.js", "SvelteKit", "React.js", "Next.js", "Flask", "FastAPI"],
    },
    {
      title: "AI/ML",
      technologies: ["Pandas", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "LLMs", "LangChain", "RAG", "Prompt Engineering"],
    },
    {
      title: "Database",
      technologies: ["MongoDB", "PostgreSQL", "Supabase", "Redis"],
    },
    {
      title: "DevOps/Tools",
      technologies: ["Linux", "Git", "GitHub", "AWS", "Docker", "Figma", "Jira"],
    },
  ]

  const educationData = [
    {
      institution: "Indian Institute of Technology Madras",
      degree: "Bachelor of Science - BS, Data Science and Applications",
      duration: "2023 - Present",
      location: "Chennai, Tamil Nadu, India",
    },
    {
      institution: "Saraswati Vidya Mandir Inter College",
      degree: "Higher Secondary Certificate (12th Grade)",
      duration: "2021 - 2023",
      location: "Prayagraj, Uttar Pradesh, India",
    },
  ]

  const socialLinks = [
    // {
    //   name: "Resume",
    //   href: "https://drive.google.com/file/d/13gDQDN3YQnspvdvggq0avJW9Ic4dD8Ba/view?usp=sharing",
    //   icon: Download,
    //   description: "Download CV",
    //   color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
    // },
    {
      name: "Email",
      href: "mailto:madhavmishra1124@gmail.com",
      icon: Mail,
      description: "Get in touch",
      color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200",
    },
    {
      name: "GitHub",
      href: "https://github.com/madhav512",
      icon: Github,
      description: "View repositories",
      color: "hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/madhav512",
      icon: Linkedin,
      description: "Professional profile",
      color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
    },
    {
      name: "X",
      href: "https://X.com/madhav512",
      icon: X,
      description: "Follow updates",
      color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/madhav512/",
      icon: Code,
      description: "Coding profile",
      color: "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex items-center gap-4 mx-auto">
            <Avatar className="w-28 h-28">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/madhav.jpg-QYlyDhUdr7BN3yuQycwUmorHH68vSj.jpeg"
                alt="Madhav Mishra"
              />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Madhav Mishra</h1>
              <p className="text-muted-foreground">Web Developer & AI Enthusiast</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary Section with Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a dedicated full-stack developer currently pursuing Data Science at IIT Madras, combining
                    academic excellence with hands-on industry experience. My journey spans from crafting pixel-perfect
                    user interfaces to building robust backend systems and implementing machine learning solutions. With
                    experience across multiple internships and freelance projects, I specialize in modern web
                    technologies including React, Next.js, Python, and various databases, always focusing on creating
                    scalable, user-friendly applications that solve real-world problems.
                  </p>

                  {/* Stats integrated in Summary */}
                  <div className="flex gap-7">
                    <div className="flex items-center gap-3 pr-3 py-3 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">10+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pr-3 py-3 rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">15+</div>
                        <div className="text-xs text-muted-foreground">Technologies</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {socialLinks.map((link) => (
                      <motion.div key={link.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`flex items-center gap-3 p-3 border rounded-lg transition-all duration-200 ${link.color} hover:shadow-md group`}
                        >
                          <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-background transition-colors">
                            <link.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{link.name}</div>
                            {/* <div className="text-xs text-muted-foreground">{link.description}</div> */}
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>



            {/* Experience Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-6 pr-4">
                      {experiences.map((exp) => (
                        <Card key={`${exp.company}-${exp.duration}`} className="border-l-4 border-l-primary">
                          <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <CardTitle className="text-xl">{exp.position}</CardTitle>
                                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                  <Building className="w-4 h-4" />
                                  <span className="font-medium">{exp.company}</span>
                                  <Badge variant="outline">{exp.type}</Badge>
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
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
                            <p className="text-muted-foreground">{exp.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>


          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-72">
                    <div className="space-y-6 pr-4">
                      {educationData.map((edu) => (
                        <Card key={`${edu.institution}-${edu.duration}`} className="border-l-4 border-l-primary">
                          <CardHeader>
                            <div className="flex flex-col gap-4">
                              <div>
                                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                                <div className="text-base font-semibold text-primary mb-2">{edu.institution}</div>
                                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {edu.duration}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {edu.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>



            {/* Technologies with Categories */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <ScrollArea className="h-80"> */}
                  <div className="space-y-4 pr-4">
                    {techCategories.map((category) => (
                      <div key={category.title} className="space-y-2">
                        <h4 className="font-medium text-sm">{category.title}</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* </ScrollArea> */}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Projects Section - List View */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-none">

            <CardHeader className="pl-1">
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* <ScrollArea className="h-96"> */}
              <div className="sm:columns-2 md:columns-2 lg:columns-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="break-inside-avoid mb-4"
                  >

                    <div className="relative overflow-hidden rounded-t-lg border border-b-0">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div
                      className="p-4 border rounded-lg border-t-0 rounded-t-none hover:shadow-md transition-shadow space-y-3"
                    >

                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.links.demo && (
                            <Button size="sm" asChild>
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                Live
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button size="sm" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                Code
                              </a>
                            </Button>
                          )}
                          {project.links.presentation && (
                            <Button size="sm" asChild>
                              <a href={project.links.presentation} target="_blank" rel="noopener noreferrer">
                                Slides
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* </ScrollArea> */}
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
