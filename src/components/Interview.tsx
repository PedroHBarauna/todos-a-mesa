import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Lightbulb, FileText, TriangleAlert } from "lucide-react";

const Interview = () => {
  const learnings = [
    "Preferência por passo a passo único por tela e voz pausada (com repetição e desaceleração)",
    "Imagens grandes, simples e nítidas. Cores vibrantes atrapalham",
    "Botões grandes e ícones claros",
    "Comando de voz por IA e toque simples para repetir a etapa",
    "Funções de pausa e voltar para maior controle e autonomia",
  ];

  const challenges = [
    "Segurança com objetos cortantes e distrações sonoras no ambiente",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entrevista em Profundidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conversas detalhadas com usuários para entender desafios,
              necessidades e expectativas em relação à acessibilidade
            </p>
          </div>

          <Card className="p-8 mb-8 border-2 border-primary/30 bg-primary/5">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  João, 23 anos
                </h3>
                <p className="text-lg text-muted-foreground">
                  Usuário com baixa visão e deficiência intelectual leve
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 mb-8 border-2">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Vídeo da Entrevista
              </h3>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden border-2 border-border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/u5dUYtLdZoI"
                title="Entrevista com João - Todos À Mesa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>

          <Card className="p-8 mb-6 border-2 border-accent/30 bg-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Principais Aprendizados (Feedback do Usuário)
              </h3>
            </div>

            <ul className="space-y-4">
              {learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-[28px] h-7 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-0.5">
                    {learning}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 mb-6 border-2 border-destructive/30 bg-destructive/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <TriangleAlert className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Desafios Ainda Não Resolvidos
              </h3>
            </div>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <p className="text-muted-foreground leading-relaxed">
                    {challenge}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 gap-2" asChild>
              <a
                href="https://drive.google.com/file/d/15aPZ8cgoWwAx1z79hYtGnvkOBVFUH9dH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5" />
                Ver Entrevista Transcrita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
