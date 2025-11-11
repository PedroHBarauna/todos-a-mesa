import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const NeedsAndDifferentials = () => {
  const needs = [
    "Interface intuitiva com navegação simplificada e clara",
    "Alto contraste visual e suporte para diferentes tamanhos de fonte",
    "Ícones descritivos e linguagem acessível",
    "Feedback sonoro e visual para todas as ações",
    "Compatibilidade com leitores de tela e tecnologias assistivas",
    "Tempo adequado para leitura e compreensão de informações"
  ];

  const differentials = [
    "Design co-criado com usuários com deficiência visual e intelectual",
    "Sistema de navegação por cores e formas além de texto",
    "Tutoriais interativos adaptativos ao nível do usuário",
    "Modo de prática sem consequências para ganhar confiança",
    "Recursos de personalização individual de acessibilidade",
    "Suporte multilíngue com opções de comunicação simplificada"
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
              O que torna o Todos À Mesa único e como atendemos necessidades reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/30 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Necessidades Identificadas</CardTitle>
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
                  <CardTitle className="text-2xl">Nossos Diferenciais</CardTitle>
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
                  Compromisso com a Acessibilidade Universal
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O Todos À Mesa não é apenas um aplicativo, é uma ponte para a inclusão digital. 
                  Cada funcionalidade foi pensada para empoderar pessoas com deficiência visual e intelectual, 
                  garantindo autonomia, dignidade e participação plena na sociedade digital.
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
