import { groq } from 'next-sanity'
import { routeQuery } from '../objects/route-query'

export const navQuery = groq`
  *[_type == "navigation" && title == "header"][0] {
    title,
    items[] {
      ${routeQuery},
      items[] {
        "parentTitle": parentRoute.title,
        ${routeQuery},
        parentRoute {
          ${routeQuery},
        },
        items[] {
          ${routeQuery},
        }
      }
    }
  }
`