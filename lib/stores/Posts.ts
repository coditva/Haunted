import Data from './Data';

import type { Post } from './Post';

export type PostsType = Array<Post>;

export default class Posts extends Data {
  static readonly path = '/content/posts';

  static async get(): Promise<PostsType> {
    const response: { posts: PostsType } = await super.fetch();

    return response.posts;
  }
}
