import heroImg from './assets/hero.png'
import CardNav from './components/CardNav'
import ScrollStack, { ScrollStackItem } from './components/ScrollProject'
import SpotlightCard from './components/SpotlightCard'
import PixelCard from './components/PixelCard'
import FlowingMenu from './components/FlowingMenu'
import { useState } from 'react'

function App() {
    const logo = heroImg
    const linkedinUrl = 'https://www.linkedin.com/in/devaditya-borah'
    const githubUrl = 'https://github.com/Devaditya-Suuu'

    const navItems = [
        {
            label: 'About',
            bgColor: '#14121B',
            textColor: '#fff',
            links: [
                { label: 'About me', ariaLabel: 'About me section', href: '#about' },
                { label: 'Education', ariaLabel: 'Education section', href: '#education' }
            ]
        },
        {
            label: 'Skills',
            bgColor: '#1B1726',
            textColor: '#fff',
            links: [
                { label: 'Technical', ariaLabel: 'Technical skills section', href: '#skills' },
                { label: 'Core CS', ariaLabel: 'Core computer science section', href: '#skills' }
            ]
        },
        {
            label: 'Projects',
            bgColor: '#241A2E',
            textColor: '#fff',
            links: [
                { label: 'Experience', ariaLabel: 'Experience section', href: '#experience' },
                { label: 'Work', ariaLabel: 'Projects section', href: '#projects' }
            ]
        }
    ]

    const skillGroups = [
        {
            title: 'Languages',
            accent: 'Programming',
            items: ['C', 'Java', 'Python']
        },
        {
            title: 'Web Development',
            accent: 'Frontend',
            items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React']
        },
        {
            title: 'Tech Stack',
            accent: 'Full stack',
            items: ['MongoDB', 'Express', 'React', 'Node.js', 'MERN Stack']
        },
        {
            title: 'Core CS',
            accent: 'Foundations',
            items: ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks']
        }
    ]

    const stats = [
        ['8.85/10', 'CGPA'],
        ['2024-2028', 'B.E. timeline'],
        ['Open source', 'GirlScript contributor'],
        ['3 projects', 'Resume highlights']
    ]

    const projects = [
        {
            title: 'SADDA PRTC',
            accent: 'Smart Transit Prototype',
            meta: 'Node.js | Express | MongoDB | React Native | Expo',
            bgColor: 'rgba(36, 87, 255, 1)',
            textColor: '#FFFFFF',
            description:
                'A real-time bus tracking and transit management prototype inspired by Namma BMTC with geospatial route handling and live vehicle updates.',
            bullets: [
                'Built RESTful APIs for live vehicle tracking, route management, and fare calculation.',
                'Developed a multilingual React Native client with adaptive polling for real-time updates.',
                'Integrated rate limiting, environment configuration, and Socket.IO scaffolding.'
            ],
            url: 'https://github.com/Devaditya-Suuu/sadda_prtc'
        },
        {
            title: 'ResearchGate Club Website',
            accent: 'Club platform',
            meta: 'Next.js | MongoDB | Tailwind CSS | Clerk | Framer Motion',
            bgColor: 'rgba(245, 158, 11, 1)',
            textColor: '#ffff',
            description:
                'A modern college research club site with secure authentication, role-based access, and expressive motion-led UI.',
            bullets: [
                'Implemented Clerk-based authentication for members and administrators.',
                'Designed data models for users, events, publications, and merchandise.',
                'Enhanced the experience with Framer Motion, GSAP, and a responsive dark UI.'
            ],
            url: 'https://www.sitresearchgate.in/'
        },
        {
            title: 'DocReader',
            accent: 'AI OCR application',
            meta: 'React | FastAPI | Tesseract OCR | NLTK | Docker',
            bgColor: '#E11D48',
            textColor: '#FFFFFF',
            description:
                'A document OCR web app that extracts, tokenizes, and summarizes uploaded images with a clean drag-and-drop workflow.',
            bullets: [
                'Integrated Tesseract OCR and NLTK for text extraction and keyword-based summarization.',
                'Added real-time upload feedback and word-level confidence analysis.',
                'Containerized the full stack with Docker for single deployment flow.'
            ],
            url: 'https://ocr-project-vuqj.onrender.com/'
        }
    ]

    const achievements = [
        'Top 10 Finalist, Smart India Hackathon 2025',
        'AWS SimuLearn: Cloud Computing Essentials',
        'Google AI Essentials',
        'Open-source web development contributor'
    ]
    const [text, setText] = useState("Hover Here")

    const handleHover = () => {
        setText("Kidding Nothing Here")
    }

    // const demoItems = [
    //     { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1'},
    //     { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    //     { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    //     { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    // ];
    return (
        <main className="relative z-10 min-h-screen overflow-hidden text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(154,106,255,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.14),transparent_30%)]" />

            <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-20 pt-28 md:px-8 lg:px-10">
                <CardNav
                    logo={'/logo.png'}
                    logoAlt="Devaditya Borah"
                    items={navItems}
                    baseColor="rgba(12, 12, 18, 0.78)"
                    menuColor="#fff"
                    buttonBgColor="#ffffff"
                    buttonTextColor="#111111"
                    ease="power3.out"
                    theme="light"
                />

                {/* items-start (was items-center) so the right column no longer floats
            mid-way against a much taller left column */}
                <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur">
                            Devaditya Borah | Full-stack developer
                        </div>
                        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.07em] text-balance sm:text-6xl lg:text-7xl">
                            Building real-world products with clean UI, strong fundamentals, and practical systems.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                            B.E. Information Science student at Siddaganga Institute of Engineering, open-source contributor at GirlScript Summer of Code, and full-stack developer focused on transit tech, club platforms, and AI document workflows.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#projects" className="inline-flex h-12 items-center rounded-full bg-white px-5 font-medium text-black transition-transform hover:-translate-y-0.5 xxf">
                                View Projects
                            </a>
                            <a href="#skills" className="inline-flex h-12 items-center rounded-full border border-white/15 bg-white/5 px-5 font-medium text-white transition-colors hover:bg-white/10">
                                Explore Skills
                            </a>
                        </div>

                        {/* removed stray p-5 that was padding this row on all sides and
                breaking the left-edge alignment with everything above it */}
                        <div className="mt-6 flex flex-wrap gap-3 text-sm">
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/78 transition-all hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                LinkedIn
                                <span aria-hidden="true">↗</span>
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/78 transition-all hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                GitHub
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>

                        {/* dropped lg:ml-auto lg:max-w-2xl — it shifted the grid off the
                left edge that every other block in this column shares */}
                        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
                            {stats.map(([value, label]) => (
                                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                    <p className="text-2xl font-semibold tracking-tighter">{value}</p>
                                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* h-full + flex column so the two cards stretch to match the
              left column's height instead of sitting short and centered */}
                    <div className="grid h-full auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <SpotlightCard className="custom-spotlight-card flex flex-col gap-2" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <article id="about" className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/45">About me</p>
                                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">I like shipping products that solve real problems.</h2>
                                <p className="mt-3 text-sm leading-6 text-white/65">
                                    My work combines responsive UI, real-time systems, and clean backend design. I enjoy building around practical use cases like transit, academic communities, and document automation.
                                </p>
                            </article>
                            <article id="education" className="flex flex-col rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Education</p>
                                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Siddaganga Institute of Engineering</h2>
                                <p className="mt-3 text-sm leading-6 text-white/65">
                                    Bachelor of Engineering in Information Science and Engineering, 2024–2028.
                                </p>
                                <div className="mt-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
                                    CGPA: 8.85 / 10
                                </div>
                            </article>
                        </SpotlightCard>
                        {/* <SpotlightCard className="custom-spotlight-card h-[28vh]" spotlightColor="rgba(0, 229, 255, 0.2)">
                            
                        </SpotlightCard> */}
                        {/* <PixelCard variant="pink" onMouseOver={handleHover} className='sm:hidden md:block'><p className='absolute text-2xl'>{text}</p></PixelCard> */}
                    </div>
                </div>
            </section>

            <section id="skills" className="relative mt-[-10em] mx-auto w-full max-w-7xl px-5 py-32 md:px-8 lg:px-10 lg:py-36">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/40">Skills</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-4xl">Technical skills</h2>
                    </div>
                    {/* <p className="max-w-sm text-sm leading-6 text-white/55 md:text-right">
                        Focused on the stack from your resume: languages, frontend, MERN, and core CS fundamentals.
                    </p> */}
                </div>

                {/* items-stretch (implicit via grid) so every card is the same
            height regardless of how many tags it holds */}
                <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {skillGroups.map(group => (
                        <article key={group.title} className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                            <p className="text-xs uppercase tracking-[0.24em] text-white/40">{group.accent}</p>
                            <h3 className="mt-3 text-2xl font-semibold tracking-tighter">{group.title}</h3>
                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {group.items.map(item => (
                                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/80 shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#120F17"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#120F17"
                    borderColor="#ffffff"
                />
            </div> */}

            <section id="experience" className="relative mt-[-10em] mx-auto w-full max-w-7xl px-5 py-32 md:px-8 lg:px-10 lg:py-36">
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">Experience</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-4xl">Professional experience</h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                    <article className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/40">Open source</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">GirlScript Summer of Code</h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/55">Open Source Contributor | April 2025 – Present</p>
                        <ul className="mt-6 space-y-4 text-sm leading-7 text-white/72">
                            <li className="rounded-2xl border border-white/10 bg-black/20 p-4">Contributed feature implementations and bug fixes to open-source repositories using Git/GitHub workflows.</li>
                            <li className="rounded-2xl border border-white/10 bg-black/20 p-4">Improved documentation and participated in distributed code review cycles.</li>
                        </ul>
                    </article>

                    {/* auto-rows-fr so all four tiles line up in two even rows
              instead of following each other's uneven text length */}
                    <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
                        {[
                            ['Real-time systems', 'Bus tracking, polling, Socket.IO scaffolding, and scalable live updates.'],
                            ['UI + backend', 'Secure auth, role-based access, MongoDB modeling, and motion-driven interfaces.'],
                            ['Automation', 'OCR pipelines, summarization, Dockerized deployment, and confidence analysis.'],
                            ['Collaboration', 'Open-source workflows, documentation, and distributed review habits.']
                        ].map(([title, desc]) => (
                            <article key={title} className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                                <h3 className="text-lg font-semibold tracking-tighter">{title}</h3>
                                <p className="mt-3 text-sm leading-7 text-white/65">{desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="relative mt-[-10em] mx-auto w-full max-w-7xl px-5 pt-24 pb-16 md:px-8 lg:px-10 lg:pt-28 lg:pb-18">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/40">Projects</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-4xl">Featured projects</h2>
                    </div>
                    {/* <p className="max-w-sm text-sm leading-6 text-white/55 md:text-right">
                        A scroll stack works well here because each project can read like a case-study card.
                    </p> */}
                </div>

                <ScrollStack
                    useWindowScroll
                    className="pb-0"
                    itemDistance={0}
                    itemStackDistance={0}
                    stackPosition="25%"
                    scaleEndPosition="18%"
                    baseScale={0.9}
                >
                    {projects.map(project => (
                        <ScrollStackItem key={project.title} itemClassName="overflow-hidden border border-white/10 !h-[44rem] md:!h-[36rem]">
                            <div className="flex h-full flex-col justify-between rounded-4xl p-0" style={{ backgroundColor: project.bgColor, color: project.textColor, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
                                <div className="flex items-start justify-between gap-4 p-7 md:p-10">
                                    <div className="max-w-2xl">
                                        <p className="text-xs uppercase tracking-[0.28em] opacity-70">{project.accent}</p>
                                        <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">{project.title}</h3>
                                        <p className="mt-4 max-w-xl text-base leading-7 opacity-90 sm:text-lg">{project.description}</p>
                                    </div>
                                    <div className="hidden shrink-0 rounded-full border border-current/20 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] md:block">
                                        Project
                                    </div>
                                </div>

                                <div className="grid gap-6 border-t border-white/15 px-7 py-7 md:grid-cols-[1fr_0.7fr] md:px-10 md:py-8">
                                    <ul className="space-y-3 text-sm leading-6 opacity-95">
                                        {project.bullets.map(bullet => (
                                            <li key={bullet} className="flex gap-2">
                                                <span aria-hidden="true">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col justify-between gap-4 md:items-end md:text-right">
                                        <span className="uppercase tracking-[0.24em] opacity-70">{project.meta}</span>
                                        <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] md:self-end" onClick={()=>{
                                            window.open( project.url, "_blank")
                                        }} style={{cursor: "pointer"}}>
                                            Case study
                                            <span aria-hidden="true">↗</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </section>

            <section className="relative mt-[-20em] mx-auto w-full max-w-7xl px-5 pt-20 pb-28 md:px-8 lg:px-10 lg:pt-24 lg:pb-32">
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">Recognition</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-4xl">Achievements</h2>
                </div>

                <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_0.95fr]">
                    {/* de-duplicated the repeated "Recognition" eyebrow/heading that
              was on both the section wrapper above and this card */}
                    <article className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/40">Certifications</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Awards & certifications</h3>
                        <div className="mt-6 grid flex-1 auto-rows-fr gap-3 sm:grid-cols-2">
                            {achievements.map(item => (
                                <div key={item} className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/78">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </article>

                    <article id="contact" className="flex flex-col rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/40">Contact</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-4xl">Let's build something useful.</h2>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                            +91 7723999257 · devadityaborah@outlook.com · Siddaganga Institute of Engineering · Open-source contributor
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3 text-sm">
                            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition-colors hover:bg-white/10">
                                LinkedIn
                                <span aria-hidden="true">↗</span>
                            </a>
                            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition-colors hover:bg-white/10">
                                GitHub
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <a href="mailto:devadityaborah@outlook.com" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 font-medium text-black transition-transform hover:-translate-y-0.5 xxf">
                                Email Me
                            </a>
                            <a href="tel:+917723999257" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 font-medium text-white transition-colors hover:bg-white/10">
                                Call Me
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default App