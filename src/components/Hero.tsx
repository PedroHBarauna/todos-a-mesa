import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.max(1 - scrollY * 0.001, 0.8);
  const opacity = Math.max(1 - scrollY * 0.002, 0);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden text-primary-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
      <div
        className="container mx-auto px-4 py-20 relative z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Todos À Mesa
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Um aplicativo acessível projetado para pessoas com deficiência
            visual e deficiência intelectual leve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 border-2 shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                const el = document.getElementById("project-description");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Conheça o Projeto
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/30 shadow-lg"
              onClick={() => {
                const el = document.getElementById("research-methods");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Ver Pesquisa
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/30 shadow-lg"
              onClick={() => {
                const el = document.getElementById("prototype");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Ver Protótipo Baixa Fidelidade
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/30 shadow-lg"
              onClick={() => {
                const el = document.getElementById("high-fidelity");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Ver Protótipo Alta Fidelidade
            </Button>
          </div>
        </div>
        <div className="text-center mt-10">
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <li>
              <strong>Giovanna Souza</strong>
            </li>
            <li>
              <strong>João Victor Rocha</strong>
            </li>
            <li>
              <strong>Nicolas Mello</strong>
            </li>
            <li>
              <strong>Pedro Barauna</strong>
            </li>
            <li>
              <strong>Pedro Figueiredo</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
