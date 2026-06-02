const items = [
  'Haircut',
  'Beard Shaping',
  'Blade Shave',
  'Machine Shave',
  'Hair Coloring',
  'Highlights',
  'Hair Straightening',
  'Hair Tattoo',
  'Hand Facial',
  'Machine Facial',
  'Ear Cleaning',
  'Wax Removal',
]

export default function ServicesMarquee() {
  const doubled = [...items, ...items]

  return (
    <div className="border-t border-b border-border bg-bg overflow-hidden py-4">
      <div className="animate-marquee flex items-center whitespace-nowrap w-max">
        {doubled.map((s, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="font-display text-base font-bold tracking-[0.15em] uppercase text-text">
              {s}
            </span>
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-accent mx-8 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
