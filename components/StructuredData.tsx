export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://damask.fi/#organization',
        name: 'Damask Parturi',
        alternateName: 'Damask Barber Shop',
        url: 'https://damask.fi',
        logo: { '@type': 'ImageObject', url: 'https://damask.fi/logo.png' },
        image: 'https://damask.fi/staff.jpg',
        foundingDate: '2016',
        description:
          'Ammattitaitoinen parturi Helsingissä, Vantaalla ja Espoossa. Kurdialaisperhe perusti ensimmäisen liikkeen Kannelmäkeen vuonna 2016. Tänään viisi toimipistettä pääkaupunkiseudulla.',
        areaServed: ['Helsinki', 'Vantaa', 'Espoo'],
        knowsLanguage: ['fi', 'en', 'ar', 'ku'],
        sameAs: [
          'https://www.facebook.com/damaskparturi',
          'https://www.instagram.com/damaskparturi',
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://damask.fi/#kannelmaki',
        name: 'Damask Parturi Kannelmäki',
        parentOrganization: { '@id': 'https://damask.fi/#organization' },
        url: 'https://damask.fi/locations',
        image: 'https://damask.fi/staff.jpg',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        telephone: '+358452270130',
        email: 'kannelmaki@damask.fi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kantelettarenkuja 1',
          addressLocality: 'Helsinki',
          postalCode: '00420',
          addressCountry: 'FI',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://damask.fi/#kallio',
        name: 'Damask Parturi Kallio',
        parentOrganization: { '@id': 'https://damask.fi/#organization' },
        url: 'https://damask.fi/locations',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        telephone: '+358403240039',
        email: 'kallio@damask.fi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Vaasankatu 4',
          addressLocality: 'Helsinki',
          postalCode: '00500',
          addressCountry: 'FI',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://damask.fi/#kruunuvuorenranta',
        name: 'Damask Parturi Kruunuvuorenranta',
        parentOrganization: { '@id': 'https://damask.fi/#organization' },
        url: 'https://damask.fi/locations',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        telephone: '+358505899878',
        email: 'kruunuvuorenranta@damask.fi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Haakoninlahdenkatu 1',
          addressLocality: 'Helsinki',
          postalCode: '00590',
          addressCountry: 'FI',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://damask.fi/#kivisto',
        name: 'Damask Parturi Kivistö',
        parentOrganization: { '@id': 'https://damask.fi/#organization' },
        url: 'https://damask.fi/locations',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        telephone: '+358407587759',
        email: 'kivisto@damask.fi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Safirikuja 3',
          addressLocality: 'Vantaa',
          postalCode: '01700',
          addressCountry: 'FI',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'HairSalon',
        '@id': 'https://damask.fi/#otaniemi',
        name: 'Damask Parturi Otaniemi',
        parentOrganization: { '@id': 'https://damask.fi/#organization' },
        url: 'https://damask.fi/locations',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        telephone: '+358408285660',
        email: 'otaniemi@damask.fi',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Otaniementie 12',
          addressLocality: 'Espoo',
          postalCode: '02150',
          addressCountry: 'FI',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Missä Damask-parturit sijaitsevat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Damaskilla on viisi toimipistettä: Kannelmäki (Kantelettarenkuja 1, Helsinki), Kallio (Vaasankatu 4, Helsinki), Kruunuvuorenranta (Haakoninlahdenkatu 1, Helsinki), Kivistö (Safirikuja 3, Vantaa) ja Otaniemi (Otaniementie 12, Espoo).',
            },
          },
          {
            '@type': 'Question',
            name: 'Where are the Damask barbershops located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Damask has five locations: Kannelmäki (Kantelettarenkuja 1, Helsinki), Kallio (Vaasankatu 4, Helsinki), Kruunuvuorenranta (Haakoninlahdenkatu 1, Helsinki), Kivistö (Safirikuja 3, Vantaa), and Otaniemi (Otaniementie 12, Espoo).',
            },
          },
          {
            '@type': 'Question',
            name: 'Milloin Damask-parturit ovat auki?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kaikki Damask-toimipisteet ovat auki maanantaista perjantaihin klo 10–19, lauantaisin klo 10–18 ja sunnuntaisin klo 12–18.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the opening hours of Damask barbershops?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All Damask locations are open Monday to Friday 10:00–19:00, Saturday 10:00–18:00, and Sunday 12:00–18:00.',
            },
          },
          {
            '@type': 'Question',
            name: 'Paljonko hiustenleikkaus maksaa Damaskilla?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hiustenleikkaus maksaa Damaskilla alkaen 25 €. Mallinmuutosleikkaus alkaen 30 €. Lasten hiustenleikkaus (alle 12-vuotiaat) on 20 €. Kaikki hinnat sisältävät ALV:n.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a haircut cost at Damask?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A haircut at Damask starts from €25. Style change cuts start from €30. Children's haircuts (under 12) are €20. All prices include VAT.",
            },
          },
          {
            '@type': 'Question',
            name: 'Voinko tulla ilman ajanvarausta Damask-parturiin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kyllä, Damask ottaa asiakkaita myös ilman ajanvarausta. Väripalveluihin – kuten hiusten värjäykseen ja permanenttiin – suosittelemme kuitenkin varaamaan ajan etukäteen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I walk in to Damask without an appointment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, walk-ins are welcome at all Damask locations. Booking in advance is recommended for color services such as hair coloring and perms.',
            },
          },
          {
            '@type': 'Question',
            name: 'Tarjoaako Damask naisten hiuspalveluja?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kyllä. Naisten palveluja on saatavilla Otaniemen toimipisteessä. Palveluihin kuuluvat kampaamoleikkaus (alkaen 40 €), hiusten värjäys (alkaen 99 €), keratiinisuoristus (alkaen 99 €) ja kihartaminen (alkaen 149 €).',
            },
          },
          {
            '@type': 'Question',
            name: "Does Damask offer women's hair services?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes. Women's services are available at the Otaniemi location. Services include women's haircut from €40, hair coloring from €99, keratin straightening from €99, and hair curling from €149.",
            },
          },
          {
            '@type': 'Question',
            name: 'Kuka omistaa Damask-parturin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Damask on kurdialaisperhe Syyriasta perustama perheyhtiö. Saad, perheen vanhin poika, muutti Suomeen vuonna 2009 ja avasi ensimmäisen Damask-liikkeen Kannelmäkeen vuonna 2016. Perhe on harjoittanut parturityötä vuodesta 1995.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns Damask Barber Shop?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Damask is a family business founded by a Kurdish family from Syria. Saad, the eldest son, moved to Finland in 2009 and opened the first Damask location in Kannelmäki in 2016. The family has been in the barbering profession since 1995.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
