const BASE_URL = process.env.API_BASE_URL;
const KEY = process.env.CONTENT_KEY;

export default class Data {
  static get path(): string {
    throw new Error('"path" not implemented');
  }

  private static get URL() {
    return `${BASE_URL}${this.path}?key=${KEY}`;
  }

  static async fetch() {
    const response = await fetch(this.URL);

    return response.json();
  }
}
