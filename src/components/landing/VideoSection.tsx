import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça o <span className="text-primary">Mangababiss</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Assista ao nosso vídeo e descubra como podemos transformar a sua empresa
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-3xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] bg-[length:40px_40px]" />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-primary rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="h-12 w-12 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* Text */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-muted-foreground font-medium">
              Vídeo de apresentação em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;