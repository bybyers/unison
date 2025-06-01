import { LinkIcon } from '@sanity/icons'

const Navigation = S =>
  S.documentTypeListItem('navigation')
    .title('Navigation')
    .icon(LinkIcon)
    .child(
      S.editor()
        .id('navigation')
        .schemaType('navigation')
        .documentId('navigation')
    )

export default Navigation