import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Code, Rocket } from "lucide-react";

const NextSteps = () => {
  const steps = [
    {
      icon: Users,
      phase: "Fase 1",
      title: "Conclusão da Pesquisa",
      timeline: "2-3 meses",
      description:
        "Finalizar entrevistas em profundidade, análise de concorrentes e consolidação de requisitos",
      actions: [
        "Completar 12 entrevistas com usuários",
        "Documentar personas e cenários de uso",
        "Definir requisitos funcionais prioritários",
      ],
    },
    {
      icon: Code,
      phase: "Fase 2",
      title: "Desenvolvimento do Protótipo",
      timeline: "3-4 meses",
      description:
        "Criar protótipo funcional baseado nos insights da pesquisa com foco em acessibilidade",
      actions: [
        "Design de interface de alta fidelidade",
        "Desenvolvimento de protótipo navegável",
        "Implementação de recursos de acessibilidade",
      ],
    },
    {
      icon: Calendar,
      phase: "Fase 3",
      title: "Testes de Usabilidade",
      timeline: "1-2 meses",
      description:
        "Validação do protótipo através de tree testing e coleta de feedbacks com usuários reais",
      actions: [
        "Conduzir sessões de tree testing",
        "Coletar feedback sobre usabilidade",
        "Iterar design baseado nos resultados",
      ],
    },
    {
      icon: Rocket,
      phase: "Fase 4",
      title: "Lançamento e Expansão",
      timeline: "2-3 meses",
      description:
        "Refinamento final, lançamento do aplicativo e planejamento de funcionalidades futuras",
      actions: [
        "Ajustes finais no aplicativo",
        "Lançamento versão beta",
        "Planejamento de atualizações futuras",
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
