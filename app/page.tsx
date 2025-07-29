"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Code, Brain, GraduationCap, Mail, ExternalLink, ChevronDown, Sparkles, Facebook, Instagram, Twitter, Phone, Sun, Moon } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const projects = [
    {
      title: "Geodetic Survey Corporation Website",
      description:
        "Helped build a professional website for a government-registered land surveying company with over 20 years of experience. The website showcases their services, technologies, and nationwide coverage across Bangladesh.",
      tech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
      github: "#",
      demo: "https://www.geodeticbd.com/",
    },
    {
      title: "Online Business SEO & Product Management",
      description:
        "Contributed to an online business by handling their SEO optimizations and product management. Improved search engine visibility and streamlined product operations for better customer experience.",
      tech: ["SEO", "Product Management", "Digital Marketing", "Analytics"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Code Assistant",
      description:
        "A machine learning model that helps developers write better code by providing intelligent suggestions and bug detection.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/soudhowo/ai-code-assistant",
      demo: "#",
    },
  ]

  const skills = {
    "AI & Machine Learning": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    "Web Development": ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "SQL"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"],
  }

  return (
    <div className={`min-h-screen text-white overflow-x-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className={`absolute inset-0 z-0 transition-colors duration-300 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'}`}></div>
      <div className={`absolute inset-0 z-0 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-t from-black/50 via-transparent to-black/30' : 'bg-gradient-to-t from-white/50 via-transparent to-white/30'}`}></div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-black/30 border-white/20' : 'bg-white/30 border-black/20'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
              <div className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
              Shihab Yousuf
            </div>
              <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                      className={`capitalize transition-colors duration-300 ${
                        activeSection === section 
                          ? (isDarkMode ? 'text-white' : 'text-black') 
                          : (isDarkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black')
                      }`}
                      style={{ fontFamily: 'var(--font-schoolbell)' }}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => window.open("/life-beyond-code", "_self")}
                    variant="outline"
                    size="sm"
                    className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                    style={{ fontFamily: 'var(--font-schoolbell)' }}
                  >
                    Life Beyond Code
                  </Button>
                  <Button
                    onClick={toggleTheme}
                    variant="outline"
                    size="sm"
                    className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
          <div className={`absolute inset-0 transition-colors duration-300 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} animate-pulse`}></div>
        <div
          className={`container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <img
                src="/placeholder-user.JPG"
              alt="Shihab Yousuf"
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/50 shadow-2xl object-cover"
            />
          </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
            Shihab Yousuf
          </h1>
            <p className={`text-xl md:text-2xl mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>Computer Science Student & AI Enthusiast</p>
            <p className={`text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
            Passionate about artificial intelligence and building innovative solutions that make a difference
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button
              onClick={() => window.open("https://github.com/soudhowo", "_blank")}
              variant="outline"
              size="lg"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              onClick={() => window.open("https://leetcode.com/soudhowo", "_blank")}
              variant="outline"
              size="lg"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
              <Code className="mr-2 h-5 w-5" />
              LeetCode
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          <div className="animate-bounce">
            <ChevronDown
                className={`h-8 w-8 mx-auto cursor-pointer transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'} backdrop-blur-md shadow-xl`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                      <GraduationCap className={`h-6 w-6 mr-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>Education</h3>
                  </div>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'} mb-4`}>
                    Currently pursuing Computer Science at BRAC University, where I'm diving deep into algorithms, data
                    structures, and cutting-edge AI technologies.
                  </p>
                  <div className="flex items-center mb-4">
                      <Brain className={`h-6 w-6 mr-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>AI Passion</h3>
                  </div>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>
                    I'm fascinated by the potential of artificial intelligence to solve complex problems. From machine
                    learning to neural networks, I love exploring how AI can transform industries and improve lives.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
                <div className={`flex items-center space-x-4 p-4 rounded-lg border backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                  <Sparkles className="h-8 w-8 text-yellow-500" />
                <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>Problem Solver</h4>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>Love tackling complex algorithmic challenges</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-4 p-4 rounded-lg border backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                  <Code className="h-8 w-8 text-green-500" />
                  <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>Full-Stack Developer</h4>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>Building end-to-end solutions with modern tech</p>
              </div>
                </div>
                <div className={`flex items-center space-x-4 p-4 rounded-lg border backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                  <Brain className="h-8 w-8 text-blue-500" />
                <div>
                    <h4 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>AI Researcher</h4>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>Exploring the frontiers of machine learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
        <section id="projects" className={`py-20 backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className="container mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                  className={`transition-all duration-300 group shadow-xl ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/15' : 'bg-black/10 border-black/20 hover:bg-black/15'} backdrop-blur-md`}
              >
                <CardContent className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-gray-600 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                    {project.title}
                  </h3>
                    <p className={`mb-4 text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                          className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 text-white border-white/30' : 'bg-black/20 text-black border-black/30'}`}
                          style={{ fontFamily: 'var(--font-schoolbell)' }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                      size="sm"
                      variant="outline"
                        className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                        style={{ fontFamily: 'var(--font-schoolbell)' }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.demo, "_blank")}
                      size="sm"
                        className={`transition-colors duration-300 ${isDarkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
                        style={{ fontFamily: 'var(--font-schoolbell)' }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'} backdrop-blur-md shadow-xl`}>
                <CardContent className="p-6">
                    <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>{category}</h3>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                          <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section id="contact" className={`py-20 backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className="container mx-auto px-6 text-center">
            <h2 className={`text-4xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
            Let's Connect
          </h2>
            <p className={`text-xl mb-12 max-w-2xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
            I'm always excited to discuss AI, collaborate on projects, or just chat about technology. Feel free to reach
            out!
          </p>
            
            {/* Contact Info */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm border transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                <Mail className={`h-5 w-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                <span className={`transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>sourjo.shihab1@gmail.com</span>
              </div>
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm border transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                <Phone className={`h-5 w-5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                <span className={`transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>+880 1732309825</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex justify-center space-x-4">
            <Button
                onClick={() => window.open("https://www.linkedin.com/in/shihab-yousuf-b17475291/", "_blank")}
              size="lg"
              variant="outline"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
            <Button
                onClick={() => window.open("https://www.facebook.com/soudhowo", "_blank")}
                size="lg"
                variant="outline"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
              >
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
              <Button
                onClick={() => window.open("https://www.instagram.com/soudhowo/", "_blank")}
                size="lg"
                variant="outline"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
              <Button
                onClick={() => window.open("https://x.com/IamSHIHABYOUSUF", "_blank")}
              size="lg"
              variant="outline"
                className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
                <Twitter className="h-5 w-5 mr-2" />
                X (Twitter)
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className={`py-8 border-t backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'border-white/20 bg-black/20' : 'border-black/20 bg-white/20'}`}>
        <div className="container mx-auto px-6 text-center">
            <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>© 2024 Shihab Yousuf. Built with Next.js and lots of vibes 😉</p>
        </div>
      </footer>
      </div>
    </div>
  )
}
