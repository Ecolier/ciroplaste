import { Media } from './media';
import { Profile } from './profile';

export interface Story {
  id: string;
  title?: string | null;
  subtitle?: string | null;
  callout?: {
    relationTo: 'media';
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
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  author?: {
    relationTo: 'profiles';
    value: string | Profile;
  } | null;
  updatedAt: string;
  createdAt: string;
}