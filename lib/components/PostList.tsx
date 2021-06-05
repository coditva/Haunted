import PostListItem from 'lib/components/PostListItem';

import type { PostsType } from 'lib/stores/Posts';

export default function PostList({ posts }: { posts: PostsType }) {
  return (
    <div className='flex flex-col items-center'>
      { posts.map((post) => (<PostListItem key={post.id} post={post} />)) }
    </div>
  );
}
