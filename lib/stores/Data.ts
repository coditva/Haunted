const BASE_URL = process.env.API_BASE_URL;
const KEY = process.env.CONTENT_KEY;

export default class Data {
  static async fetch(path: string) {
    const url = `${BASE_URL}${path}?key=${KEY}`;
    const response = await fetch(url);

    return response.json();
  }
}
