import { DefaultImageType } from "./default-img-type"

export type DefaultVideoType = {
	alt: string
	poster: DefaultImageType
	shadow: boolean
	caption: string
	asset: {
		_ref: string
		_type: string
		url: string
		playbackId: string
	}
}