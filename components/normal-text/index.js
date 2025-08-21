'use client'

import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import SanityImage from '../sanity-image'


const NormalTextComponents = {
	block: {
		small: ({ children }) => <p className='!text-xl'>{children}</p>,
	},
	marks: {
		simpleLink: ({ value, children }) => {
			const data = value.simpleLink

			return (
				<a
					href={data.href}
					target={data.blank ? '_blank' : '_self'}
					rel={data.doFollow ? 'external' : 'noopener noreferrer'}
				>
					{children}
				</a>
			)
		},
		routeLink: ({ value, children }) => {
			const data = value

			if (data.pageRoute) {
				return (
					<Link
						href={data.pageRoute.slug.current}
						target={data.blank ? '_blank' : '_self'}
					>
						{children}
					</Link>
				)
			} else if (data.route) {
				return (
					<Link href={data.route} target={data.blank ? '_blank' : '_self'}>
						{children}
					</Link>
				)
			} else {
				return (
					<a
						href={data.link.link}
						target={data.blank ? '_blank' : '_self'}
						rel={data.link.nofollow ? 'noopener noreferrer' : 'external'}
					>
						{children}
					</a>
				)
			}
		},
		center: ({ children }) => {
			return <div className='text-center'>{children}</div>
		},
	},
	types: {
		defaultImage: ({ value }) => {
			const { alt, asset } = value
			return (
				<div className='flex w-full justify-center py-10'>
					<div
						className={`flex w-full max-w-3xl justify-center px-5 align-middle`}
					>
						<div className='w-full'>
							<SanityImage
								image={asset}
								focalPoint={asset.hotspot}
								alt={alt}
								width={asset.metadata.dimensions.width}
								height={asset.metadata.dimensions.height}
							/>
						</div>
					</div>
				</div>
			)
		},
	},
}

const NormalText = ({ content }) => {
	return <PortableText value={content} components={NormalTextComponents} />
}

export default NormalText
