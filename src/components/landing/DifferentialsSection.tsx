import { Lightbulb, Zap, Puzzle } from "lucide-react";

const differentials = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Tecnologia de ponta para transformar a comunicação interna da sua empresa com soluções modernas e eficientes.",
  },
  {
    icon: Zap,
    title: "Facilidade de Uso",
    description:
      "Interface intuitiva que permite que qualquer membro da equipe utilize a plataforma sem necessidade de treinamento extensivo.",
  },
  {
    icon: Puzzle,
    title: "Integração Total",
    description:
      "Conecte todas as áreas da empresa em um único ambiente, promovendo colaboração e sinergia entre equipes.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que torna o Mangababiss a escolha ideal para sua empresa
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;