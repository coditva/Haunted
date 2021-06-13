import type { Element } from 'domhandler/lib/node';

import LinkReplacer from './LinkReplacer';

interface Replacer {
  canReplace: (node: Element) => boolean
  replace: (node: Element) => JSX.Element | null
}

const replacers: Array<Replacer> = [
  LinkReplacer,
];

export default class Replacers {
  static get(node: Element): Replacer | undefined {
    return replacers.find((replacer) => replacer.canReplace(node));
  }
}
