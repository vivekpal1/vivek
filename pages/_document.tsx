import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="keywords" content="Vivek Pal, vivek, web developer, create websites, JavaScript" />
				<meta name="author" content="Vivek Pal" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
