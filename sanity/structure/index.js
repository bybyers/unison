

import Global from './global-structure'
import Navigation from './navigation-structure'
import Page from './page-structure'

export const deskStructure = (S, context) => {
	return S.list()
		.title('Content')
		.items([
			Page(S),
			Global(S, context),
			Navigation(S),
		])
}
