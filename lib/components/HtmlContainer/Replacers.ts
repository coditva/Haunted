import type { Element } from 'domhandler/lib/node';

import LinkReplacer from './LinkReplacer';
import ImageReplacer from './ImageReplacer';

interface Replacer {
  canReplace: (node: Element) => boolean
  replace: (node: Element) => JSX.Element | null
}

const replacers: Array<Replacer> = [
  LinkReplacer,
  ImageReplacer,
];

export default class Replacers {
  static get(node: Element): Replacer | undefined {
    return replacers.find((replacer) => replacer.canReplace(node));
  }
}
