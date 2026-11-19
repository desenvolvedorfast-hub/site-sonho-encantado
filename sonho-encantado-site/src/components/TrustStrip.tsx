import { TRUST_STRIP_ITEMS } from '../data/schoolContent';
import { Reveal } from './Reveal';

export function TrustStrip() {
  return (
    <section
      aria-label="Informações principais da escola"
      className="border-y border-brand-dark/20 bg-brand-dark py-6 text-brand-paper sm:py-8"
    >
      <div className="container-editorial">
        <Reveal>
          <div className="grid grid-cols-1 gap-5 divide-y divide-brand-paper/15 md:grid-cols-3 md:gap-8 md:divide-x md:divide-y-0">
            {TRUST_STRIP_ITEMS.map((item, index) => (
              <div key={item.highlight} className={index > 0 ? 'pt-4 md:pl-8 md:pt-0' : ''}>
                <p className="font-display text-lg font-extrabold text-brand-yellow sm:text-xl">
                  {item.highlight}
                </p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-[#DCE7E1] sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
