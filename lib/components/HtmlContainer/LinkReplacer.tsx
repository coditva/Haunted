import Link from 'next/link';
import { Element } from 'domhandler/lib/node';
import { attributesToProps, domToReact } from 'html-react-parser';

export default class LinkReplacer {
  static canReplace(node: Element): boolean {
    return node.name === 'a' && Boolean(node.attribs && node.attribs.href);
  }

  static replace(node: Element): JSX.Element | null {
    if (!node.attribs || !node.attribs.href) {
      return null;
    }

    const Node = node.name;

    return (
      <Link href={node.attribs.href}>
        { /* @ts-ignore */ }
        <Node
          {// eslint-disable-line react/jsx-props-no-spreading
            ...attributesToProps(node.attribs)
          }
        >
          {domToReact(node.children)}
        </Node>
      </Link>
    );
  }
}
