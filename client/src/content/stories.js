import { IMAGES } from '@/lib/images.js';

/**
 * Guest stories. Set as large pull-quotes rather than review cards - a star
 * rating would undercut the register the rest of the page is working in.
 */
export const testimonials = [
  {
    id: 'sarah-james',
    quote:
      'From the first sunset to the final morning, every detail felt effortless. Kariba completely exceeded our expectations.',
    author: 'Sarah & James',
    origin: 'London, United Kingdom',
    trip: 'The Signature Kariba Escape',
  },
  {
    id: 'de-vries',
    quote:
      'We have done a lot of Africa. This was the first time our children put their phones down for three days straight.',
    author: 'The de Vries family',
    origin: 'Utrecht, Netherlands',
    trip: 'Private charter, five nights',
  },
  {
    id: 'm-okonjo',
    quote:
      'I came for the tigerfish and stayed up half the night on deck instead. Nobody warned me about the quiet.',
    author: 'Michael Okonjo',
    origin: 'Lagos, Nigeria',
    trip: 'Tiger fishing expedition',
  },
];

/**
 * Journal. `readingTime` is stored as an integer so a CMS can compute it from
 * body length later without a format migration.
 */
export const journal = [
  {
    id: 'ultimate-guide',
    slug: 'ultimate-guide-to-lake-kariba',
    category: 'Destination',
    readingTime: 9,
    title: 'The Ultimate Guide to Lake Kariba',
    excerpt:
      'How the valley was flooded, why the drowned forest still stands, and what that means for the way you travel here.',
    image: IMAGES.journalGuide,
  },
  {
    id: 'when-to-visit',
    slug: 'when-to-visit-kariba',
    category: 'Planning',
    readingTime: 6,
    title: 'When to Visit Kariba',
    excerpt:
      'The dry season concentrates the game on the shoreline. The green season empties the lake of everyone else. Both are right, for different travellers.',
    image: IMAGES.journalSeason,
  },
  {
    id: 'tiger-fishing-primer',
    slug: 'beginners-guide-to-tiger-fishing',
    category: 'On the water',
    readingTime: 7,
    title: "A Beginner's Guide to Tiger Fishing",
    excerpt:
      'Africa’s hardest-fighting freshwater fish, explained for someone who has never held a rod - tackle, timing and what actually happens when one takes.',
    image: IMAGES.journalFishing,
  },
];

/**
 * Gallery. `span` drives the asymmetric grid: 'wide' takes two columns, 'tall'
 * takes two rows. Kept in content so the rhythm can be re-cut without code.
 */
export const gallery = [
  { id: 'g1', image: IMAGES.galCrossing, span: 'wide' },
  { id: 'g2', image: IMAGES.galEagle, span: 'tall' },
  { id: 'g3', image: IMAGES.galHippo, span: 'normal' },
  { id: 'g4', image: IMAGES.hospitalitySuite, span: 'normal' },
  { id: 'g5', image: IMAGES.galDusk, span: 'wide' },
  { id: 'g6', image: IMAGES.galHerd, span: 'normal' },
  { id: 'g7', image: IMAGES.stories, span: 'normal' },
];
