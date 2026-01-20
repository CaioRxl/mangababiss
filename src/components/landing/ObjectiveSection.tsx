import { Target, Users, TrendingUp } from "lucide-react";

const ObjectiveSection = () => {
  return (
    <section id="objetivo" className="py-24 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Objetivo do <span className="text-primary">Mangababiss</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong className="text-foreground">Mangababiss</strong> é um portal corporativo 
              inovador que centraliza todas as ações de endomarketing da sua empresa. Nossa 
              plataforma foi desenvolvida para simplificar a gestão de RH, promovendo uma 
              comunicação interna eficiente e fortalecendo a cultura organizacional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma interface intuitiva e recursos poderosos, o Mangababiss transforma a 
              maneira como sua empresa se conecta com os colaboradores, criando um ambiente 
              de trabalho mais engajado e produtivo.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Foco Estratégico</h3>
                <p className="text-muted-foreground text-sm">
                  Alinhe as ações de endomarketing com os objetivos do negócio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Engajamento Real</h3>
                <p className="text-muted-foreground text-sm">
                  Conecte colaboradores e fortaleça o senso de pertencimento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-xl">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Resultados Mensuráveis</h3>
                <p className="text-muted-foreground text-sm">
                  Acompanhe métricas e tome decisões baseadas em dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;