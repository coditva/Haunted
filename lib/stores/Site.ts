import Data from './Data';

export type SiteType = {
  title: string
  description: string
  logo?: string
  cover_image?: string
  url: string
};

export default class Site extends Data {
  static readonly path = '/content/settings';

  static async get(): Promise<SiteType> {
    const { settings }: { settings: SiteType } = await super.fetch();

    return settings;
  }
}
