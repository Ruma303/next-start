import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/secret", "/admin", "/api/*", "/(auth)/*"],
        },
        sitemap: "http://nostro-dominio.com",
    };
}
