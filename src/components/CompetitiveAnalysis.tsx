import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const CompetitiveAnalysis = () => {
  const competitor = {
    name: "Tudo Gostoso",
    strengths: [
      "Temporizador das etapas",
      "Mostra imagens dos ingredientes",
      "Modo passo a passo para seguir receitas",
    ],
    weaknesses: [
      "Muito texto descritivo sem suporte visual adequado",
      "Muitas medidas sem equivalentes visuais",
      "Sem padrão de cadastro de receitas",
      "Muitos anúncios (tanto Aapp quanto web)",
      "Modo sem mão não funcional",
      "Opções de escolhas pequenas com letras pequenas",
      "Ausência de comando de voz para navegação",
      "Sem opção de pausar e repetir etapas facilmente",
    ],
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
              Estudo comparativo de soluções existentes para identificar
              oportunidades e melhores práticas
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
                      <h4 className="font-semibold text-foreground text-lg">
                        Pontos Fortes
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {competitor.strengths.map((strength, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-green-600 mt-1 text-xs font-bold">
                            ✓
                          </span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <h4 className="font-semibold text-foreground text-lg">
                        Pontos Fracos
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {competitor.weaknesses.map((weakness, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-red-600 mt-1 text-xs font-bold">
                            ✗
                          </span>
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
                    <strong className="text-foreground">
                      Problemas recorrentes:
                    </strong>{" "}
                    Excesso de texto, medidas confusas, falta de padrão no
                    cadastro, anúncios intrusivos, baixa acessibilidade, botões
                    e fontes pequenos, timer único (não por etapas) e ausência
                    de interação por voz.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">
                      Diretrizes desejáveis:
                    </strong>{" "}
                    Passos curtos e numerados, uma etapa por tela, ícones e
                    imagens simples, opção de áudio com fala calma
                    (controlável), notificações suaves, cores não vibrantes,
                    contrastes consistentes e timers independentes por etapa.
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
