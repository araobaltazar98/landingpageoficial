import Reveal from "@/components/Reveal";
import { clientLogos } from "@/data/content";

const LOGO_HEIGHT = 56;

/**
 * Os SVGs são monocromáticos; usamos-os como máscara para pintá-los em Grafite
 * com a mesma altura, sem as cores originais das marcas.
 */
export default function ClientLogos() {
  return (
    <section aria-labelledby="logos-heading" className="px-6 lg:px-8">
      <div className="mx-auto max-w-6xl border-y border-line py-12">
        <Reveal>
          <p
            id="logos-heading"
            className="text-center text-sm text-graphite"
          >
            {clientLogos.heading}
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {clientLogos.logos.map((logo) => (
              <li key={logo.name}>
                <span
                  role="img"
                  aria-label={logo.name}
                  title={logo.name}
                  className="block bg-graphite"
                  style={{
                    height: LOGO_HEIGHT,
                    width: Math.round(LOGO_HEIGHT * logo.aspectRatio),
                    maskImage: `url(${logo.src})`,
                    WebkitMaskImage: `url(${logo.src})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
