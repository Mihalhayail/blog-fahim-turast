export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  thumbnail?: string;
  contentHtml: string;
  [key: string]: any;
}