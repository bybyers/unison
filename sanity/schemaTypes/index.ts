import { type SchemaTypeDefinition } from 'sanity'

// Documents
import page from './documents/page-schema'
import navigation from './documents/navigation-schema'
import site from './documents/site-schema'

// Components
import sections from './components/page-builder-schema'
import heroBlock from './components/hero-block-schema'
import ctaBlock from './components/cta-block-schema'
import textBlock from './components/text-block-schema'
import imageBlock from './components/image-block-schema'
import seo from './components/seo-schema'
import social from './components/social-schema'

// Objects
import defaultImage from './objects/default-img-schema'
import cta from './objects/cta-schema'
import route from './objects/route-schema'
import simpleText from './objects/simple-text-schema'
import normalText from './objects/normal-text-schema'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    navigation,
    site,

    // Components
    sections,
    heroBlock,
    ctaBlock,
    textBlock,
    imageBlock,
    seo,
    social,

    // Objects
    defaultImage,
    cta,
    route,
    simpleText,
    normalText,

  ],
}
