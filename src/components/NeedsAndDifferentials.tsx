import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const NeedsAndDifferentials = () => {
  const needs = [
    "Receitas divididas em passos curtos e numerados",
    "Uso de ícones, imagens ou animações para reforçar instruções",
    "Opção de áudio com fala calma e pausada",
    "Notificações suaves para lembrar o próximo passo ou tempo de forno/panela",
    "Uso de cores não vibrantes",
    "Controle do tempo da receita em relação a timers e pausas",
  ];

  const differentials = [
    "Modo passo a passo ilustrado: cada tela mostra só uma etapa, com imagem e texto simples",
    "Leitura em voz alta com opção de repetir instruções",
    "Controle do usuário em relação as etapas de receita",
    "Layout minimalista, sem excesso de informação",
    "Uso de cores e contrastes consistentes, evitando poluição visual",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Necessidades e Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O que torna o Todos À Mesa único e como vamos atender necessidades
              reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/30 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    Necessidades Identificadas
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {needs.map((need, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="min-w-[28px] h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-0.5">
                        {need}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-accent/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">
                    Diferenciais do App
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {differentials.map((differential, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="min-w-[28px] h-7 flex items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-0.5">
                        {differential}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Conclusões da Pesquisa
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A aplicação da entrevista e da análise de concorrentes
                  permitiu compreender melhor as dificuldades e necessidades do
                  público-alvo. A entrevista foi fundamental para identificar
                  preferências como fontes maiores, imagens simplificadas,
                  botões grandes e voz clara e desacelerada. Também surgiram
                  ideias práticas, como comandos por voz e pausas automáticas
                  entre etapas. Esses resultados foram essenciais para a
                  estruturação inicial do protótipo de baixa fidelidade.{" "}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Por outro lado, a pesquisa também revelou aspectos a serem
                  revisados. O participante relatou que cores vibrantes
                  atrapalham o uso, o que contrariou expectativas iniciais e
                  levantou a necessidade de ampliar o número de participantes
                  para validar essas observações. Para isso, recomenda-se a
                  aplicação de questionários rápidos em uma segunda etapa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Outra melhoria seria retomar a entrevista com o protótipo de
                  baixa fidelidade, a fim de avaliar a capacidade do usuário de
                  seguir as instruções de forma autônoma. Contudo, devido à
                  limitação de tempo, essa etapa não foi realizada.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NeedsAndDifferentials;
