import { User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const developers: TeamMember[] = [
  { name: "Caio Rosberg Xavier Lima", role: "Desenvolvedor", image: "equipe/caio.jpeg" },
  { name: "Gabryel de Jesus Santos Cardoso", role: "Desenvolvedor", image: "equipe/gabryel.png" },
  { name: "Guilherme Viana Bagio", role: "Desenvolvedor", image: "equipe/guilherme.jpeg" },
  { name: "Isaque Marley Vieira Bispo", role: "Desenvolvedor", image: "equipe/isaque.jpeg" },
  { name: "Julio Geovani Oliveira Guimarães", role: "Desenvolvedor", image: "equipe/julio.jpeg" },
  { name: "Levy dos Santos Oliveira", role: "Desenvolvedor", image: "equipe/levy.jpeg" },
  { name: "Nyckoll Hayane Santos", role: "Desenvolvedora", image: "equipe/nyckoll.jpeg" },
  { name: "Virna Santos Oliveira", role: "Desenvolvedora", image: "equipe/virna.png" },
];

const monitoriaTecnica: TeamMember[] = [
  { name: "Debora Maria Coelho Nascimento", role: "Monitora Técnica", image: "equipe/debora.png" },
  { name: "Edward David Moreno Ordonez", role: "Monitor Técnico", image: "equipe/edward.png" },
  { name: "Michel dos Santos Soares", role: "Monitor Técnico", image: "equipe/michel.png" },
  { name: "Rogerio Patricio Chagas do Nascimento", role: "Monitor Técnico", image: "equipe/rogerio.png" },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border/50">
    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 overflow-hidden border border-primary/10">
      {/* Se existir imagem, mostra a tag img. Se não, mostra o ícone User */}
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            // Se a imagem falhar (caminho errado), ele volta para o ícone
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <User className="h-10 w-10 text-muted-foreground" />
      )}
    </div>
    <h4 className="font-semibold text-foreground text-center text-sm leading-tight">
      {member.name}
    </h4>
    <p className="text-primary text-sm mt-1">{member.role}</p>
  </div>
);

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as pessoas por trás do Mangababiss
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Desenvolvedores
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {developers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Monitoria Técnica
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {monitoriaTecnica.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;