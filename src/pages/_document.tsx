import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="浅野晃一朗,Koichiro Asano,Web開発,フロントエンド,バックエンド,React,Next.js,TypeScript,Python,Django" />
        <meta name="author" content="浅野晃一朗" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Koichiro Asano Portfolio" />
        <meta property="og:image" content="/my_image2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/my_image2.jpg" />
        
        <link rel="canonical" href="https://asano1413.github.io/my-portfolio" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "浅野晃一朗",
              "alternateName": "Koichiro Asano",
              "jobTitle": "Web Developer",
              "url": "https://asano1413.github.io/my-portfolio",
              "image": "https://asano1413.github.io/my-portfolio/my_image2.jpg",
              "sameAs": [
                "https://github.com/asano1413"
              ],
              "knowsAbout": ["Web Development", "React", "Next.js", "TypeScript", "Python", "Django"],
              "alumniOf": "水戸情報ITクリエイター専門学校"
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
