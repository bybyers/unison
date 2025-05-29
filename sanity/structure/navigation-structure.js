import { LinkIcon } from '@sanity/icons'

const Navigation = S =>
  S.listItem()
    .title('Navigation')
    .icon(LinkIcon)
    .child(
      S.list()
        .title('Navigation')
        .items([
          S.listItem()
            .title('Header Navigation')
            .icon(LinkIcon)
            .child(
              S.editor()
                .id('headerNavigation')
                .schemaType('navigation')
                .documentId('headerNavigation')
            ),
          S.listItem()
            .title('Footer Navigation')
            .icon(LinkIcon)
            .child(
              S.editor()
                .id('footerNavigation')
                .schemaType('navigation')
                .documentId('footerNavigation')
            ),
        ])
    )

export default Navigation