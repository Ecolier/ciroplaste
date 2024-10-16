import { MouseEvent, PropsWithChildren } from "react";

interface Node {
  direction: string;
  format: number;
  type: string;
  indent: number;
  version: number;
  children?: Node[];
}

interface RichTextRendererProps {
  document: {
    root: Node,
  },
  components: {
    heading: (props: {children: React.JSX.Element[]}) => React.JSX.Element,
    paragraph: (props: {children: React.JSX.Element[]}) => React.JSX.Element,
    upload: (props: {url: string, alt: string}) => React.JSX.Element,
  }
}

function RichTextRenderer({ document, components }: RichTextRendererProps) {

  const flatten = (nodes: Node[]) => nodes.flatMap((node, index, arr) => {
    if (node.type === 'upload') {
      return components.upload({url: node.value.url, alt: node.value.alt})
    }
    const children = node.children;
    if (node.type === 'text') {
      if (node.format === 1) {
        return <strong>{node.text}</strong>
      }
      if (node.format === 2) {
        return <em>{node.text}</em>
      }
      if (node.format === 8) {
        return <u>{node.text}</u>
      }
      if (node.format === 4) {
        return <s>{node.text}</s>
      }
      return <>{node.text}</>
    }
    if (children && children.length !== 0) {
      const fragments = flatten(children);
      switch(node.type) {
        case 'heading': return components.heading({children: fragments})
        case 'paragraph': return components.paragraph({children: fragments})
      }
    }
  });

  const elements = flatten(document.root.children)

  return <>{elements}</>;
}

export default RichTextRenderer;
