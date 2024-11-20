import { Story } from "@/types/story";
import { MetadataRoute } from "next";
import { getLocale } from "next-intl/server";

const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = await getLocale();
  const res = await fetch(
    `${contentBaseUrl}/api/stories/?locale=${locale}&draft=false&depth=0`
  );
  const stories = (await res.json()) as { docs: Story[] };
  return stories.docs.map((story) => ({
    url: `https://www.ciroplaste.com/${locale}/explore/${story.id}`,
    lastModified: story.updatedAt,
  }));
}
