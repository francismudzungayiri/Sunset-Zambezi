/**
 * Site-wide content. Every string a visitor reads lives in src/content/*, so a
 * headless CMS can replace these modules one-for-one without touching a
 * component.
 */

export const brand = {
  name: 'Melachaite Travel',
  wordmark: 'MELACHAITE TRAVEL',
  tagline: 'Private adventures across Kariba and the Zambezi.',
  legalName: 'Melachaite Travel',
};

export const contact = {
  phoneDisplay: '+263 61 2954 118',
  phoneHref: '+263612954118',
  // WhatsApp deep link. Swap the number when the real line is provisioned.
  whatsapp: 'https://wa.me/263612954118',
  email: 'hello@melachaitetravel.com',
  place: 'Kariba, Zimbabwe',
  address: {
    street: 'Lakeview Road, Kariba Heights',
    locality: 'Kariba',
    region: 'Mashonaland West',
    country: 'ZW',
  },
};

export const nav = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Destinations', href: '#why-kariba' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Kariba • Zimbabwe',
  // The final word is set in italic - the one typographic flourish on the page.
  headline: ['The Zambezi,', 'at its most'],
  headlineAccent: 'extraordinary.',
  supporting:
    'Private safaris, luxury cruises and unforgettable adventures across the wild heart of Zimbabwe.',
  primaryCta: 'Explore Experiences',
  secondaryCta: 'Plan Your Journey',
  scrollCue: 'Scroll to explore',
};

/**
 * Trust strip. Deliberately four short facts, no icons - the restraint is the
 * point. `value` is set in the display face, `label` in tracked small caps.
 */
export const proof = [
  { value: '15+', unit: 'Years', label: 'On this lake' },
  { value: '4.9', unit: '/ 5', label: 'Guest rating' },
  { value: '100%', unit: '', label: 'Tailor-made journeys' },
  { value: 'Kariba', unit: '', label: 'Our home' },
];

export const intro = {
  eyebrow: 'Welcome to Kariba',
  headline: 'Wild Africa.',
  headlineAccent: 'Your way.',
  pullQuote:
    'Kariba is not simply a destination. It is an invitation to slow down, explore deeper and experience Zimbabwe from a different perspective.',
  body: [
    'Melachaite Travel runs a small number of private journeys each season. Our crews were born on this lake. They know which bays stay flat when the wind comes up the gorge, which channels the elephant herds cross at dusk, and which captain to send out with you.',
    'Every boat carries your party alone. Every itinerary is drawn around the way you actually want to travel - not around a departure schedule.',
  ],
  cta: 'Discover our story',
};

export const featured = {
  eyebrow: 'The signature Kariba escape',
  headline: 'Three days.',
  headlineAccent: 'One extraordinary wilderness.',
  description:
    'A private journey across Lake Kariba combining secluded bays, spectacular sunsets, wildlife encounters and exceptional hospitality.',
  facts: [
    { label: 'Duration', value: '3 days / 2 nights' },
    { label: 'From', value: '$2,850 per person' },
    { label: 'Party size', value: '2 – 12 guests' },
  ],
  primaryCta: 'View journey',
  secondaryCta: 'Request private itinerary',
};

/**
 * Why Kariba. Four qualities of the place itself - what a guest is actually
 * buying when they choose this lake over a conventional safari.
 */
export const whyKariba = {
  headline: 'Why Kariba?',
  standfirst:
    'When the valley was dammed in 1958, the Zambezi rose over a mopane forest. The trees never fell. They still stand out of the water, bleached white, and nowhere else on earth looks quite like it.',
  points: [
    {
      id: 'lake',
      title: 'The Lake',
      body: 'One of the largest artificial lakes on earth, stretching 280 kilometres across an extraordinary wilderness landscape.',
    },
    {
      id: 'wildlife',
      title: 'The Wildlife',
      body: 'Elephants, hippos, crocodiles and abundant birdlife along a shoreline that belongs entirely to the Zambezi ecosystem.',
    },
    {
      id: 'silence',
      title: 'The Silence',
      body: 'Vast open water, remote islands and almost no sense of urban life. Most nights, the loudest thing you hear is the water.',
    },
    {
      id: 'light',
      title: 'The Light',
      body: 'Spectacular African sunrises and sunsets, doubled by the lake. Photographers plan entire trips around this hour.',
    },
  ],
};

export const hospitality = {
  eyebrow: 'On board',
  headline: 'Adventure without',
  headlineAccent: 'compromise.',
  message:
    'Every detail is considered - from the route we take to the meal waiting for you at sunset.',
  features: [
    {
      title: 'Private by design',
      body: 'One party per boat. No shared decks, no fixed departures, no strangers at dinner.',
    },
    {
      title: 'Locally hosted',
      body: 'Kariba-born captains and guides who have worked this shoreline their whole lives.',
    },
    {
      title: 'Tailored around you',
      body: 'We build the route after we know how you travel - not before.',
    },
  ],
};

export const finalCta = {
  headline: 'Your Zambezi story',
  headlineAccent: 'starts here.',
  supporting: "Tell us what you imagine. We'll take care of the rest.",
  primaryCta: 'Plan Your Journey',
  secondaryCta: 'Speak to a safari specialist',
};

export const footer = {
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Experiences', href: '#experiences' },
        { label: 'About', href: '#about' },
        { label: 'Journal', href: '#journal' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'FAQs', href: '#faqs' },
        { label: 'Terms', href: '#terms' },
        { label: 'Privacy', href: '#privacy' },
      ],
    },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
};

/** Enquiry form definition. Rendered generically, so fields are CMS-editable. */
export const enquiry = {
  eyebrow: 'Enquire',
  headline: 'Plan your journey',
  standfirst:
    'Tell us roughly what you have in mind. A specialist in Kariba replies within one working day - no call centre, no automated quote.',
  submitLabel: 'Start planning my journey',
  whatsappLabel: 'Or message us on WhatsApp',
  successTitle: 'Enquiry received',
  successBody:
    'Thank you. A Kariba specialist will be in touch within one working day. If it is urgent, WhatsApp reaches us fastest.',
  fields: [
    { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name', width: 'half' },
    { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email', width: 'half' },
    { name: 'phone', label: 'WhatsApp or phone', type: 'tel', required: false, autoComplete: 'tel', width: 'half' },
    { name: 'country', label: 'Country', type: 'text', required: false, autoComplete: 'country-name', width: 'half' },
    { name: 'dates', label: 'Preferred travel dates', type: 'text', required: false, placeholder: 'e.g. late September', width: 'half' },
    { name: 'guests', label: 'Number of guests', type: 'number', required: false, min: 1, max: 40, width: 'half' },
    {
      name: 'interest',
      label: 'Experience of interest',
      type: 'select',
      required: false,
      width: 'half',
      options: [
        'Private Zambezi cruise',
        'Sunset safari',
        'Tiger fishing',
        'Private charter',
        'The Signature Kariba Escape',
        'Not sure yet',
      ],
    },
    {
      name: 'budget',
      label: 'Estimated budget per person',
      type: 'select',
      required: false,
      width: 'half',
      options: [
        'Under $2,000',
        '$2,000 – $4,000',
        '$4,000 – $7,000',
        '$7,000 – $10,000',
        'Over $10,000',
        'Prefer to discuss',
      ],
    },
    {
      name: 'notes',
      label: 'Anything else we should know',
      type: 'textarea',
      required: false,
      width: 'full',
      placeholder: 'Celebrations, dietary needs, mobility, who is travelling…',
    },
  ],
};
