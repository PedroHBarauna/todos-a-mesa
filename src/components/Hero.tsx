import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
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
            >
              Conheça o Projeto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/30 shadow-lg"
            >
              Ver Pesquisa
            </Button>
          </div>
        </div>
        <div className="text-center">
          <ul className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-primary-foreground/80">
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
