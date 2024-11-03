export type NodeType = "heading" | "paragraph" | "text" | "upload" | "root";
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Direction = ("ltr" | "rtl") | null;
export type Format =
  | "left"
  | "start"
  | "center"
  | "right"
  | "end"
  | "justify"
  | "";

interface BaseNode {
  [k: string]: unknown;
  type: NodeType;
  version: number;
  indent: number;
  direction: Direction;
  children?: RichTextNode[];
}

export type RootNode = BaseNode & {
  type: "root";
  format: Format;
};

export interface RichText {
  root: RootNode;
  [k: string]: unknown;
}

export type HeadingNode = BaseNode & {
  type: "heading";
  tag: HeadingTag;
};

export type ParagraphNode = BaseNode & {
  type: "paragraph";
};

export type TextNode = BaseNode & {
  type: "text";
  text: string;
  format: number;
};

export type UploadNode = BaseNode & {
  type: "upload";
  text: string;
  value: {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    createdAt: string;
    updatedAt: string;
    url: string;
  };
};

export type RichTextNode =
  | HeadingNode
  | ParagraphNode
  | UploadNode
  | RootNode
  | TextNode;
