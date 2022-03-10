import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="keywords" content="Vivek Pal, vivek, web developer, create websites, JavaScript" />
				<meta name="author" content="Vivek Pal" />
				<link rel="icon" type="image/png" href="/favicon.png" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7873717544167301" />
    <script dangerouslySetInnerHTML={{
        __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-7873717544167301",
            enable_page_level_ads: true
            });
            `,
            }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
