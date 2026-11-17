import { TRUST_STRIP_ITEMS } from '../data/schoolContent';

export function TrustStrip() {
  return (
    <section
      aria-label="Informações principais da escola"
      className="border-y border-brand-dark/15 bg-brand-dark py-7 text-brand-paper sm:py-9"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 divide-y divide-brand-paper/15 md:grid-cols-3 md:gap-8 md:divide-x md:divide-y-0">
          {TRUST_STRIP_ITEMS.map((item, index) => (
            <div key={item.highlight} className={index > 0 ? 'pt-5 md:pl-8 md:pt-0' : ''}>
              <p className="font-display text-lg font-extrabold text-brand-yellow sm:text-xl">
                {item.highlight}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#DCE7E1]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
