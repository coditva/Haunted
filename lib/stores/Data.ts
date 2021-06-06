const BASE_URL = process.env.GHOST_URL || 'example.com';
const KEY = process.env.CONTENT_KEY || 'content-key';

export default class Data {
  static async fetch(path: string) {
    const url = `https://${BASE_URL}/ghost/api/v3${path}?key=${KEY}`;
    const response = await fetch(url);

    return response.json();
  }
}
