import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const StakeholdersAndUsers = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            Stakeholders e Usuários
          </h2>
        </div>

        <div className="space-y-6">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Usuários Primários
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pessoas com baixa visão e/ou limitações cognitivas leves que
                cozinham em casa com apoio limitado. Preferem passo a passo em
                uma tela, narração pausada com possibilidade de repetir e
                desacelerar, imagens grandes e simples, botões grandes e ícones
                claros, além de comandos de voz. Essas necessidades foram
                identificadas nas entrevistas e nos aprendizados consolidados
                pelo grupo.
              </p>

              <p>
                <strong className="text-foreground">Riscos e barreiras:</strong>{" "}
                segurança com objetos cortantes e distrações sonoras do ambiente
                ainda são desafios não resolvidos, devendo orientar requisitos
                não funcionais (alertas, instruções de segurança e modo "mãos
                livres" robusto).
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Usuários Secundários (de Suporte)
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <div className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p>
                  <strong className="text-foreground">
                    Familiares ou pessoas de apoio:
                  </strong>{" "}
                  auxiliam na configuração de preferências (voz, tamanho do
                  texto, contraste) e na revisão de listas de ingredientes.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p>
                  <strong className="text-foreground">
                    Profissionais de apoio:
                  </strong>{" "}
                  podem utilizar o aplicativo em atividades guiadas e fornecer
                  feedback sobre usabilidade e acessibilidade.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StakeholdersAndUsers;
