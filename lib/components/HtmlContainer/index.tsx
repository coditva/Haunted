import parse from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import replacers from 'lib/components/HtmlContainer/Replacers';

import type { HTMLReactParserOptions } from 'html-react-parser';

const htmlParserOptions: HTMLReactParserOptions = {
  // @ts-ignore
  replace: (node: Element) => {
    // @ts-ignore
    if (!node.type !== 'tag') {
      return;
    }

    const replacer = replacers.get(node);

    if (!replacer) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return replacer.replace(node);
  },
};

export default function HtmlContainer({ html }: { html: string }) {
  const parsedHtml = parse(html, htmlParserOptions);

  return (
    <div className='html-container'>
      {parsedHtml}
    </div>
  );
}
