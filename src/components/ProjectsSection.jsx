import { ArrowRight, Github, Globe } from "lucide-react";

// TODO: Substitua os links '#' e os caminhos das imagens.
const projects = [
  {
    id: 1,
    title: "The Aesthetics Clinic",
    description:
      "Site institucional para uma clínica na Irlanda, focado em performance, SEO e design responsivo, utilizando as tecnologias mais modernas do front-end.",
    image: "/projects/project1.png", 
    tags: ["Next.js", "React", "Tailwind CSS", "SEO"],
    demoUrl: "https://aestheticsclinic.eu/", 
    githubUrl: "https://github.com/Rique-Borges/aestheticsclinic",
  },
  {
    id: 2,
    title: "What's The Tape",
    description:
      "Rede social musical full-stack com back-end em Node.js, API RESTful segura e uma infraestrutura escalável na nuvem AWS.",
    image: "/projects/project2.jpg",
    tags: ["React Native", "Node.js", "AWS", "Full-Stack", "REST API"],
    demoUrl: "https://github.com/Rique-Borges/WhatsTheTape", // Se não houver deploy, pode remover o ícone ou apontar para o GitHub
    githubUrl: "https://github.com/Rique-Borges/WhatsTheTape",
  },
  {
    id: 3,
    title: "Colégio Maranata",
    description:
      "Desenvolvi a landing page institucional do Colégio Maranata, criando uma vitrine digital moderna e responsiva com HTML, CSS e Bootstrap.",
    image: "/projects/project3.png", // TODO: Crie e adicione um screenshot do projeto aqui
    tags: ["JavaScript", "Bootstrap", "Scrum", "Gestão de Projetos"],
    demoUrl: "https://www.colegiomaranata.com.br/",
    githubUrl: "https://github.com/franceschinii/Colegio_Maranata",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projetos em <span className="text-primary">Destaque</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos projetos que desenvolvi, aplicando conceitos de
          front-end, back-end e cloud para resolver problemas reais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg border-2 overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center"> {/* Adicionado margin-bottom */}
                  {project.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4"> {/* Aumentado o espaçamento */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`${project.title} - Ver projeto online`}
                    >
                      <Globe size={22} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`${project.title} - Ver código no GitHub`}
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Rique-Borges"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja mais no meu Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};