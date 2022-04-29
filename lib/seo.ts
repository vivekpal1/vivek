import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Vivek Pal';
	const description = "Hey 👋 This is Vivek Pal, a Web Developer. I love to build things and solve problems. I am currently working on some good open source projects. You can visit my projects page.";

	return {
		title,
		description,
		canonical: `https://vivekpal.in/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'Vivek Pal',
			url: `https://vivekpal.in/${router.asPath}`,
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
