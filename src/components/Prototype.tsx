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
import prototype1 from "@/assets/prototype/1.jpg";
import prototype2 from "@/assets/prototype/2.jpg";
import prototype3 from "@/assets/prototype/3.jpg";
import prototype4 from "@/assets/prototype/4.jpg";
import prototype5 from "@/assets/prototype/5.jpg";
import prototype6 from "@/assets/prototype/6.jpg";
import prototype7 from "@/assets/prototype/7.jpg";
import prototype8 from "@/assets/prototype/8.jpg";
import prototype9 from "@/assets/prototype/9.jpg";
import prototype10 from "@/assets/prototype/10.jpg";
import prototype11 from "@/assets/prototype/11.jpg";
import prototype12 from "@/assets/prototype/12.jpg";
import prototype13 from "@/assets/prototype/13.jpg";
import prototype14 from "@/assets/prototype/14.jpg";
import prototypeSketch1 from "@/assets/prototype/1_sketch.png";
import prototypeSketch2 from "@/assets/prototype/2_sketch.png";
import prototypeSketch3 from "@/assets/prototype/3_sketch.png";
import prototypeSketch4 from "@/assets/prototype/4_sketch.png";
import prototypeSketch5 from "@/assets/prototype/5_sketch.png";
import prototypeSketch6 from "@/assets/prototype/6_sketch.png";
import prototypeSketch7 from "@/assets/prototype/7_sketch.png";
import prototypeSketch8 from "@/assets/prototype/8_sketch.png";

const mockImages = [
  {
    url: prototype1,
    alt: "Tela inicial do aplicativo",
  },
  {
    url: prototype2,
    alt: "Login",
  },
  {
    url: prototype3,
    alt: "Home",
  },
  {
    url: prototype4,
    alt: "Configurações",
  },
  {
    url: prototype5,
    alt: "Lista de receitas",
  },
  {
    url: prototype6,
    alt: "Pesquisa de receitas",
  },
  {
    url: prototype7,
    alt: "Pesquisa por categorias",
  },
  {
    url: prototype8,
    alt: "Informações da receita",
  },
  {
    url: prototype9,
    alt: "Receita",
  },
  {
    url: prototype10,
    alt: "Receita",
  },
  {
    url: prototype11,
    alt: "Receita",
  },
  {
    url: prototype12,
    alt: "Receita",
  },
  {
    url: prototype13,
    alt: "Receita",
  },
  {
    url: prototype14,
    alt: "Receita",
  },
];

const sketchingImages = [
  {
    url: prototypeSketch1,
  },
  {
    url: prototypeSketch2,
  },
  {
    url: prototypeSketch3,
  },
  {
    url: prototypeSketch4,
  },
  {
    url: prototypeSketch5,
  },
  {
    url: prototypeSketch6,
  },
  {
    url: prototypeSketch7,
  },
  {
    url: prototypeSketch8,
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
                  <img src={image.url} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 mt-12">
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
