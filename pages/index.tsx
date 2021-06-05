import Posts from 'lib/stores/Posts';
import Site from 'lib/stores/Site';
import Header from 'lib/components/Header';
import PostList from 'lib/components/PostList';

import type { PostsType } from 'lib/stores/Posts';
import type { SiteType } from 'lib/stores/Site';

export default function Home({ posts, site }: { posts: PostsType, site: SiteType }) {
  return (
    <div>
      <Header site={site} />
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const [posts, site] = await Promise.all([
    Posts.get(),
    Site.get(),
  ]);

  return {
    props: {
      posts,
      site,
    },
  };
}
