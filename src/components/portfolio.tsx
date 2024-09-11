'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon, BookOpenIcon, ExternalLinkIcon, GithubIcon, LinkedinIcon, MailIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { TechLogo } from "@/components/ui/techLogo";
import ContactForm from "@/components/contact-form";

export function Portfolio() {
    const actualYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault()
            const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
            if (href?.startsWith('#')) {
                const targetId = href.replace('#', '')
                const elem = document.getElementById(targetId)
                elem?.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }

        const links = document.querySelectorAll('a[href^="#"]')
        links.forEach(link => {
            link.addEventListener('click', handleScroll)
        })

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleScroll)
            })
        }
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Tech Porfolio</h1>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="#about" className="hover:text-primary">About</Link>
                        <Link href="#experience" className="hover:text-primary">Experience</Link>
                        <Link href="#projects" className="hover:text-primary">Projects</Link>
                        <Link href="#skills" className="hover:text-primary">Skills</Link>
                    </nav>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section id="about" className="mb-16 pt-16 scroll-mt-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <Image
                            src="/sam_pac.jpg?height=300&width=300"
                            alt="Samuel Soler"
                            width={300}
                            height={300}
                            className="rounded-full"
                        />
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Hi, I'm Samuel Soler</h2>
                            <p className="text-xl mb-4">
                                I'm a passionate full-stack developer with experience in building web applications.
                                I love creating efficient, scalable, and user-friendly solutions to complex problems.
                            </p>
                            <div className="flex space-x-4">
                                <ContactForm />
                                <Link href="https://github.com/samuelSoler99" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline">
                                        <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                                    </Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/samuel-soler-pic%C3%B3/" target="_blank"
                                    rel="noopener noreferrer">
                                    <Button variant="outline">
                                        <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="mb-16 pt-16 scroll-mt-16">
                    <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
                    <div className="space-y-8">
                        {[
                            {
                                company: "Prensa Iberica",
                                role: "Senior Full Stack Developer",
                                period: "2022 - Present",
                                description: "Led development of multiple high-traffic web applications of renowned newspapers such as Sport.es and ElPeriodico.com, improving performance and applying hexagonal arquitecture.",
                                technologies: ["Symfony", "Vue", "MongoDB", "Redis", "Git", "Nuxt", "Vagrant", "PostgreSQL"]
                            },
                            {
                                company: "Ociotour Digital",
                                role: "Full Stack Developer",
                                period: "2021 - 2022",
                                description: "Worked on their website pa-community.com, an online ticket sales portal for amusement and leisure parks. Using Laravel as main framework with TDD methodology.",
                                technologies: ["Laravel", "Vagrant", "Sql", "Docker", "Redis", "Git", "Vue"]
                            },
                            {
                                company: "Difusión Comunicacíon",
                                role: "Junior Developer",
                                period: "2016 - 2018",
                                description: "Company where I completed my internship, starting my journey in the world of programming.",
                                technologies: ["React", "TypeScript", "Laravel"]
                            }
                        ].map((job, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold">{job.company}</h3>
                                    <p className="text-primary">{job.role}</p>
                                    <p className="text-sm text-muted-foreground">{job.period}</p>
                                    <p className="mt-2 mb-4">{job.description}</p>
                                    <div className="flex flex-wrap gap-2 ">
                                        {job.technologies.map((tech, i) => (
                                            <TechLogo key={i} name={tech} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mb-16 pt-16 scroll-mt-16">
                    <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "E-commerce Platform",
                                description: "A full-stack e-commerce solution with Next.js, PostgreSql, Cloudinary and Docker.",
                                image: "/projects/tesloshop.png?height=200&width=300",
                                github: "https://github.com/samuelSoler99/ecommerce-platform",
                                live: "https://next-14-tesla-shop.vercel.app/",
                                technologies: ["Next", "PostgreSQL", "Stripe", "PrismaORM", "Tailwind", "Docker"]
                            },
                            {
                                name: "Aliexpress Clone",
                                description: "A Nuxt app that clone Aliexpress using stripe payments.",
                                image: "/projects/alicone.png?height=200&width=300",
                                github: "https://github.com/samuelSoler99/aliexpress-clone",
                                live: null,
                                technologies: ["Nuxt", "PostgreSQL", "Stripe", "Tailwind", "Supabase", "PrismaORM"]
                            },

                        ].map((project, index) => (
                            <Card key={index}>
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={2000}
                                    height={2000}
                                    className="w-full h-48 object-cover"
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="flex flex-wrap gap-2  mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <TechLogo key={i} name={tech} />
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                                <GithubIcon className="mr-2 h-4 w-4" /> View Repository
                                            </Button>
                                        </Link>
                                        {project.live != null ? (
                                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" size="sm"
                                                    className="text-green-500 hover:text-green-600">
                                                    <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button variant="outline" size="sm"
                                                className="text-gray-400 hover:text-gray-500" disabled>
                                                <ExternalLinkIcon className="mr-2 h-4 w-4" /> Not Live
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="skills" className="pt-16 scroll-mt-16">
                    <h2 className="text-3xl font-bold mb-8">Technologies & Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "PHP", "Symfony", "Laravel", "JavaScript", "TypeScript", "React", "Next.js",
                            "Node.js", "Express", "MongoDB", "PostgreSQL",
                            "Hexagonal Architecture", "REST APIs", "TDD",
                            "Tailwind CSS", "Git", "Docker", "AWS"
                        ].map((skill, index) => (
                            <Card key={index} className="p-4 text-center">
                                <p className="font-semibold">{skill}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section id="courses" className="pt-16 scroll-mt-16">
                    <h2 className="text-3xl font-bold mb-8">Completed Udemy Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Next.js - The react production framework",
                                instructor: "Fernando Herrera",
                                completionDate: "Marc 2024",
                                certificate: "UC-40d2c884-e0bc-4eed-a365-f4c4e00eedfa",
                                certificateLink: "https://www.udemy.com/certificate/UC-40d2c884-e0bc-4eed-a365-f4c4e00eedfa/"
                            },
                        ].map((course, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                    <p className="text-primary mb-1">Instructor: {course.instructor}</p>
                                    <p className="text-sm text-muted-foreground mb-2">Completed: {course.completionDate}</p>
                                    <p className="text-sm mb-4">Certificate: {course.certificate}</p>
                                    <Link href={course.certificateLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm">
                                            <AwardIcon className="mr-2 h-4 w-4" /> View Certificate
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-muted mt-16 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {actualYear} Samuel Soler. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}