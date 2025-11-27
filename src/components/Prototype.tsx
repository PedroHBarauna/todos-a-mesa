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
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=1200&fit=crop",
    alt: "Tela inicial do aplicativo",
  },
  {
    url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=1200&fit=crop",
    alt: "Lista de receitas",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1200&fit=crop",
    alt: "Detalhe da receita",
  },
  {
    url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=1200&fit=crop",
    alt: "Timer da receita",
  },
  {
    url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=1200&fit=crop",
    alt: "Passo a passo",
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=1200&fit=crop",
    alt: "Configurações de acessibilidade",
  },
  {
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=1200&fit=crop",
    alt: "Categorias de receitas",
  },
  {
    url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1200&fit=crop",
    alt: "Favoritos",
  },
];

const sketchingImages = [
  {
    url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=1200&fit=crop",
    alt: "Sketch inicial - navegação",
  },
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
    alt: "Sketch - fluxo de receitas",
  },
  {
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=1200&fit=crop",
    alt: "Sketch - layout timer",
  },
  {
    url: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&h=1200&fit=crop",
    alt: "Sketch - componentes de acessibilidade",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1200&fit=crop",
    alt: "Sketch - estrutura de informação",
  },
  {
    url: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=1200&fit=crop",
    alt: "Sketch - wireframe de categorias",
  },
  {
    url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=1200&fit=crop",
    alt: "Sketch - interações principais",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1200&fit=crop",
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
