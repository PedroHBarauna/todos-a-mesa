import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Users, Code } from "lucide-react";

const NextSteps = () => {
  const steps = [
    {
      icon: Users,
      phase: "1",
      title: "Conclusão da Pesquisa",
      timeline: "Outubro - Novembro",
      description:
        "Entrevista em profundidade, análise de concorrentes e consolidação de requisitos",
      actions: [
        "Fly on the Wall",
        "Definir requisitos funcionais prioritários",
        "Documentar personas e cenários de uso",
      ],
    },
    {
      icon: Code,
      phase: "2",
      title:
        "Desenvolvimento do Protótipo de Baixa Fidelidade, Avaliação e Testes",
      timeline: "Novembro - Dezembro",
      description:
        "Criar protótipo de baixa fidelidade baseado na investigação inicial e realizar avaliação",
      actions: [
        "Design de interface de baixa fidelidade",
        "Avaliação de impacto com usuários",
        "Refinar protótipo baseado no feedback",
      ],
    },
    {
      icon: Calendar,
      phase: "Fase 3",
      title: "Desenvolvimento do Protótipo de Alta Fidelidade e Validação",
      timeline: "Novembro - Dezembro",
      description:
        "Desenvolvimento e validação do protótipo de alta fidelidade através de tree testing e coleta de feedbacks com usuários reais",
      actions: [
        "Coletar feedback sobre usabilidade com usuários reais",
        "Apresentar resultados",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Próximos Passos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Roadmap para desenvolvimento e lançamento do Todos À Mesa
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {step.phase}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {step.timeline}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {step.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-16">
                    {step.actions.map((action, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
