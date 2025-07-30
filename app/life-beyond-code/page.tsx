"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Medal, Heart, Camera, BookOpen, Music, Gamepad2, Coffee, Sun, Moon, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Link from "next/link"

export default function LifeBeyondCode() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          // Check which story is currently active to determine slide count
          const currentStory = stories.find(story => story.color === 'blue' || story.color === 'pink' || story.color === 'red')
          const slideCount = currentStory?.color === 'yellow' ? 8 : (currentStory?.color === 'blue' ? 10 : (currentStory?.color === 'pink' ? 17 : 3))
          return (prev + 1) % slideCount
        })
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const stories = [
    {
      title: "More than a Game ❤️",
      subtitle: "From being unsold to A champion",
      description: "I have always had a thing for football. More than computers, more than any code. I would always be the first one to arrive in the field and the last to leave. I was never the best player in the field yet I yearned to be at the top. Always wanted to showcase what I was capable of. After joining BRAC, I wanted to play for the main team. It was a dream of mine to play for such a team I've heard so much about. But I had to pass my first obstacle, the BUFL. 32 clubs participated here but only one team would take home the championship. This was such a big deal as it was the 10th season and all the alumni were invited to play. I wanted to showcase my talent so bad. Yet I was unsold in the auction. I was heartbroken. But I had the ego, I wanted to show everyone what I was capable of. I took my team to win the title with my performance and got awarded the most valuable player of the tournament. Irony isn't it? Then I got called up for the main team. For me that was the dream come true. I was so happy just to be a part of that team. In my debut match I scored twice. We played game after game and won all of them. We beat IUB in the finals after defeating NSU in the semis. For me it was like a miracle. Couldn't have done it without my hunger to win. The cup I won for BRAC was last won 5 years ago and not won since. Feels good to be at the top ngl xD",
      achievements: ["BUFL'10 MVP", "BUFL'10 CHAMPION", "INTER UNIVERSITY CHAMPION"],
      slides: [
        { type: "image", src: "/sports1.jpg", alt: "Football moment" },
        { type: "image", src: "/sports2.jpg", alt: "Match action" },
        { type: "image", src: "/sports3.jpg", alt: "Championship celebration" },
        { type: "image", src: "/sports4.jpg", alt: "Team victory" },
        { type: "image", src: "/sports5.jpg", alt: "Game highlights" },
        { type: "image", src: "/sports6.jpg", alt: "Championship moments" },
        { type: "image", src: "/sports7.jpg", alt: "Athletic achievements" },
        { type: "image", src: "/sports8.jpg", alt: "Sports memories" }
      ],
      color: "yellow"
    },
    {
      title: "Through the Lens",
      subtitle: "Capturing Life's Moments",
      description: "Not flexing but I think I have the eye of the photographer xD Or that's what my mom used to say. Nevertheless, I stop when there's a sky or I don't know when something catches my eye maybe?",
      achievements: ["Street Photography", "Nature Photography"],
      slides: [
        { type: "image", src: "/lens (2).jpg", alt: "Captured scene" },
        { type: "image", src: "/lens (3).jpg", alt: "Photography work" },
        { type: "image", src: "/lens (4).jpg", alt: "Lens capture" },
        { type: "image", src: "/lens (5).jpg", alt: "Photography art" },
        { type: "image", src: "/lens (6).jpg", alt: "Lens moment" },
        { type: "image", src: "/lens (7).jpg", alt: "Photography scene" },
        { type: "image", src: "/lens (8).jpg", alt: "Lens work" },
        { type: "image", src: "/lens (9).jpg", alt: "Photography capture" },
        { type: "image", src: "/lens (14).jpg", alt: "Photography moment" },
        { type: "image", src: "/lens (15).jpg", alt: "Lens scene" }
      ],
      color: "blue"
    },
    {
      title: "The Gamer",
      subtitle: "I play for fun (jk)",
      description: "As I said, I used to play for fun. Then I don't know when it became all competitive. Maybe it's my hunger to win or just the ego that hates to lose. Either way, not a fun time (unless I win xD)",
      achievements: ["FPS games", "open world survival", "Esports Interest"],
      slides: [
        { type: "image", src: "/placeholder.jpg", alt: "Gaming setup" },
        { type: "image", src: "/placeholder.jpg", alt: "Strategy game" },
        { type: "image", src: "/placeholder.jpg", alt: "Puzzle solving" }
      ],
      color: "red",
      isGamingProfiles: true
    },
    {
      title: "Living by the moment",
      subtitle: "one moment at a time",
      description: "Always loved my friends. Love to travel. Love my Family. Yes, I'm that guy xD",
      achievements: ["Likes to travel", "chill with friends"],
      slides: [
        { type: "image", src: "/life (1).jpg", alt: "Life capture" },
        { type: "image", src: "/life (2).jpg", alt: "Life art" },
        { type: "image", src: "/life (3).jpg", alt: "Life work" },
        { type: "image", src: "/life (4).jpg", alt: "Life capture" },
        { type: "image", src: "/life (6).jpg", alt: "Life moment" },
        { type: "image", src: "/life (7).jpg", alt: "Life scene" },
        { type: "image", src: "/life (8).jpg", alt: "Life work" },
        { type: "image", src: "/life (9).jpg", alt: "Life capture" },
        { type: "image", src: "/life (11).jpg", alt: "Life moment" },
        { type: "image", src: "/life (12).jpg", alt: "Life scene" }
      ],
      color: "pink"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: "text-yellow-500",
      blue: "text-blue-500", 
      green: "text-green-500",
      purple: "text-purple-500",
      red: "text-red-500",
      pink: "text-pink-500"
    }
    return colors[color as keyof typeof colors] || "text-white"
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
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20 text-white' : 'bg-black/10 border-black/30 hover:bg-black/20 text-black'}`}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </Link>
                <div className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
                  Life Beyond Code
                </div>
              </div>
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
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6 text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
              Life Beyond Code
            </h1>
            <p className={`text-xl md:text-2xl mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
              When my ahh is not glued to the PC
            </p>
          </div>
        </section>

        {/* Stories Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="space-y-32">
              {stories.map((story, index) => (
                <div key={index} className="space-y-12">
                  {/* Story Content - Centered */}
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-fingerpaint)' }}>
                        {story.title}
                      </h3>
                      <p className={`text-xl transition-colors duration-300 ${getColorClasses(story.color)}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                        {story.subtitle}
                      </p>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-black/80'} max-w-4xl mx-auto`}>
                      {story.description}
                    </p>
                    <div className="space-y-2">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center justify-center">
                          <Medal className={`h-5 w-5 mr-3 transition-colors duration-300 ${getColorClasses(story.color)}`} />
                          <span className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-white/90' : 'text-black/90'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Media Section */}
                  <div className="max-w-4xl mx-auto">
                    {story.color === 'yellow' ? (
                      // Special layout for Athlete section - Slideshow left, GIF right
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Slideshow on the left */}
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md`}>
                          <div className="relative h-80 lg:h-96">
                            {story.slides.map((slide, slideIndex) => (
                              <div
                                key={slideIndex}
                                className={`absolute inset-0 transition-all duration-500 ${
                                  slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                              >
                                <div className="w-full h-full">
                                  <img 
                                    src={slide.src} 
                                    alt={slide.alt}
                                    className={`w-full h-full ${slide.src === '/sports6.jpg' ? 'object-top' : 'object-cover'}`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Slideshow Controls */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                            <Button
                              onClick={() => setCurrentSlide((prev) => (prev - 1 + 8) % 8)}
                              size="sm"
                              variant="outline"
                              className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            
                            <Button
                              onClick={() => setIsPlaying(!isPlaying)}
                              size="sm"
                              variant="outline"
                              className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                            >
                              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </Button>

                            <Button
                              onClick={() => setCurrentSlide((prev) => (prev + 1) % 8)}
                              size="sm"
                              variant="outline"
                              className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Slide Indicators */}
                          <div className="absolute bottom-4 right-4 flex space-x-2">
                            {story.slides.map((_, slideIndex) => (
                              <button
                                key={slideIndex}
                                onClick={() => setCurrentSlide(slideIndex)}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  slideIndex === currentSlide 
                                    ? (isDarkMode ? 'bg-white' : 'bg-black') 
                                    : (isDarkMode ? 'bg-white/30' : 'bg-black/30')
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* GIF on the right */}
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md`}>
                          <div className="relative h-80 lg:h-96">
                            <img 
                              src="/sport_gif.gif" 
                              alt="Athletic moments"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : story.color === 'blue' ? (
                       // Special layout for Photography section - Vertical slideshow for vertical photos
                       <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md`}>
                         <div className="relative h-[600px] lg:h-[700px]">
                           {story.slides.map((slide, slideIndex) => (
                             <div
                               key={slideIndex}
                               className={`absolute inset-0 transition-all duration-500 ${
                                 slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                               }`}
                             >
                               <div className="w-full h-full">
                                 <img 
                                   src={slide.src} 
                                   alt={slide.alt}
                                   className="w-full h-full object-cover"
                                 />
                               </div>
                             </div>
                           ))}
                         </div>

                         {/* Slideshow Controls */}
                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                           <Button
                             onClick={() => setCurrentSlide((prev) => (prev - 1 + 10) % 10)}
                             size="sm"
                             variant="outline"
                             className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                           >
                             <ChevronLeft className="h-4 w-4" />
                           </Button>
                           
                           <Button
                             onClick={() => setIsPlaying(!isPlaying)}
                             size="sm"
                             variant="outline"
                             className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                           >
                             {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                           </Button>

                           <Button
                             onClick={() => setCurrentSlide((prev) => (prev + 1) % 10)}
                             size="sm"
                             variant="outline"
                             className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                           >
                             <ChevronRight className="h-4 w-4" />
                           </Button>
                         </div>

                         {/* Slide Indicators */}
                         <div className="absolute bottom-4 right-4 flex space-x-2">
                           {story.slides.map((_, slideIndex) => (
                             <button
                               key={slideIndex}
                               onClick={() => setCurrentSlide(slideIndex)}
                               className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                 slideIndex === currentSlide 
                                   ? (isDarkMode ? 'bg-white' : 'bg-black') 
                                   : (isDarkMode ? 'bg-white/30' : 'bg-black/30')
                               }`}
                             />
                           ))}
                         </div>
                       </div>
                    ) : story.isGamingProfiles ? (
                      // Gaming Profiles section
                      <div className={`rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md p-8`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Discord Profile */}
                          <div className={`text-center p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} flex items-center justify-center`}>
                              <Gamepad2 className={`h-8 w-8 transition-colors duration-300 ${getColorClasses(story.color)}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                              Discord
                            </h3>
                            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
                              skinnyscorpio
                            </p>
                          </div>

                          {/* Steam Profile */}
                          <div className={`text-center p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} flex items-center justify-center`}>
                              <Gamepad2 className={`h-8 w-8 transition-colors duration-300 ${getColorClasses(story.color)}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                              Steam
                            </h3>
                            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
                              sk1nny
                            </p>
                            <a 
                              href="https://steamcommunity.com/id/shihab47/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`text-xs transition-colors duration-300 ${getColorClasses(story.color)} hover:underline`}
                            >
                              View Profile
                            </a>
                          </div>

                          {/* Riot Profile */}
                          <div className={`text-center p-6 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-white/20' : 'bg-black/20'} flex items-center justify-center`}>
                              <Gamepad2 className={`h-8 w-8 transition-colors duration-300 ${getColorClasses(story.color)}`} />
                            </div>
                            <h3 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
                              Riot Games
                            </h3>
                            <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
                              skinnydapu
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Slideshow for other sections
                      <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-md`}>
                        {/* Slideshow Container */}
                        <div className={`relative ${story.color === 'pink' ? 'h-[600px] lg:h-[700px]' : 'h-80 lg:h-96'}`}>
                          {story.slides.map((slide, slideIndex) => (
                            <div
                              key={slideIndex}
                              className={`absolute inset-0 transition-all duration-500 ${
                                slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              <div className="w-full h-full">
                                <img 
                                  src={slide.src} 
                                  alt={slide.alt}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Slideshow Controls */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                          <Button
                            onClick={() => setCurrentSlide((prev) => (prev - 1 + (story.color === 'pink' ? 17 : 3)) % (story.color === 'pink' ? 17 : 3))}
                            size="sm"
                            variant="outline"
                            className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          
                          <Button
                            onClick={() => setIsPlaying(!isPlaying)}
                            size="sm"
                            variant="outline"
                            className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                          >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>

                          <Button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % (story.color === 'pink' ? 17 : 3))}
                            size="sm"
                            variant="outline"
                            className={`transition-colors duration-300 ${isDarkMode ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white' : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'}`}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                          {story.slides.map((_, slideIndex) => (
                            <button
                              key={slideIndex}
                              onClick={() => setCurrentSlide(slideIndex)}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                slideIndex === currentSlide 
                                  ? (isDarkMode ? 'bg-white' : 'bg-black') 
                                  : (isDarkMode ? 'bg-white/30' : 'bg-black/30')
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 border-t backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'border-white/20 bg-black/20' : 'border-black/20 bg-white/20'}`}>
          <div className="container mx-auto px-6 text-center">
            <p className={`transition-colors duration-300 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`} style={{ fontFamily: 'var(--font-schoolbell)' }}>
              Life is more than just code - it's about experiences, growth, and the stories we create along the way 😊
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
} 