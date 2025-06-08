import { MetadataRoute } from 'next';
import posts from '../data/db.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "http://nostro-dominio.com";

  const staticRoutes = ["", "/contact", "/posts", "/posts/[postId]"].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const routes = staticRoutes.map(post => ({
    url: `${baseUrl}/posts/${post.url}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...routes];
}
