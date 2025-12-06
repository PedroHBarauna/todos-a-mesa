import { ExternalLink } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Button } from "@/components/ui/button";

const HighFidelityPrototype = () => {
  return (
    <section id="prototipo" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Protótipo de Alta Fidelidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualize as telas do aplicativo e explore o protótipo navegável
          </p>
        </div>

        {/* Protótipo de Alta Fidelidade */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Protótipo de Alta Fidelidade</CardTitle>
            <CardDescription>
              Interaja com o protótipo navegável diretamente no Figma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-border mb-6">
              <iframe
                src="https://embed.figma.com/design/l2FejsGf3hE0xtNLhyHten/Todos-%C3%A0-Mesa?node-id=0-1&embed-host=share"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://www.figma.com/design/l2FejsGf3hE0xtNLhyHten/Todos-%C3%A0-Mesa?node-id=0-1&t=oC3brD1AgqNMVR2Z-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Ver Protótipo Completo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HighFidelityPrototype;
