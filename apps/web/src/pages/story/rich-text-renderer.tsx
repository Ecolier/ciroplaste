import React from "react";
import { RichText, RichTextNode } from "../../types/rich-text-node";

interface Components {
  Heading?: (props: {
    children: JSX.Element[];
    key: number;
    Tag: keyof JSX.IntrinsicElements;
  }) => JSX.Element;
  Paragraph?: (props: { children: JSX.Element[]; key: number }) => JSX.Element;
  Upload?: (props: { url: string; alt: string; key: number }) => JSX.Element;
}

interface RichTextRendererProps {
  document: RichText;
  components: Components;
}

const flatten = (nodes: RichTextNode[], components: Components, _level = 0) =>
  nodes.flatMap((node, index): JSX.Element | undefined => {
    if (node.type === "upload") {
      if (!components.upload) {
        return;
      }
      return components.upload({
        url: node.value.url,
        alt: node.value.alt,
        key: index,
      });
    }
    const children = node.children;
    if (node.type === "text") {
      const key = `${_level}_${index}`;
      if (node.format === 1) {
        return <strong key={key}>{node.text}</strong>;
      }
      if (node.format === 2) {
        return <em key={key}>{node.text}</em>;
      }
      if (node.format === 8) {
        return <u key={key}>{node.text}</u>;
      }
      if (node.format === 4) {
        return <s key={key}>{node.text}</s>;
      }
      return <React.Fragment key={key}>{node.text}</React.Fragment>;
    }
    if (children && children.length !== 0) {
      const fragments = flatten(children, components, _level);
      switch (node.type) {
        case "heading":
          if (!components.Heading) {
            return;
          }
          return components.Heading({
            children: fragments,
            key: index,
            Tag: node.tag,
          });
        case "paragraph":
          if (!components.Paragraph) {
            return;
          }
          return components.Paragraph({ children: fragments, key: index });
      }
    }
    return <React.Fragment key={index}></React.Fragment>;
  });

function RichTextRenderer({ document, components }: RichTextRendererProps) {
  const {
    root: { children },
  } = document;
  if (!children || children.length === 0) {
    return;
  }
  const elements = flatten(children, components).filter(
    (elem) => elem !== undefined,
  );
  return <>{elements}</>;
}

export default RichTextRenderer;
