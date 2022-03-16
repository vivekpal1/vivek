import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Vivek Pal';
	const description = "Hey 👋 This is Vivek Pal, a Web Developer";

	return {
		title,
		description,
		canonical: `https://vivekpal.verce.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Vivek Pal',
			url: `https://vivekpal.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@vivekpal_',
			site: '@vivekpal_',
		},
		...props,
	};
}
