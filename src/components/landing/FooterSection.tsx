import { useState } from "react";
import logo from "@/assets/mangababiss-logo.png";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-24 px-4 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Lado Esquerdo - Logo e Descrição */}
          <div className="space-y-6">
            
            {/* Logo do Mangababiss: Sem quadro branco e sem filtros de cor */}
            <img
              src={logo} 
              alt="Logo Mangababiss"
              className="h-16 w-auto object-contain"
            />

            <p className="text-background/70 leading-relaxed">
              Transformando a cultura e o engajamento da sua empresa através
              de soluções inovadoras de endomarketing.
            </p>
          </div>

          {/* Lado Direito - Parceiros */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">
              Autoria
            </h4>
            
            <div className="flex flex-wrap gap-4">
              {/* Logo UFS */}
              <div className="h-16 px-4 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src="logo-ufs.png" 
                  alt="Logo UFS" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              
              {/* Logo DCOMP */}
              <div className="h-16 px-4 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src="logo-dcomp.png" 
                  alt="Logo DCOMP" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Mangababiss. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;