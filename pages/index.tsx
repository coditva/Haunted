import Posts from 'lib/stores/Posts';
import Site from 'lib/stores/Site';
import Meta from 'lib/components/Meta';
import Header from 'lib/components/Header';
import Footer from 'lib/components/Footer';
import PostList from 'lib/components/PostList';

import type { PostsType } from 'lib/stores/Posts';
import type { SiteType } from 'lib/stores/Site';

export default function Home({ posts, site }: { posts: PostsType, site: SiteType }) {
  return (
    <div>
      <Meta
        title={site.title}
        url={site.url}
        description={site.description}
        metaTitle={site.meta_title}
        metaDescription={site.meta_description}
        ogImage={site.og_image}
        ogTitle={site.og_title}
        ogDescription={site.og_description}
        twitterImage={site.twitter_image}
        twitterTitle={site.twitter_title}
        twitterDescription={site.twitter_description}
      />
      <div className='max-w-screen-xl mx-auto'>
        <Header site={site} />
        <PostList posts={posts} />
        <Footer site={site} />
      </div>
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
