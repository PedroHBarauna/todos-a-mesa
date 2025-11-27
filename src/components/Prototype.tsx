import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const mockImages = [
  {
    url: "./assets/mockups/prototype-1.png",
    alt: "Tela inicial do aplicativo",
  },
  {
    url: "./assets/mockups/prototype-2.png",
    alt: "Lista de receitas",
  },
  {
    url: "./assets/mockups/prototype-3.png",
    alt: "Detalhe da receita",
  },
  {
    url: "./assets/mockups/prototype-4.png",
    alt: "Timer da receita",
  },
  {
    url: "./assets/mockups/prototype-5.png",
    alt: "Passo a passo",
  },
  {
    url: "./assets/mockups/prototype-6.png",
    alt: "Configurações de acessibilidade",
  },
  {
    url: "./assets/mockups/prototype-7.png",
    alt: "Categorias de receitas",
  },
  {
    url: "./assets/mockups/prototype-8.png",
    alt: "Favoritos",
  },
];

const sketchingImages = [
  {
    url: "./assets/mockups/sketch-1.png",
    alt: "Sketch inicial - navegação",
  },
  {
    url: "./assets/mockups/sketch-2.png",
    alt: "Sketch - fluxo de receitas",
  },
  {
    url: "./assets/mockups/sketch-3.png",
    alt: "Sketch - layout timer",
  },
  {
    url: "./assets/mockups/sketch-4.png",
    alt: "Sketch - componentes de acessibilidade",
  },
  {
    url: "./assets/mockups/sketch-5.png",
    alt: "Sketch - estrutura de informação",
  },
  {
    url: "./assets/mockups/sketch-6.png",
    alt: "Sketch - wireframe de categorias",
  },
  {
    url: "./assets/mockups/sketch-7.png",
    alt: "Sketch - interações principais",
  },
  {
    url: "./assets/mockups/sketch-8.png",
    alt: "Sketch - arquitetura da informação",
  },
];

const Prototype = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="prototype" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Protótipo de Baixa Fidelidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize as telas do aplicativo e explore o protótipo navegável
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sketching</CardTitle>
            <CardDescription>
              Esboços e wireframes iniciais do processo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sketchingImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Galeria de Telas</CardTitle>
            <CardDescription>Telas do protótipo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {mockImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://balsamiq.cloud/syk0q7b/p68942z/r3E68"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Acessar Protótipo Navegável
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) setSelectedImage(null);
          }}
        >
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0">
            <div className="relative w-full h-full flex items-center justify-center bg-background/95">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Visualização em tela cheia"
                  className="max-w-full max-h-[95vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Prototype;
