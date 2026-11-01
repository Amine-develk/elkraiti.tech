import { getAllPosts } from "./blog";

export interface FeedConfig {
  title: string;
  description: string;
  origin: string;
  author: {
    name: string;
    email: string;
    url?: string;
  };
}

export function getFeedData() {
  const posts = getAllPosts();
  const config: FeedConfig = {
    title: "kube.io",
    description: "Articles and notes",
    origin: "https://elkraiti.tech",
    author: {
      name: "amine",
      email: "elkraitia@gmail.com",
      url: "https://elkraiti.tech",
    },
  };

  return { posts, config };
}

export function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
