import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        
        <title>Selina Li Daycare | San Leandro, CA</title>
        <meta
          name="description"
          content="Selina Li Daycare (清姨托兒所) - A nurturing home daycare in San Leandro offering quality childcare with Mandarin and Cantonese immersion and homemade nutritious meals."
        />
        <meta
          name="keywords"
          content="daycare, San Leandro, childcare, Chinese immersion, Mandarin, Cantonese, preschool, infant care, toddler care, 清姨托兒所"
        />
        
        <meta property="og:title" content="Selina Li Daycare | San Leandro, CA" />
        <meta
          property="og:description"
          content="A nurturing home daycare in San Leandro offering quality childcare with Mandarin and Cantonese immersion and homemade nutritious meals."
        />
        <meta property="og:type" content="website" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        <ScrollViewStyleReset />
        
        <style dangerouslySetInnerHTML={{ __html: `
          html, body, #root {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #FFF9F0;
          }
          ::-webkit-scrollbar-thumb {
            background: #FF6B6B;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #E85555;
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
