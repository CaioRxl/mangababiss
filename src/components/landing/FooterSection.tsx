import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import logo from "@/assets/mangababiss-logo.png";

const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contato" className="py-24 px-4 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Logo e Parceiros */}
          <div className="space-y-8">
            <div>
              <img
                src={logo}
                alt="Mangababiss"
                className="h-16 w-auto mb-4 brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-background/70 leading-relaxed">
                Transformando a cultura e o engajamento da sua empresa através
                de soluções inovadoras de endomarketing.
              </p>
            </div>

            {/* Seção de Parceiros Atualizada */}
            <div>
              <h4 className="font-semibold mb-4 text-background/90">
                Parceiros & Instituições
              </h4>
              <div className="flex flex-wrap gap-4">
                {/* Logo UFS */}
                <div className="h-16 px-4 bg-white rounded-xl flex items-center justify-center">
                  <img 
                    src="/logo-ufs.png" 
                    alt="Logo UFS" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
                
                {/* Logo DCOMP */}
                <div className="h-16 px-4 bg-white rounded-xl flex items-center justify-center">
                  <img 
                    src="/logo-dcomp.png" 
                    alt="Logo DCOMP" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
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