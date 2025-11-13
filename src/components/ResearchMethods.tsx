import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, GitBranch, MessageSquare } from "lucide-react";

const ResearchMethods = () => {
  const beforeMethods = [
    {
      icon: Eye,
      title: "Observação Contextual",
      description:
        'Entender as dores do usuário, entrevista e estudo de viabilidade, observar na prática a rotina de uma pessoa com deficiência no preparo de receitas "Fly on the wall".',
      details: {
        justification:
          "Método ideal para revelar motivações, preferências, frustrações e barreiras que não aparecem apenas pela observação. Ajuda a compreender como o usuário interpreta instruções, por que certos elementos de interface geram ansiedade ou confusão, e quais recursos realmente aumentam a autonomia.",
        application:
          'Entrevista realizada com João (23 anos), usuário com baixa visão e dificuldade cognitiva leve, articulada em torno da experiência prática na cozinha ("O primeiro bolo de João", com registro em vídeo para análise).',
      },
    },
    {
      icon: GitBranch,
      title: "Análise de Sistemas Concorrentes",
      description:
        "Identificar como funciona a navegação, e funcionalidades de aplicativos do mesmo segmento e definir pontos de melhoria, análise de avaliações dos atuais usuários.",
      details: {
        justification:
          "Permite mapear padrões de navegação, funcionalidades, lacunas de acessibilidade e boas práticas já adotadas (ou ignoradas) por aplicativos do mesmo segmento, orientando o levantamento de requisitos e antipadrões de design a evitar.",
        application:
          "Levantamento estruturado de aplicativos de receitas, com leitura de avaliações de usuários e verificação prática dos fluxos (timer, cadastro de receitas, hierarquia de categorias, acessibilidade visual e por voz).",
      },
    },
  ];

  const afterMethods = [
    {
      icon: Users,
      title: "Tree Testing",
      description:
        "Validar se a hierarquia de menus e categorias faz sentido para os usuários.",
    },
    {
      icon: MessageSquare,
      title: "Coleta de Feedbacks",
      description:
        "Avaliação sistemática da experiência do usuário com foco em acessibilidade e satisfação.",
    },
  ];

  return (
    <section id="research-methods" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Métodos de Pesquisa Propostos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Abordagem metodológica estruturada em duas etapas fundamentais
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Before Prototype */}
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-2">
                1. Antes do Protótipo
              </h3>
              <p className="text-muted-foreground">
                Pesquisa exploratória para fundamentar o design
              </p>
            </div>

            <div className="space-y-4">
              {beforeMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {method.description}
                    </p>
                    {method.details && (
                      <div className="space-y-3 mt-4 pt-4 border-t border-border">
                        <div>
                          <p className="font-semibold text-foreground mb-2">
                            Justificativa:
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {method.details.justification}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-2">
                            Aplicação no projeto:
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {method.details.application}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* After Prototype */}
          <div className="space-y-6">
            <div className="bg-accent/10 rounded-lg p-6 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-accent mb-2">
                2. Depois do Protótipo
              </h3>
              <p className="text-muted-foreground">
                Validação e refinamento através de testes
              </p>
            </div>

            <div className="space-y-4">
              {afterMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-accent/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <method.icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethods;
