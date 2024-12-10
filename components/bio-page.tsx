'use client';
import { Share2, Globe, Code, Briefcase, Github, Instagram, Menu } from 'lucide-react'
import { FaJs, FaReact, FaPython, FaDatabase, FaSteam, FaDiscord } from 'react-icons/fa'
import { SiTypescript, SiNodedotjs } from 'react-icons/si'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'

export function BioPage() {
  const [activeSection, setActiveSection] = useState('social')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen to-black text-white" id="animated-bg">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Profile Section */}
        <div className="relative mb-8 flex flex-col items-center">
          <div className="absolute right-0 top-0">
            <a href='#'><Share2 className="h-6 w-6 text-white/60" /></a>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-lg animate-gradient"></div>
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-zinc-800">
              <Image
                src="/avi.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold">
            <span className="text-[#00FF00]">@</span>akumadev
          </h1>
          <p className="text-sm text-gray-400">
            Contact: xaanarii@gmail.com
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mb-4">
          <button onClick={toggleMenu} className="w-full py-2 px-4 bg-zinc-800 rounded-lg flex items-center justify-between">
            <span>{activeSection === 'social' ? 'Social media' :
                   activeSection === 'about' ? 'About' :
                   activeSection === 'languages' ? 'Knowledge' : 'Projects'}
            </span>
            <Menu className="h-5 w-5" />
          </button>
          {isMenuOpen && (
            <div className="mt-2 bg-zinc-800 rounded-lg overflow-hidden">
              {['social', 'about', 'languages', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section)
                    setIsMenuOpen(false)
                  }}
                  className={`w-full py-2 px-4 text-left ${
                    activeSection === section
                      ? 'bg-zinc-700'
                      : 'hover:bg-zinc-700'
                  }`}
                >
                  {section === 'social' ? 'Social media' :
                   section === 'about' ? 'About' :
                   section === 'languages' ? 'Knowledge' : 'Projects'}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mb-8 justify-center gap-6 text-gray-400">
          {['social', 'about', 'languages', 'projects'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === section
                  ? 'text-white bg-zinc-800/50 shadow-lg'
                  : 'hover:text-white'
              }`}
            >
              {section === 'social' ? 'Social media' :
               section === 'about' ? 'About' :
               section === 'languages' ? 'Knowledge' : 'Projects'}
            </button>
          ))}
        </nav>

        {/* Content Cards */}
        {activeSection === 'social' && (
          <div className="space-y-4">
            <SocialCard
              platform="Discord"
              username="allvaez"
              link="discord.gg/"
              description="Contact me"
              icon={<FaDiscord className="h-6 w-6" />}
            />
            <SocialCard
              platform="Steam"
              username="uwusnaania123"
              link="steamcommunity.com/id/akuma21337"
              description="Check out my game library"
              icon={<FaSteam className="h-6 w-6" />}
            />
            <SocialCard
              platform="Github"
              username="akumadev1"
              link="github.com/akumadev1"
              description="View my projects and contributions"
              icon={<Github className="h-6 w-6" />}
            />
            <SocialCard
              platform="Instagram"
              username="rvnzxsu"
              link="instagram.com/rvnzxsu"
              description="There's nothing there"
              icon={<Instagram className="h-6 w-6" />}
            />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold flex items-center"><Globe className="mr-2" /> About</h2>
            <p className="text-gray-300">
              Lorem ipsum 😜
            </p>
          </div>
        )}

        {activeSection === 'languages' && (
          <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-bold flex items-center"><Code className="mr-2" /> Knowledge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LanguageCard
                icon={<FaJs className="text-yellow-400" />}
                name="JavaScript"
                description="Main Language"
                experience="3 years of experience"
                projects="6+ projects"
              />
              <LanguageCard
                icon={<SiTypescript className="text-blue-400" />}
                name="TypeScript"
                description="Currently Learning"
                experience="1 year of experience"
                projects="2+ projects"
              />
              <LanguageCard
                icon={<FaReact className="text-cyan-400" />}
                name="React"
                description="Best JS Framework"
                experience="1.5 year of experience"
                projects="10+ projects"
              />
              <LanguageCard
                icon={<SiNodedotjs className="text-green-500" />}
                name="Node.js"
                description="Best server based framework"
                experience="1 year of experience"
                projects="2 projects"
              />
              <LanguageCard
                icon={<FaPython className="text-blue-500" />}
                name="Python"
                description="Currently Learning"
                experience="0 years of experience"
                projects="N/A projects"
              />
              <LanguageCard
                icon={<FaDatabase className="text-gray-400" />}
                name="SQL"
                description="Currently Learning"
                experience="0 years of experience"
                projects="N/A projects"
              />
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center"><Briefcase className="mr-2" /> Projects</h2>
            <ProjectCard
              title="Hydra Password Generator"
              description="Random Password Generator with numbers,symbols "
              image="/projects/hydra.png"
              languages={['React', 'Next.js', 'TailwindCSS','Node.js']}
              repoLink="https://github.com/akumadev1/hydra"
            />
            <ProjectCard
              title="DistroNavigator"
              description="List of Linux Distro's"
              image="/projects/linux.png"
              languages={['HTML','Javascript','TailwindCSS']}
              repoLink="https://akumadev1.github.io/DistroNavigator/"
            />
            <ProjectCard
              title="Simple-Converter"
              description="Simple Money Converter Using API"
              image="/projects/currency.png"
              languages={['HTML','Javascript','TailwindCSS']}
              repoLink="https://akumadev1.github.io/Simple-Converter/"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4 md:gap-8 mt-8 mb-4">
        <Image
          src="/logo1.svg"
          alt="Logo 1"
          width={140}
          height={140}
          className="h-[70px] md:h-[140px]  opacity-25 hover:opacity-100 transition-opacity duration-300"
        />
        <Image
          src="/logo2.svg"
          alt="Logo 2"
          width={140}
          height={140}
          className="h-[70px] md:h-[140px]  opacity-25 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  )
}

function SocialCard({
  username,
  link,
  description,
  icon,
}: {
  platform: string
  username: string
  link: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="group flex items-center gap-4 rounded-lg bg-zinc-800/50 p-4 backdrop-blur-sm transition-all hover:bg-zinc-800">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-900/50 transition-all group-hover:bg-zinc-900">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold">{username}</h3>
        <p className="text-sm text-gray-400">{link}</p>
        <p className="mt-1 text-sm text-gray-300 hidden md:block">{description}</p>
      </div>
      <Link href={`https://${link}`} className="ml-2">
        <Share2 className="h-5 w-5 text-white/60" />
      </Link>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  languages,
  repoLink,
}: {
  title: string
  description: string
  image: string
  languages: string[]
  repoLink: string
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-zinc-800/50 backdrop-blur-sm transition-all hover:bg-zinc-800">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1400}
          height={360}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span key={lang} className="rounded-full bg-zinc-900/50 px-3 py-1 text-xs text-gray-300">
              {lang}
            </span>
          ))}
        </div>
        <Link 
          href={repoLink} 
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
        >
          <Github className="mr-1 h-4 w-4" />
          View Repository
        </Link>
      </div>
    </div>
  )
}

function LanguageCard({
  icon,
  name,
  description,
  experience,
  projects,
}: {
  icon: React.ReactNode
  name: string
  description: string
  experience: string
  projects: string
}) {
  return (
    <div className="flex items-start space-x-4 bg-zinc-900/50 p-4 rounded-lg transition-all hover:bg-zinc-900">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-3xl">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-2 hidden md:block">{description}</p>
        <div className="text-xs text-gray-400">
          <p>{experience}</p>
          <p>{projects}</p>
        </div>
      </div>
    </div>
  )
}

