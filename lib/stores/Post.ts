import Data from 'lib/stores/Data';

export default class Post extends Data {
  slug: string;

  id: string;

  uuid: string;

  title: string;

  url: string;

  comment_id: string;

  feature_image?: string;

  featured: boolean;

  visibility: string;

  published_at: string;

  excerpt?: string;

  reading_time: number;

  constructor(data: Post) {
    super();

    this.slug = data.slug;
    this.id = data.id;
    this.uuid = data.uuid;
    this.title = data.title;
    this.url = data.url;
    this.comment_id = data.comment_id;
    this.feature_image = data.feature_image;
    this.featured = data.featured;
    this.visibility = data.visibility;
    this.published_at = data.published_at;
    this.excerpt = data.excerpt;
    this.reading_time = data.reading_time;
  }

  static async get(post: string): Promise<Post> {
    const path = `/content/posts/slug/${post}`;
    const response = await super.fetch(path);

    return response.posts[0];
  }
}
