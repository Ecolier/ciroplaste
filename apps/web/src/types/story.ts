import { User } from './user';
import { Media } from './media';

export interface Story {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  callout?: {
    relationTo: "media";
    value: string | Media;
  } | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ("ltr" | "rtl") | null;
      format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  author?: {
    relationTo: "users";
    value: string | User;
  } | null;
  updatedAt: string;
  createdAt: string;
}
