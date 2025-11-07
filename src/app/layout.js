
export const metadataBase = new URL('https://newmankahlon.org');
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'newman Kahlon Foundation - Creating Hope, Building Futures',
  description: 'newman Kahlon Foundation is dedicated to transforming lives through sustainable community development, education, healthcare access, and emergency relief initiatives worldwide.',
  keywords: 'newman Kahlon Foundation, charity, nonprofit, community development, education support, healthcare access, emergency relief, donation, volunteer, fundraising',
  robots: 'index, follow',
  openGraph: {
    title: 'newman Kahlon Foundation - Creating Hope, Building Futures',
    description: 'Transforming lives through sustainable community development, education, and healthcare initiatives',
    url: 'https://newmankahlon.org',
    siteName: 'newman Kahlon Foundation',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'newman Kahlon Foundation - Making a Difference',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'newman Kahlon Foundation - Creating Hope, Building Futures',
    description: 'Transforming lives through sustainable community development',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <head>
        {/* Brand Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              "name": "newman Kahlon Foundation",
              "alternateName": "NK Foundation",
              "url": "https://newmankahlon.org",
              "logo": "https://newmankahlon.org/logo.png",
              "description": "Dedicated to transforming lives through sustainable community development, education, and healthcare initiatives",
              "foundingDate": "2010",
              "founder": {
                "@type": "Person",
                "name": "newman Kahlon"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Hope Avenue",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-HELP",
                "contactType": "customer service",
                "email": "contact@newmankahlon.org",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/newmankahlonfoundation",
                "https://www.twitter.com/newmankahlon",
                "https://www.instagram.com/newmankahlon",
                "https://www.linkedin.com/company/newman-kahlon-foundation"
              ],
              "knowsAbout": [
                "Community Development",
                "Education Support",
                "Healthcare Access",
                "Emergency Relief",
                "Nonprofit Management"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Global"
              },
              "taxID": "12-3456789",
              "nonprofitStatus": "Nonprofit501c3"
            }),
          }}
        />
        
        {/* Additional Schema for Charity Work */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "newman Kahlon Foundation",
              "url": "https://newmankahlon.org",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://newmankahlon.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Font Awesome for Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/path/to/script.js" as="script" />


        {/* Canonical URL */}
        <link rel="canonical" href="https://newmankahlon.org" />

        {/* Additional Meta Tags for Better SEO */}
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Verification tags (you can add these later) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>
      <body className="hide-scrollbar">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Structured Data for Donate Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DonateAction",
              "name": "Donate to newman Kahlon Foundation",
              "description": "Support our mission to transform lives through education, healthcare, and community development",
              "url": "https://newmankahlon.org/donate",
              "recipient": {
                "@type": "NonprofitOrganization",
                "name": "newman Kahlon Foundation",
                "url": "https://newmankahlon.org"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}