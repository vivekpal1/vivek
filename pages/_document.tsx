import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="keywords" content="Vivek Pal, vivek, vivek pal, vivek web, vivek linux, web developer, shastraos, Shastra OS, ShastraOS create websites, JavaScript" />
				<meta name="author" content="Vivek Pal" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<Script
   id="Adsense-id"
   data-ad-client=ca-pub-7873717544167301"
   async="true"
   strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
