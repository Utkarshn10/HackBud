function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
<url>
<loc>https://hack-bud.vercel.app/</loc>
<lastmod>2024-10-14T06:56:38+00:00</lastmod>
</url>
</urlset>`
}

export default function Sitemap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap()

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}
