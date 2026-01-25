import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import logoFull from "@/assets/mangababiss-logo.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("objetivo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start animate-fade-in">
            <img
              src={logoFull}
              alt="Mangababiss - Seu espaço corporativo"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Alteração aqui: Tamanhos de fonte reduzidos (3xl, 4xl, 5xl) */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-delay-1">
              Transformando engajamento em resultados tangíveis e cultura em valor{" "}
              <span className="text-primary">real</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-delay-2">
              A plataforma completa de endomarketing que conecta, engaja e
              fortalece a cultura organizacional do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Saiba Mais
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;