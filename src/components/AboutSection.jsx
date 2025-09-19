import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 relative">
      {""}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Web e Criador de{" "}
              <span className="text-primary">Soluções Inovadoras</span>
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedor Fullstack movido por desafios e apaixonado por
              transformar ideias em experiências digitais impactantes. Domino
              tecnologias modernas como Next.js, React Native, Node.js e AWS
              para criar soluções escaláveis, seguras e de alta performance.
            </p>
            <p className="text-muted-foreground">
              Minha trajetória combina criatividade, visão estratégica e
              disciplina técnica — sempre buscando unir design, funcionalidade e
              resultados. Cada projeto é uma oportunidade de inovar, aprender e
              entregar algo que realmente faça a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em Contato
              </a>
              <a
                href="/Curriculum/curriculo.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Meu Currículo
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    {" "}
                    Desenvolvimento de Software
                  </h4>
                  <p className="text-muted-foreground">
                    Crio aplicações web e mobile modernas, utilizando as
                    melhores práticas e tecnologias como React, Next.js, Node.js
                    e APIs RESTful, garantindo código limpo, escalabilidade e
                    alta performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    {" "}
                    Trabalho em Equipe & Comunicação
                  </h4>
                  <p className="text-muted-foreground">
                    Valorizo a colaboração e a comunicação clara, trabalhando
                    próximo a colegas, clientes e stakeholders para transformar
                    necessidades em soluções eficazes e alinhadas aos objetivos
                    do projeto.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    {" "}
                    Gestão Ágil de Projetos
                  </h4>
                  <p className="text-muted-foreground">
                    Aplicando metodologias ágeis como Scrum e Kanban, organizo
                    tarefas e prazos com ferramentas como Trello e GitHub,
                    assegurando entregas eficientes e alinhamento contínuo com o
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
