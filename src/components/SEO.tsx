import Head from 'next/head'

interface SEOProps {
    title: string
    description: string
    keywords?: string[]
    canonicalUrl?: string
    ogImage?: string
    noIndex?: boolean
    schemaMarkup?: object
}

export default function SEO({
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage = '/og-image.jpg',
    noIndex = false,
    schemaMarkup
}: SEOProps) {
    const fullTitle = title.includes('Salaryfy.io') ? title : `${title} | Salaryfy.io`

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

            {/* Robots */}
            <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content="website" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Schema.org structured data */}
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            )}
        </Head>
    )
}
