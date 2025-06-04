'use client'


'use client'
import { ReactNode } from 'react'

// blocks
import HeroBlock from '@/components/hero-block'
import CtaBlock from '@/components/cta-block'
import TextBlock from '@/components/text-block'
import ImageBlock from '@/components/image-block'

interface BodySerializers {
	[key: string]: {
		component: React.FC<any>
		wrapper?: React.FC<{ children: ReactNode }>
		args?: any
	}
}

const bodySerializers: BodySerializers = {
	heroBlock: {
		component: HeroBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
	ctaBlock: {
		component: CtaBlock,
		wrapper: ({ children }) => <>{children}</>,
	},
  textBlock: {
    component: TextBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
  imageBlock: {
    component: ImageBlock,
    wrapper: ({ children }) => <>{children}</>,
  },
}

function getSerializers() {
	const res: { [key: string]: React.FC<any> } = {}
	for (const [key, value] of Object.entries(bodySerializers)) {
		if (key === 'block') continue
		const Component = value.component
		res[key] = props => <Component {...props.node} />
	}
	return res
}

export const blockSerializers = getSerializers()

interface ComponentProps {
	body: {
		_key: string
		_type: string
	}[]
}

const Sections: React.FC<ComponentProps> = ({ body }) => {
	if (!body) return <></>
	return body.map((item, index) => {
		const type = item._type
		const serializer = bodySerializers[type]
		const Component = serializer?.component
		const args = serializer?.args
		const Wrapper = serializer?.wrapper

		if (!Component || !serializer)
			throw new Error(`No serializer implemented for body object: ${type}`)

		return Wrapper ? (
			<Wrapper key={item._key}>
				<Component {...item} {...args} componentIndex={index} />
			</Wrapper>
		) : (
			<Component key={item._key} {...item} {...args} componentIndex={index} />
		)
	})
}

export default Sections
