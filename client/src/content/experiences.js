import { IMAGES } from '@/lib/images.js';

/**
 * Signature experiences.
 *
 * These are ordered by the hour they happen rather than numbered 01-04. Four
 * experiences are not a sequence, so 01/02/03 would be decoration - but the
 * hour is real information on a lake whose whole appeal is its light, and it
 * turns the section into a single day on the water. `time` is the marker shown
 * in place of an index.
 */
export const experiences = [
  {
    id: 'tiger-fishing',
    // Must match an option in enquiry.fields exactly, or the preselect is lost.
    enquiryOption: 'Tiger fishing',
    slug: 'tiger-fishing',
    time: '05:40',
    timeNote: 'First light',
    title: 'Tiger Fishing',
    summary: 'World-class fishing for serious anglers.',
    body: 'Tigerfish feed hardest in the first hour of light, before the lake wakes up. Your guide has been reading these drop-offs for twenty years and will put you on them while the water is still glass.',
    cta: 'Explore fishing',
    image: IMAGES.fishing,
  },
  {
    id: 'sunset-safaris',
    // Must match an option in enquiry.fields exactly, or the preselect is lost.
    enquiryOption: 'Sunset safari',
    slug: 'sunset-safaris',
    time: '16:20',
    timeNote: 'The heat breaks',
    title: 'Sunset Safaris',
    summary: 'Golden-hour wildlife and wilderness experiences.',
    body: 'As the day cools, the shoreline fills - elephant herds coming down to drink, buffalo in the shallows. We take the tender in close, cut the engine, and let them carry on as though we were not there.',
    cta: 'Explore safari',
    image: IMAGES.safari,
  },
  {
    id: 'private-cruises',
    // Must match an option in enquiry.fields exactly, or the preselect is lost.
    enquiryOption: 'Private Zambezi cruise',
    slug: 'private-zambezi-cruises',
    time: '18:05',
    timeNote: 'Sundown',
    title: 'Private Zambezi Cruises',
    summary: 'Luxury private boat journeys across Lake Kariba.',
    body: 'The whole boat is yours. Drinks on the upper deck as the Matusadona escarpment turns from copper to deep red, then dinner on the water under a sky with nothing competing against it.',
    cta: 'Explore cruise',
    image: IMAGES.cruise,
  },
  {
    id: 'private-charters',
    // Must match an option in enquiry.fields exactly, or the preselect is lost.
    enquiryOption: 'Private charter',
    slug: 'private-charters',
    time: 'Any hour',
    timeNote: 'Your schedule',
    title: 'Private Charters',
    summary: 'Completely customised journeys designed around the guest.',
    body: 'Some guests want three days of fishing. Some want one perfect evening. Tell us the days you have and who is coming with you, and we will build everything else around that.',
    cta: 'Create your journey',
    image: IMAGES.charter,
  },
];
