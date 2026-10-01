/**
 * Photography manifest.
 *
 * Every photograph below was resolved against the Unsplash API and verified to
 * return 200 before it was written here. Unsplash+ ("premium_photo") assets are
 * deliberately excluded - they carry a separate licence unsuitable for a
 * commercial site. Where possible the selection favours images whose Unsplash
 * location metadata places them on Lake Kariba, the Zambezi or in Zimbabwe;
 * those are marked with `place`.
 *
 * `slug` is the CDN path segment. `credit` is kept alongside so an attributions
 * page (or a CMS import) can be generated from this single source.
 */

const CDN = 'https://images.unsplash.com/';

export const IMAGES = {
  hero: {
    slug: 'photo-1598338332181-c7a78afa1198',
    credit: 'Sean Peter',
    handle: 'sp003',
    place: 'Zambezi River',
    tone: '#d9a673',
    alt: 'Golden hour on the Zambezi, riverbank trees in silhouette against an amber sky reflected on still water.',
  },
  intro: {
    slug: 'photo-1649164797576-5f6b8b1e7307',
    credit: 'Little Nature',
    handle: 'littlenaturelove',
    place: 'Kariba, Zimbabwe',
    tone: '#a6a6c0',
    alt: 'Three elephants grazing on the Kariba shoreline with the Matusadona escarpment rising across the lake behind them.',
  },
  fishing: {
    slug: 'photo-1755870344289-00ac1db1b144',
    credit: 'Chris Riggs',
    handle: 'bigrig',
    tone: '#c08c59',
    alt: 'Two anglers standing in a small boat, silhouetted on flat water in the amber haze of first light.',
  },
  safari: {
    slug: 'photo-1720663664786-02d8ee717c33',
    credit: 'Omoniyi David',
    handle: 'mocream_coffee',
    place: 'Kariba, Zimbabwe',
    tone: '#f3d973',
    alt: 'Two elephants walking through long grass at Kariba, lit warm gold by the late afternoon sun.',
  },
  cruise: {
    slug: 'photo-1633363593895-9249c144db6f',
    credit: 'Jonathan Hunt',
    handle: 'jothhunt',
    place: 'Zambezi River',
    tone: '#404040',
    alt: 'A small cruise boat crossing the wide Zambezi as the sun drops to the treeline, light streaking across the water.',
  },
  charter: {
    slug: 'photo-1708471781705-4f8c2adc24e1',
    credit: 'Erik Adair',
    handle: 'erik_ada',
    place: 'Okavango Delta, Botswana',
    tone: '#40260c',
    alt: 'A single tree silhouetted on a far shoreline beneath a low sun, its light reflected in a long column across calm water.',
  },
  // The drowned forest - Kariba's defining sight, and the anchor for this site.
  featured: {
    slug: 'photo-1687506327775-64fe4d56e8dd',
    credit: 'Samuel Ngwarai',
    handle: 'inspired_pup',
    place: 'Lake Kariba, Kariba, Zimbabwe',
    tone: '#8c8c8c',
    alt: 'A bare petrified tree standing alone in the mirror-still shallows of Lake Kariba, part of the forest drowned when the valley was flooded.',
  },
  wilderness: {
    slug: 'photo-1488158302608-a31885ac02ff',
    credit: 'Christine Donaldson',
    handle: 'christineashleydonaldson',
    place: 'Hwange National Park, Zimbabwe',
    tone: '#c0c0c0',
    alt: 'A herd of elephants gathered along the edge of a wide waterhole under a pale, dust-softened sky.',
  },
  hospitalityMain: {
    slug: 'photo-1706611114394-2e78c139acdd',
    credit: 'Ultimate Safaris Namibia',
    handle: 'ultimate_safaris_namibia',
    tone: '#f3f3f3',
    alt: 'Two guests sitting up in bed with morning coffee, looking out from an open-fronted suite across an empty valley.',
  },
  hospitalitySuite: {
    slug: 'photo-1706622618518-7e7c4b99aa1a',
    credit: 'Ultimate Safaris Namibia',
    handle: 'ultimate_safaris_namibia',
    tone: '#8c8c8c',
    alt: 'A tented suite with a curved timber ceiling opening onto a private deck and an uninterrupted view of the wilderness.',
  },
  hospitalityDetail: {
    slug: 'photo-1740830589603-b300d7c81f73',
    credit: 'Acacia Collections',
    handle: 'acaciamarketing',
    tone: '#a68c59',
    alt: 'Woven cane armchairs and a low timber table inside a canvas suite, with the bush visible through the open front.',
  },
  stories: {
    slug: 'photo-1782529651879-75f8c30e464f',
    credit: 'Jameson Berrios',
    handle: 'simpoge',
    tone: '#262626',
    alt: 'A couple leaning into one another on the open deck of a boat, backs to the camera, watching a low golden sun.',
  },
  journalGuide: {
    slug: 'photo-1598338350106-fa81c6aeb6f0',
    credit: 'Sean Peter',
    handle: 'sp003',
    place: 'Zambezi River',
    tone: '#f37326',
    alt: 'The sun setting behind a long ridge of hills across the Zambezi, the whole sky and water burning orange.',
  },
  journalSeason: {
    slug: 'photo-1781039869305-c9107ff58836',
    credit: 'Rafael Peier',
    handle: 'rafaelpeier',
    tone: '#594026',
    alt: 'Dry bushland of bare thorn trees and red earth, backlit by a low sun at the end of the dry season.',
  },
  journalFishing: {
    slug: 'photo-1761539808561-54353d10a94a',
    credit: 'Lahiru Deshan',
    handle: 'lahiru_deshan',
    tone: '#f38c40',
    alt: 'Two anglers working a small boat on wide open water, silhouetted against a low sun and a distant treeline.',
  },
  finale: {
    slug: 'photo-1727775841494-537fc7651c42',
    credit: 'JUNGLE Websites & Branding',
    handle: 'junglewebsites',
    place: 'Shamva, Zimbabwe',
    tone: '#734040',
    alt: 'A dramatic Zimbabwean sunset over a calm lake, banked cloud lit purple and gold and mirrored on the water.',
  },

  /* --- Gallery -------------------------------------------------------- */
  galHippo: {
    slug: 'photo-1591786232470-1fd2adbe6b42',
    credit: 'Ansie Potgieter',
    handle: 'ansiep',
    place: 'Zambezi River',
    tone: '#8c8c73',
    alt: 'A hippo surfacing among water lilies in the Zambezi, only its eyes and back above the surface.',
  },
  galEagle: {
    slug: 'photo-1753199135562-3eef1c309aa1',
    credit: 'Gerhard Venter',
    handle: 'gforce_',
    place: 'Lake Kariba, Kariba, Zimbabwe',
    tone: '#8cc0f3',
    alt: 'An African fish eagle in flight low over Lake Kariba, wings fully extended.',
  },
  galCrossing: {
    slug: 'photo-1533631278779-d722ded4c7df',
    credit: 'Nicole Olwagen',
    handle: 'nicoleoh_',
    place: 'Kayube, Zambezi River, Livingstone, Zambia',
    tone: '#404026',
    alt: 'An elephant wading chest-deep across the Zambezi in warm evening light, riverine forest behind.',
  },
  galHerd: {
    slug: 'photo-1635097380165-1b35bf9a1dc4',
    credit: 'Beauty van Stam',
    handle: 'beauty_van_stam',
    place: 'Zimbabwe',
    tone: '#40260c',
    alt: 'A herd of elephants walking away down a dirt track through Zimbabwean bush.',
  },
  galLounge: {
    slug: 'photo-1689918060172-ec2c1d80ccef',
    credit: 'Ultimate Safaris Namibia',
    handle: 'ultimate_safaris_namibia',
    tone: '#8c7359',
    alt: 'A safari lounge with a curved timber roof, tan leather chairs and an open deck beyond.',
  },
  galDusk: {
    slug: 'photo-1559303971-79e61ad9750d',
    credit: 'Charl Durand',
    handle: 'charl_durand',
    place: 'Kruger National Park, South Africa',
    tone: '#26260c',
    alt: 'A herd of elephants standing at the edge of dark water at dusk.',
  },
};

/** Widths generated for srcset. The CDN resizes on demand. */
const WIDTHS = [640, 1024, 1600, 2400];

const url = (slug, w, q) => `${CDN}${slug}?auto=format&fit=crop&w=${w}&q=${q}`;

/**
 * Build the src/srcSet pair for an image entry.
 * @param {object} image an entry from IMAGES
 * @param {number} [q] JPEG quality; hero art is worth a couple of points more
 */
export function srcFor(image, q = 74) {
  return {
    src: url(image.slug, 1600, q),
    srcSet: WIDTHS.map((w) => `${url(image.slug, w, q)} ${w}w`).join(', '),
  };
}

/** Attribution data, so a credits page can be generated from one source. */
export const CREDITS = Object.values(IMAGES).map((i) => ({
  credit: i.credit,
  handle: i.handle,
  place: i.place ?? null,
}));
