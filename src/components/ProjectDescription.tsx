import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const ProjectDescription = () => {
  return (
    <section id="project-description" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            Descrição do Projeto
          </h2>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              O projeto consiste no desenvolvimento de um aplicativo de receitas
              inclusivo, voltado para pessoas com baixa visão e pessoas com
              limitações cognitivas leves. O app busca tornar o ato de cozinhar
              mais acessível e prazeroso por meio de uma interface
              personalizável, que permite ajustar o tamanho dos elementos
              visuais de acordo com a necessidade de cada usuário.
            </p>

            <p>
              As receitas são apresentadas de forma simples e objetiva, com
              passo a passo sucinto, imagens demonstrativas e áudio descritivo,
              quando necessário. Em cada etapa, o aplicativo exibe com clareza
              os ingredientes e quantidades, acompanhados de imagens nítidas e
              facilmente compreensíveis.
            </p>

            <p>
              O usuário pode utilizar comandos de voz para navegar entre os
              passos da receita, garantindo maior autonomia durante o preparo.
              Além disso, o app contará com o apoio de uma inteligência
              artificial, capaz de ditar instruções detalhadas, oferecer dicas
              práticas — como técnicas seguras de corte ou métodos alternativos
              de preparo — e adaptar a linguagem conforme o perfil do usuário.
            </p>

            <p>
              O aplicativo também dispõe de uma aba de pesquisa para encontrar
              receitas com facilidade e uma seção de favoritos, organizada em
              categorias como doces, sobremesas e lanches rápidos, facilitando o
              acesso às receitas preferidas.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectDescription;
