import Data from './Data';

export type NavigationItem = {
  label: string
  url: string
};

export type SiteType = {
  title: string
  description: string
  logo?: string
  cover_image?: string
  url: string
  navigation: Array<NavigationItem>
  secondary_navigation: Array<NavigationItem>
};

export default class Site extends Data {
  static readonly path = '/content/settings';

  static async get(): Promise<SiteType> {
    const { settings }: { settings: SiteType } = await super.fetch();

    return settings;
  }
}
