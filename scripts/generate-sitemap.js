const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const path = require('path')

// Define your site's pages
const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/salary-breakdown/', changefreq: 'monthly', priority: 0.9 },
    { url: '/tax-info/', changefreq: 'monthly', priority: 0.9 },
    { url: '/financial-education/', changefreq: 'weekly', priority: 0.8 },
]

async function generateSitemap() {
    const sitemap = new SitemapStream({
        hostname: 'https://salaryfy.io'
    })

    const writeStream = createWriteStream(path.join(__dirname, '..', 'public', 'sitemap.xml'))
    sitemap.pipe(writeStream)

    pages.forEach(page => {
        sitemap.write({
            url: page.url,
            changefreq: page.changefreq,
            priority: page.priority,
            lastmod: new Date().toISOString(),
        })
    })

    sitemap.end()

    return streamToPromise(sitemap)
}

if (require.main === module) {
    generateSitemap()
        .then(() => console.log('✅ Sitemap generated successfully'))
        .catch(err => console.error('❌ Error generating sitemap:', err))
}

module.exports = generateSitemap
