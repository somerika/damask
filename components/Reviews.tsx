'use client'

import { useLanguage } from '@/lib/language-context'

const reviewsEn = [
  {
    author: 'Jere Uljas',
    text: 'A very good experience! The barber was professional, listened to my wishes carefully and the end result exceeded my expectations. The service was friendly and relaxed, and the whole visit took place in a nice atmosphere. The hair was cut carefully and finished stylishly.',
  },
  {
    author: 'Henri Sutinen',
    text: 'We went there ex tempore on Sunday, for the first time, and got a haircut for my 8 year old son and me. Coffee was available while I waited for my turn. The haircut went well and quickly. The price was reasonable. I can definitely recommend it.',
  },
  {
    author: 'Ville Kalima',
    text: "The best barber in the area! Hair and beard done at the same time. I've been going to the barber for several years and I always come back. Really competitive prices and great guys as barbers.",
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
  {
    author: 'Vesa Pöyhönen',
    text: 'I visited after reading the positive reviews, and they were absolutely deserved. Even though I gave Memo fairly vague instructions for my hair and beard, he understood exactly what I wanted and delivered a fantastic result. Great service, excellent attention to detail, and a style that suited me perfectly. The price-to-quality ratio is probably the best in the city.',
  },
  {
    author: 'Hamid Alo',
    text: "A truly professional barber and excellent service! The haircut was exactly what I wanted, and the atmosphere was relaxed and friendly. Customer satisfaction is a priority here. I highly recommend it to anyone looking for a quality men's barber. I will definitely be back!",
  },
  {
    author: 'Ville Arvola',
    text: 'A very skilled and knowledgeable barber and a better than expected cut made this barbershop the absolute BEST PLACE in Espoo for future haircuts. Very precise results. I definitely recommend going there because of the reasonable prices for the cut.',
  },
  {
    author: 'Abdullh Osman',
    text: 'I came here for a haircut and received excellent service and very kind treatment. I recommend this to all people in this area.',
  },
  {
    author: 'Giovanni Azzaretti',
    text: "He's carrying my life here in Helsinki. Top barber around. Don't even need the recovery shower after the cut since they're already perfect.",
  },
  {
    author: 'Ashenca Gunarathna',
    text: "I had a great experience at Damask Parturi Kannelmäki. Khalil did an excellent job with my haircut. He was professional, friendly, and really listened to what I wanted. The result was clean and exactly how I imagined. The shop was welcoming and well-kept. I'm very happy and will definitely come back. Highly recommended!",
  },
  {
    author: 'Timo Tervo',
    text: "Been coming here for several years because you don't have to worry about making an appointment and the quality is good. Parking is nearby. If you have to wait a while, the parrot's chatter and the massage chair will help pass the time.",
  },
  {
    author: 'Talaat Mukhlif',
    text: 'The barbershop is excellent. The service is high quality and professional, and the barbers are really knowledgeable and friendly. I highly recommend it!',
  },
  {
    author: 'Matti Lehtonen',
    text: 'Excellent barber shop. Friendly staff, haircuts are quick and always as hoped for. Also affordable. Recommended!',
  },
]

const reviewsFi = [
  {
    author: 'Jere Uljas',
    text: 'Todella hyvä kokemus! Parturi oli ammattitaitoinen, kuunteli toiveitani tarkasti ja lopputulos ylitti odotukseni. Palvelu oli ystävällistä ja rentoa, ja koko käynti sujui mukavassa tunnelmassa. Hiukset leikattiin huolellisesti ja viimeisteltiin tyylikkäästi.',
  },
  {
    author: 'Henri Sutinen',
    text: 'Menimme sinne sunnuntaina ensimmäistä kertaa ennakkoon sopimatta – poikani (8 v.) ja minä saimme molemmat hiustenleikkauksen. Kahvia oli tarjolla odotellessa. Leikkaus sujui hyvin ja nopeasti. Hinta oli kohtuullinen. Suosittelen ehdottomasti.',
  },
  {
    author: 'Ville Kalima',
    text: 'Alueen paras parturi! Hiukset ja parta hoidetaan samalla kertaa. Olen käynyt täällä useita vuosia ja palaan aina takaisin. Todella kilpailukykyiset hinnat ja mahtavat tyypit partureina.',
  },
  {
    author: 'Aleksi Hänninen',
    text: 'Helsingin paras miestenparturi! Nopea ja mutkaton palvelu – suosittelen ehdottomasti käymään, jos et ole vielä käynyt.',
  },
  {
    author: 'Anthony Burton',
    text: 'Olen käynyt täällä avajaisista asti ja saanut aina erinomaista, ammattimaista palvelua hyvään hintaan. Vahvasti suosittelen.',
  },
  {
    author: 'Joonas Rouhiainen',
    text: 'Hyvä hiustenleikkaus hyvään hintaan – yksi suosikeistani Helsingissä hinta-laatu-suhteen osalta.',
  },
  {
    author: 'Joel Eklöv',
    text: 'Paras miestenparturi, jossa olen koskaan käynyt. Tulen tänne poikani kanssa jatkossakin.',
  },
  {
    author: 'Joona Kuuramaa',
    text: 'Pitkät hiukseni suoristettiin hetkessä. Olen erittäin tyytyväinen hintaan, laatuun ja nopeuteen.',
  },
  {
    author: 'Niklas Tilli',
    text: 'Ystävällistä ja laadukasta palvelua – olen ollut vakioasiakas jo useita vuosia.',
  },
  {
    author: 'J-P Ristimaki appi',
    text: 'Loistava paikallinen parturi, osaavat tyypit ja nopea palvelu. Käyttäkää paikallisia palveluita.',
  },
  {
    author: 'Teemu Lehtonen',
    text: 'Loistavaa ja nopeaa ammattimaista palvelua joka kerta. Suosittelen ehdottomasti käymään!',
  },
  {
    author: 'Lauri Mattila',
    text: 'Loistava asiakaspalvelu, mukava henkilökunta – on hyvä olo, kun hiukset saa ammattimaisesti kuntoon.',
  },
  {
    author: 'Nikolai Laur',
    text: 'Mukava ja kodikas paikka, jossa voi leikkauttaa hiukset ja siistittää parta samalla kertaa.',
  },
  {
    author: 'Noksuboy',
    text: 'Paras parturi, jossa olen koskaan käynyt – mukava liike ja tunnelma.',
  },
  {
    author: 'Sakari Kervinen',
    text: 'Edullinen ja nopea palvelu. Olen käynyt täällä jo vuosia.',
  },
  {
    author: 'Vesa Pöyhönen',
    text: 'Kävin positiivisten arvostelujen innoittamana, ja ne olivat täysin ansaittuja. Vaikka annoin Memolle melko epämääräiset ohjeet hiuksilleni ja parralleni, hän ymmärsi täsmälleen mitä halusin ja lopputulos oli upea. Loistavaa palvelua, erinomainen tarkkuus yksityiskohdissa ja tyyli, joka sopi minulle täydellisesti. Hinta-laatu-suhde on luultavasti paras koko kaupungissa.',
  },
  {
    author: 'Hamid Alo',
    text: 'Todella ammattimainen parturi ja erinomaista palvelua! Leikkaus oli juuri sellainen kuin halusin, ja tunnelma oli rento ja ystävällinen. Asiakastyytyväisyys on täällä etusijalla. Suosittelen lämpimästi kaikille, jotka etsivät laadukasta miestenparturia. Tulen ehdottomasti takaisin!',
  },
  {
    author: 'Ville Arvola',
    text: 'Todella taitava parturi ja odotukset ylittänyt leikkaus tekivät tästä ehdottomasti PARHAAN PAIKAN Espoossa hiustenleikkauksia ajatellen. Erittäin tarkat tulokset. Suosittelen ehdottomasti käymään – hinnat ovat enemmän kuin kohtuulliset.',
  },
  {
    author: 'Abdullh Osman',
    text: 'Tulin tänne hiustenleikkaukseen ja sain erinomaista palvelua ja todella ystävällistä kohtelua. Suosittelen tätä kaikille tällä alueella.',
  },
  {
    author: 'Giovanni Azzaretti',
    text: 'Pelastaa elämäni täällä Helsingissä. Alueen paras parturi. Leikkauksen jälkeen ei tarvitse edes suihkussa käydä, koska tulos on jo täydellinen.',
  },
  {
    author: 'Ashenca Gunarathna',
    text: 'Loistava kokemus Damask Parturi Kannelmäessä. Khalil teki erinomaisen työn hiustenleikkauksessani. Hän oli ammattimainen, ystävällinen ja kuunteli tarkkaan mitä halusin. Lopputulos oli siisti ja juuri sellainen kuin kuvittelin. Liike oli viihtyisä ja hyvin hoidettu. Olen erittäin tyytyväinen ja tulen ehdottomasti takaisin. Vahvasti suosittelen!',
  },
  {
    author: 'Timo Tervo',
    text: 'Käynyt täällä useita vuosia, koska ajanvarauksen kanssa ei tarvitse vaivata päätään ja laatu on hyvää. Parkkipaikka on lähellä. Jos joutuu odottamaan hetken, papukaijan rupattelu ja hierontatuoli auttavat ajan kuluttamisessa.',
  },
  {
    author: 'Talaat Mukhlif',
    text: 'Parturi on erinomainen. Palvelu on laadukasta ja ammattimaista, ja parturit ovat todella osaavia ja ystävällisiä. Suosittelen lämpimästi!',
  },
  {
    author: 'Matti Lehtonen',
    text: 'Erinomainen parturiliike. Ystävällinen henkilökunta, leikkaukset ovat nopeita ja aina toiveiden mukaisia. Myös edullinen. Suositeltu!',
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

export default function Reviews() {
  const { lang } = useLanguage()

  const reviews = lang === 'fi' ? reviewsFi : reviewsEn
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
        .marquee-left {
          animation: marquee-left 220s linear infinite;
        }
        @media (min-width: 640px) {
          .marquee-left {
            animation-duration: 140s;
          }
        }
        .marquee-left:hover {
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

      <div className="flex overflow-hidden">
        <div className="marquee-left flex gap-4" style={{ width: 'max-content' }}>
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
