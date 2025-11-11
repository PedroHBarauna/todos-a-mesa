import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const CompetitiveAnalysis = () => {
  const competitor = {
    name: "Tasty - Receitas e Culinária",
    strengths: [
      "Interface visualmente atraente com vídeos curtos de receitas",
      "Grande variedade de receitas disponíveis",
      "Função de busca por ingredientes",
      "Lista de compras integrada",
      "Modo passo a passo para seguir receitas",
      "Comunidade ativa com avaliações de usuários",
      "Salvamento de receitas favoritas",
      "Integração com redes sociais",
      "Vídeos em alta qualidade",
      "Categorização por tipo de refeição e dificuldade"
    ],
    weaknesses: [
      "Interface complexa com muitos elementos visuais simultâneos",
      "Falta de recursos de acessibilidade para baixa visão",
      "Sem suporte adequado para leitores de tela",
      "Navegação confusa com múltiplos níveis de menus",
      "Contraste de cores insuficiente",
      "Textos pequenos e difíceis de ler",
      "Ausência de comando de voz para navegação",
      "Vídeos sem descrição de áudio adequada",
      "Muitas propagandas que distraem",
      "Não possui modo simplificado",
      "Falta de feedback sonoro para ações",
      "Instruções rápidas demais nos vídeos",
      "Sem opção de pausar e repetir etapas facilmente",
      "Interface não otimizada para pessoas com deficiência intelectual"
    ]
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Análise de Concorrentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estudo comparativo de soluções existentes para identificar oportunidades e melhores práticas
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl text-center">
                  {competitor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-foreground text-lg">Pontos Fortes</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {competitor.strengths.map((strength, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-600 mt-1 text-xs font-bold">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <h4 className="font-semibold text-foreground text-lg">Pontos Fracos</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {competitor.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-red-600 mt-1 text-xs font-bold">✗</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Principais Insights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Simplicidade é fundamental:</strong> Aplicativos com interfaces mais simples demonstram melhor aceitação
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Contraste e tamanho:</strong> Alto contraste e elementos grandes são essenciais, mas devem ser balanceados com a estética
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Feedback multimodal:</strong> Combinação de feedback visual, sonoro e tátil melhora significativamente a experiência
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Personalização:</strong> Permitir ajustes individuais é crucial para atender diferentes necessidades
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis;
