import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, GitBranch, MessageSquare } from "lucide-react";

const ResearchMethods = () => {
  const beforeMethods = [
    {
      icon: Eye,
      title: "Observação Contextual",
      description: "Entender as dores do usuário, entrevista e estudo de viabilidade, observar na prática a rotina de uma pessoa com deficiência no preparo de receitas \"Fly on the wall\"."
    },
    {
      icon: GitBranch,
      title: "Análise de Sistemas Concorrentes",
      description: "Identificar como funciona a navegação, e funcionalidades de aplicativos do mesmo segmento e definir pontos de melhoria, análise de avaliações dos atuais usuários."
    }
  ];

  const afterMethods = [
    {
      icon: Users,
      title: "Tree Testing",
      description: "Validar se a hierarquia de menus e categorias faz sentido para os usuários."
    },
    {
      icon: MessageSquare,
      title: "Coleta de Feedbacks",
      description: "Avaliação sistemática da experiência do usuário com foco em acessibilidade e satisfação."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Métodos de Pesquisa Propostos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Abordagem metodológica estruturada em duas etapas fundamentais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <method.icon className="w-6 h-6 text-primary" />
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
                <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
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
