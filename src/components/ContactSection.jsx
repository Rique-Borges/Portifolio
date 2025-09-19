import { Linkedin, Mail, MapPin, Phone, Send, SendIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSeciton = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(()=>{
            toast({title: "Mensagem Enviada!",
                description: "Obrigado pela sua mensagem, em breve você receberá uma resposta"
            })
            setIsSubmitting(false);
        }, 1500)
        
    };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gostou do que viu? Estou pronto para novos desafios e oportunidades. Vamos construir algo incrível juntos. Sinta-se à vontade para me contatar pelo e-mail ou redes sociais abaixo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contato</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:henriqueribeiroborgesbusiness@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    henriqueribeiroborgesbusiness@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start">Celular</h4>
                  <a
                    href="tel:+5515991893369"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +55 (15)99189-3369
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start">Localização</h4>
                  <a
                    href="https://maps.app.goo.gl/DrFTmxYaRXvGevdh7"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sorocaba, SP
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start">Linkedin</h4>
                  <a
                    href="https://www.linkedin.com/in/henrique-borges-273373225/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Acesse Meu Linkedin!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-x"
          onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold mb-6">Mande uma mensagem!</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder="Henrique Borges"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                 E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder="henrocktreze@mail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Olá henrique, tudo bem
                  "
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              > {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
