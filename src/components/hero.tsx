import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-5xl space-y-8 mt-20">
        <div className="relative inline-block">
          <Avatar className="size-24 rounded-full">
            <img
              alt={DATA.name}
              src={DATA.avatarUrl}
              width={96}
              height={96}
              className="aspect-square h-full w-full object-cover"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="flex">
              <span
                className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translateY(-8px) translateZ(0px)",
                }}
              >
                Hi, I'm Sahil 👋
              </span>
            </div>
            <div className="flex">
              <span
                className="inline-block max-w-[600px] md:text-xl"
                style={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transform: "translateY(-8px) translateZ(0px)",
                }}
              >
                Cloud & DevOps Engineer
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-lg text-neutral-500 whitespace-pre-wrap">
  <span>I work with modern Cloud and DevOps tools like</span>

  {/* AWS */}
  <a
    target="_blank"
    href="https://aws.amazon.com/"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-4 w-4" />
    <span className="font-bold">AWS</span>
  </a>

  <span>, </span>

  {/* Linux */}
  <a
    target="_blank"
    href="https://www.linux.org/"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="Linux" className="h-4 w-4" />
    <span className="font-bold">Linux</span>
  </a>

  <span>, </span>

  {/* Docker */}
  <a
    target="_blank"
    href="https://www.docker.com/"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-4 w-4" />
    <span className="font-bold">Docker</span>
  </a>

  <span>, </span>

  {/* Git */}
  <a
    target="_blank"
    href="https://git-scm.com/"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-4 w-4" />
    <span className="font-bold">Git</span>
  </a>

  <span>, </span>

  {/* CI/CD */}
  <a
    target="_blank"
    href="https://docs.github.com/en/actions"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="CI/CD" className="h-4 w-4 dark:invert" />
    <span className="font-bold">CI/CD Pipelines</span>
  </a>

  <span>and </span>

  {/* Nginx */}
  <a
    target="_blank"
    href="https://www.nginx.com/"
    className="inline-flex items-center gap-1.5 text-sm bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
  >
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="Nginx" className="h-4 w-4" />
    <span className="font-bold">Nginx</span>
  </a>

  <span>
    {""}I focus on building secure, scalable, production-ready infrastructure.
  </span>
</div>

        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <a href="/Sahil V. Muliya - Resume.pdf" target="_blank" rel="noopener noreferrer">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume / CV
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`mailto:${DATA.contact.email}`}>
              <Icons.email className="mr-2 h-4 w-4" />
              Get in touch
            </a>
          </Button>
        </div>
        <div className="mt-8 flex gap-2">
          {Object.values(DATA.contact.social).map((social) => {
            if (!social.navbar) return null;
            return (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 flex items-center gap-2"
              >
                <span className="size-6">
                  <social.icon />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
