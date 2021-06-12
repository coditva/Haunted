import config from 'config';

export default class Data {
  static async fetch(path: string) {
    const url = `https://${config.ghost.baseUrl}/ghost/api/v3${path}?key=${config.ghost.contentKey}`;
    const response = await fetch(url);

    return response.json();
  }
}
