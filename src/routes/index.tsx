import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Plug, Wrench, Zap, Heart, Cable } from "lucide-react";

import { Reveal, useInView } from "@/components/Reveal";
import { SparkField } from "@/components/SparkField";
import { Confetti } from "@/components/Confetti";
import foto1 from "@/assets/foto-1.jpg";
import foto2 from "@/assets/foto-2.jpg";
import foto3 from "@/assets/foto-3.jpg";
import foto4 from "@/assets/foto-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "¡Feliz Cumpleaños, Papá! · 57 años iluminando nuestras vidas" },
      {
        name: "description",
        content:
          "Una página de cumpleaños para papá, electricista que cumple 57 años el 18 de agosto: fotos, recuerdos y una carta con todo el cariño.",
      },
      { property: "og:title", content: "¡Feliz Cumpleaños, Papá! · 57 años iluminando nuestras vidas" },
      {
        property: "og:description",
        content: "Un regalo digital con fotos, recuerdos y una dedicatoria para el mejor electricista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// EDITABLE: cambia las frases y fechas de cada foto
const FOTOS = [
  { src: foto1, caption: "Nuestro equipo de siempre", date: "Padre e hijo" },
  { src: foto2, caption: "Una foto juntos", date: "En la finca" },
  { src: foto3, caption: "Siempre con las manos listas", date: "En el trabajo" },
  { src: foto4, caption: "El descanso bien merecido", date: "En la finca" },
];

function Index() {
  const carta = useInView<HTMLElement>(0.25);

  return (
    <main className="relative overflow-x-hidden bg-panel-gradient">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24 text-center">
        <SparkField />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary/50 px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-primary">
              <Zap className="h-3.5 w-3.5" /> 18 de agosto
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="animate-flicker text-balance text-5xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl">
              <span className="text-gold-gradient">¡Feliz Cumpleaños, Papá!</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              <Zap className="inline h-4 w-4 text-primary" /> 57 años iluminando nuestras vidas{" "}
              <Zap className="inline h-4 w-4 text-primary" />
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="#sobre-ti"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Ver mi sorpresa
              <Zap className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* SOBRE TI */}
      <section id="sobre-ti" className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Sobre ti <Zap className="inline h-6 w-6 text-primary" />
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Toda mi vida le he visto salir temprano, preparado para trabajar y dar lo mejor de usted,
                dispuesto a arreglar lo que a otros parece imposible. Es electricista, pero lo suyo
                va más allá de los cables: donde hay oscuridad, usted encuentra la manera de traer luz.
              </p>
              <p>
                Cada casa que ilumino también sostuvo la mia. Su esfuerzo, su paciencia y esa
                forma tan suya de no rendirse me enseño lo que significa trabajar con orgullo y
                querer con hechos.
              </p>
              <p className="text-foreground">
                Gracias por ser el ejemplo, la energía y el corazón para mi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Lightbulb, label: "Luz" },
                { Icon: Wrench, label: "Oficio" },
                { Icon: Cable, label: "Constancia" },
                { Icon: Plug, label: "Familia" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-6 text-center backdrop-blur-sm"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">
              Recuerdos que brillan <Zap className="inline h-6 w-6 text-primary" />
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
              Momentos guardados como pequeñas chispas de nuestra historia.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOTOS.map((foto, i) => (
              <Reveal key={foto.caption} delay={i * 120}>
                <figure
                  className="rotate-[-1.2deg] rounded-md bg-cream p-3 pb-5 shadow-polaroid transition-transform duration-500 even:rotate-[1.5deg] hover:rotate-0 hover:scale-[1.03]"
                >
                  <img
                    src={foto.src}
                    alt={foto.caption}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                  <figcaption className="mt-4 text-center font-display text-sm text-primary-foreground">
                    {foto.caption}
                    <span className="mt-1 block text-xs tracking-widest text-primary-foreground/60">
                      {foto.date}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CARTA FINAL */}
      <section
        ref={carta.ref}
        className="relative overflow-hidden border-t border-border/60 px-6 py-28"
      >
        <Confetti active={carta.inView} />
        <div className="relative z-10 mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-3xl border border-primary/30 bg-card/70 p-8 shadow-glow backdrop-blur-sm sm:p-12">
              <h2 className="text-center text-2xl font-semibold sm:text-3xl">
                <span className="text-gold-gradient">Para ti, papá</span>
              </h2>
              {/* EDITABLE: escribe aquí tu dedicatoria */}
              <div className="mt-8 space-y-5 font-display text-base leading-relaxed text-foreground/90 sm:text-lg">
                <p>Querido papá:</p>
                <p>
                  Hoy cumples 57 años y quiero que sepas que eres, sin exagerar, la persona que más
                  admiro. Aprendí de ti que el trabajo bien hecho no necesita aplausos y que el amor
                  se demuestra estando, aunque estés cansado.
                </p>
                <p>
                  Gracias por cada esfuerzo silencioso, por cada consejo, por enseñarme a levantarme
                  y seguir. Ojalá este día te devuelva un poquito de toda la luz que nos has dado.
                </p>
                <p>Te quiero muchísimo. Feliz cumpleaños. ⚡</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-6 py-14 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-2 font-display text-lg text-primary">
            <Heart className="h-4 w-4" /> Con todo mi cariño, tu hijo Junior
          </p>
          <p className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            18 de agosto
          </p>
        </Reveal>
      </footer>
    </main>
  );
}
