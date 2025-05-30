"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, X } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center lg:pt-16 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Madhav Mishra
                </span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Web Developer & AI Enthusiast
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Passionate about creating innovative web solutions and leveraging AI to solve real-world
                problems.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="mailto:madhavmishra1124@gmail.com">

                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1U_lgDUmFepT0nlNWU4VuG628n5aL3NHf/view?usp=drivesdk">
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </a>

            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="https://github.com/madhav240" target="_blank">

                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/madhav240" target="_blank">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://x.com/madhav240" target="_blank">
                <Button variant="ghost" size="icon">
                  <svg className="w-5 h-5 bi" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </Button>
              </a>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/madhav.jpg"
                  alt="Madhav Mishra"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
