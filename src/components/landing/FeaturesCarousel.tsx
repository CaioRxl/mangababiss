import { useState } from "react";
import { ChevronLeft, ChevronRight, Layers, BarChart3, Shield, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Layers,
    title: "Centralização de Processos",
    description: "Tudo o que o RH precisa em um só lugar.",
    details:
      "Unifique todos os processos de recursos humanos, comunicação interna e gestão de pessoas em uma plataforma integrada e fácil de usar.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Estratégicos",
    description: "Visão em tempo real de clima organizacional, ações e compliance.",
    details:
      "Acompanhe indicadores de engajamento, satisfação e desempenho com dashboards interativos e relatórios personalizados.",
  },
  {
    icon: Shield,
    title: "Conformidade Legal",
    description: "Gestão prática e mensurável de LGPD e NR-01.",
    details:
      "Mantenha sua empresa em conformidade com as regulamentações trabalhistas e de proteção de dados de forma automatizada.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Interno",
    description: "Loja oficial para colaboradores, segura e totalmente auditável.",
    details:
      "Ofereça produtos, benefícios e reconhecimentos para seus colaboradores através de uma loja interna com gestão completa.",
  },
];

const FeaturesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentFeature = features[currentIndex];

  return (
    <section className="py-24 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Principais <span className="text-primary">Funcionalidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra tudo o que o Mangababiss pode fazer pela sua empresa
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="relative">
          {/* Main Card */}
          <div className="bg-background rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-6 bg-primary/10 rounded-3xl">
                <currentFeature.icon className="h-16 w-16 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {currentFeature.title}
                </h3>
                <p className="text-xl text-primary font-medium mb-4">
                  {currentFeature.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {currentFeature.details}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 rounded-full h-12 w-12 shadow-md hover:shadow-lg bg-card"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 rounded-full h-12 w-12 shadow-md hover:shadow-lg bg-card"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;