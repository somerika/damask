'use client'

import { useLanguage } from '@/lib/language-context'

const reviews = [
  {
    author: 'Jere Uljas',
    text: 'A very good experience! The barber was professional, listened to my wishes carefully and the end result exceeded my expectations. The service was friendly and relaxed, and the whole visit took place in a nice atmosphere. The hair was cut carefully and finished stylishly.',
  },
  {
    author: 'Henri Sutinen',
    text: 'We went there ex tempore on Sunday, for the first time, and got a haircut for my 8 year old son and me. Coffee was available while I waited for my turn. The haircut went well and quickly. The price was reasonable. I can definitely recommend it.',
  },
  {
    author: 'shyar',
    text: 'Great customer service. The concept is well thought out, time and effort are spent on the customer. Exactly the kind of barber that every man is looking for. Peaceful business and expert barber. Coffee is also available, warm recommendation.',
  },
  {
    author: 'Ville Kalima',
    text: "The best barber in the area! Hair and beard done at the same time. I've been going to the barber for several years and I always come back. Really competitive prices and great guys as barbers.",
  },
  {
    author: 'Nazdar abdulkader',
    text: "Excellent barber! A careful and skilled barber who listens carefully to the customer's wishes. Neat finish and nice customer service. I highly recommend.",
  },
  {
    author: 'Aleksi Hänninen',
    text: "The best barbershop for men in Helsinki! Fast and uncomplicated service, I definitely recommend checking it out if you haven't already.",
  },
  {
    author: 'Anthony Burton',
    text: "I've been coming here since they opened and have always received excellent, professional service at a great price. Highly recommend.",
  },
  {
    author: 'Joonas Rouhiainen',
    text: 'Great haircut at a good price, one of my favorites in Helsinki in terms of price-quality ratio.',
  },
  {
    author: 'Joel Eklöv',
    text: "The best men's barbershop I've ever been to. I'll always come here with my son in the future.",
  },
  {
    author: 'Joona Kuuramaa',
    text: 'My long hair was straightened in no time. I am very happy with the price, quality and speed.',
  },
  {
    author: 'Niklas Tilli',
    text: 'Friendly and high-quality service, I have been a regular customer for several years.',
  },
  {
    author: 'J-P Ristimaki appi',
    text: 'Great local barber, knowledgeable guys and fast service. Please use local services.',
  },
  {
    author: 'Teemu Lehtonen',
    text: 'Great and fast professional service, every time. I definitely recommend visiting!',
  },
  {
    author: 'Zeynaddin Hasan',
    text: 'Professional barbers and clean facilities. I highly recommend to everyone 6/5.',
  },
  {
    author: 'Lauri Mattila',
    text: 'Great customer service, nice staff, nice to get your hair done professionally.',
  },
  {
    author: 'Nikolai Laur',
    text: 'Nice and cozy place to have your fresh haircut and trim your beard too.',
  },
  {
    author: 'Noksuboy',
    text: "The best barbershop I've ever been to, nice barbershop and atmosphere.",
  },
  {
    author: 'Sakari Kervinen',
    text: "Affordable and fast service. I've been going for many years.",
  },
]

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1l1.236 2.504L10 3.91l-2 1.95.472 2.754L6 7.25 3.528 8.614 4 5.86 2 3.91l2.764-.406z"
          fill="currentColor"
          className="text-accent"
        />
      </svg>
    ))}
  </div>
)

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="bg-surface border border-border flex-shrink-0 flex flex-col"
      style={{ width: 'clamp(260px, 30vw, 360px)', padding: '1.75rem 1.5rem' }}
    >
      <Stars />
      <p className="text-muted text-[0.875rem] font-light leading-[1.75] flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="font-display font-bold uppercase tracking-[0.08em] text-text text-[0.75rem] mt-5">
        {review.author}
      </p>
    </div>
  )
}

const row1 = reviews.slice(0, 9)
const row2 = reviews.slice(9)

export default function Reviews() {
  const { lang } = useLanguage()

  const heading = lang === 'fi' ? ['Asiakkaidemme', 'Sanoin.'] : ['In Our', "Clients' Words."]
  const eyebrow = lang === 'fi' ? 'Arvostelut' : 'Reviews'

  return (
    <section
      className="bg-bg border-t border-border overflow-hidden"
      style={{ padding: 'clamp(4rem, 7vw, 6rem) 0' }}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 70s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 78s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div
        style={{ padding: '0 clamp(1.25rem, 4vw, 3rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-accent" />
          <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">{eyebrow}</span>
        </div>
        <h2
          className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          {heading[0]}
          <br />
          {heading[1]}
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="flex overflow-hidden mb-4">
        <div className="marquee-left flex gap-4" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden">
        <div className="marquee-right flex gap-4" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
