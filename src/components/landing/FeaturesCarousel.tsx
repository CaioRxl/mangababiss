import { useState } from "react";
import { ChevronLeft, ChevronRight, Layers, BarChart3, Shield, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgCentralizacao from "@/assets/features/centralizacao-processos.png";
import imgDashboards from "@/assets/features/dashboards-estrategicos.png";
import imgConformidade from "@/assets/features/conformidade-legal.png";
import imgEcommerce from "@/assets/features/ecommerce.png";

const features = [
  {
    icon: Layers,
    title: "Centralização de Processos",
    description: "Tudo o que o RH precisa em um só lugar.",
    details:
      "Unifique todos os processos de recursos humanos, comunicação interna e gestão de pessoas em uma plataforma integrada.",
    image: imgCentralizacao,
  },
  {
    icon: BarChart3,
    title: "Dashboards Estratégicos",
    description: "Visão em tempo real de clima organizacional e compliance.",
    details:
      "Acompanhe indicadores de engajamento, satisfação e desempenho com dashboards interativos e relatórios personalizados.",
    image: imgDashboards,
  },
  {
    icon: Shield,
    title: "Conformidade Legal",
    description: "Gestão prática e mensurável de LGPD e NR-01.",
    details:
      "Mantenha sua empresa em conformidade com as regulamentações trabalhistas e de proteção de dados de forma automatizada.",
    image: imgConformidade,
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Interno",
    description: "Loja oficial para colaboradores, segura e auditável.",
    details:
      "Ofereça produtos, benefícios e reconhecimentos para seus colaboradores através de uma loja interna com gestão completa.",
    image: imgEcommerce,
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
    <section className="py-20 px-4 bg-card flex flex-col justify-center">
      <div className="container max-w-6xl mx-auto">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Principais <span className="text-primary">Funcionalidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra tudo o que o Mangababiss pode fazer pela sua empresa
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="relative">
          {/* Main Card */}
          <div className="bg-background rounded-3xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              
              {}
              <div className="w-full max-w-3xl mx-auto bg-muted rounded-xl border border-border overflow-hidden relative shadow-sm">
                 <img 
                   src={currentFeature.image} 
                   alt={currentFeature.title}
                   className="w-full h-auto"
                 />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentFeature.title}
                </h3>
                <p className="text-lg text-primary font-medium mb-3">
                  {currentFeature.description}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 rounded-full h-10 w-10 shadow-md bg-card"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 rounded-full h-10 w-10 shadow-md bg-card"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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