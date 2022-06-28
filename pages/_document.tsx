import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="keywords" content="Vivek Pal, vivek, vivek pal, vivek web, vivek linux, web developer, shastraos, Shastra OS, ShastraOS create websites, JavaScript" />
				<meta name="author" content="Vivek Pal" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				 <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BLC8J28LJB"
        />
	 <script
	 async
	 src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7873717544167301'
	 crossOrigin="anonymous"
	 />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BLC8J28LJB', { page_path: window.location.pathname });
            `,
          }}
        />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
