'use client';
import { Share2, Globe, Code, Briefcase, Github, Menu } from 'lucide-react'
import { FaJs, FaReact, FaSteam, FaDiscord,FaFigma,FaSoundcloud } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs } from 'react-icons/si'
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
        <div className="relative mb-8 flex flex-col items-center">
          <div className="absolute right-0 top-0">
          <button aria-label='share'
  onClick={() => {
    if (navigator.share) {
      navigator.share({
        title: '@akumadev - Bio Page',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        alert('Profile link copied to clipboard!');
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    }
  }}
  className="p-2 rounded-full  transition-colors"
>
  <Share2 className="h-6 w-6 text-white/60" />
</button>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-500 via-gray-800 to-red-900 opacity-85 blur-lg animate-gradient"></div>
            <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-zinc-800">
              <Image
                src="/avi.webp"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold">
            <span className="text-red-800">@</span>akumadev
          </h1>
          <p className="text-sm text-gray-400">
            Contact: xaanarii@gmail.com
          </p>
        </div>
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
        {activeSection === 'social' && (
          <div className="space-y-4">
            <SocialCard
              platform="Discord"
              username="allvaez"
              link="https://discordapp.com/users/allvaez"
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
              platform="Figma"
              username="akumadev"
              link="https://www.figma.com/@akumadev"
              description="Web designs"
              icon={<FaFigma className="h-6 w-6" />}
            />
            <SocialCard
              platform="Soundcloud"
              username="akumadev1"
              link="soundcloud.com/vyxx1337"
              description="..."
              icon={<FaSoundcloud className="h-6 w-6" />}
            />
          </div>
        )}
        {activeSection === 'about' && (
          <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold flex items-center"><Globe className="mr-2" /> About</h2>
            <p className="text-gray-300">
              ...
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
                projects="7+ projects"
              />
              <LanguageCard
                icon={<SiTypescript className="text-blue-400" />}
                name="TypeScript"
                description="Currently Learning"
                projects="7+ projects"
              />
              <LanguageCard
                icon={<FaReact className="text-cyan-400" />}
                name="React"
                description="Best JS Framework"
                projects="7+ projects"
              />
              <LanguageCard
                icon={<SiNextdotjs className="text-black" />}
                name="Next.js"
                description="Best react framework"
                projects="2 projects"
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
              title="Fire industry company website"
              description="Designed but never used(All trademarks are used in representative purpose) "
              image="/projects/ppoz.png"
              languages={['React', 'Next.js', 'TailwindCSS','Node.js']}
              repoLink="https://github.com/akumadev1/ppoz"
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
      <div className="flex justify-center gap-8 mt-8" style={{ marginBottom: '-4px' }}>
        <p className='text-xs'>© Akumadev 2024. Icons powered by <a className='text-red-800' target='_blank' href='https://lucide.dev/guide/packages/lucide-react'>Lucide-React</a> and <a target='_blank' className='text-red-800' href='https://react-icons.github.io/react-icons/'>React-Icons</a></p>
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
    <Link href={`https://${link}`} className="ml-2">
    <div className="group flex items-center gap-4 rounded-lg bg-zinc-800/50 p-4 backdrop-blur-sm transition-all hover:bg-zinc-800">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-900/50 transition-all group-hover:bg-zinc-900">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold">{username}</h3>
        <p className="text-sm text-gray-400">{link}</p>
        <p className="mt-1 text-sm text-gray-300 hidden md:block">{description}</p>
      </div>
    </div>
    </Link>
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
  projects,
}: {
  icon: React.ReactNode
  name: string
  description: string
  projects: string
}) {
  return (
    <div className="flex items-start space-x-4 bg-zinc-900/50 p-4 rounded-lg transition-all hover:bg-zinc-900">
      <div className="flex-shrink-0 w-16 h-16 rounded-full  flex items-center justify-center text-3xl">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-2 hidden md:block">{description}</p>
        <div className="text-xs text-gray-400">
          <p>{projects}</p>
        </div>
      </div>
    </div>
  )
}

