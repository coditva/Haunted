import Pages from 'lib/stores/Pages';
import Posts from 'lib/stores/Posts';
import Page from 'lib/stores/Page';
import Post from 'lib/stores/Post';
import Site from 'lib/stores/Site';
import Meta from 'lib/components/Meta';
import PageContainer from 'lib/components/PageContainer';
import PostContainer from 'lib/components/PostContainer';
import PageContentContainer from 'lib/components/PageContentContainer';

import type { GetStaticProps, GetStaticPaths } from 'next';

type Props = {
  post: Post | null
  page: Page | null
  site: Site
};

export default function PageComponent({ post, page, site }: Props) {
  if (post) {
    return (
      <div>
        <Meta
          title={post.title}
          url={post.url}
          icon={site.icon}
          description={post.excerpt}
          metaTitle={post.meta_title}
          metaDescription={post.meta_description}
          ogImage={post.og_image}
          ogTitle={post.og_title}
          ogDescription={post.og_description}
          twitterImage={post.twitter_image}
          twitterTitle={post.twitter_title}
          twitterDescription={post.twitter_description}
        />
        <PageContainer site={site}>
          <PostContainer post={post} />
        </PageContainer>
      </div>
    );
  }

  if (page) {
    return (
      <div>
        <Meta
          title={page.title}
          url={page.url}
          icon={site.icon}
          description={page.excerpt}
          metaTitle={page.meta_title}
          metaDescription={page.meta_description}
          ogImage={page.og_image}
          ogTitle={page.og_title}
          ogDescription={page.og_description}
          twitterImage={page.twitter_image}
          twitterTitle={page.twitter_title}
          twitterDescription={page.twitter_description}
        />
        <PageContainer site={site}>
          <PageContentContainer page={page} />
        </PageContainer>
      </div>
    );
  }

  return null;
}

type ParamType = {
  slug: string
};

export const getStaticPaths: GetStaticPaths<ParamType> = async function getStaticPaths() {
  const [pages, posts] = await Promise.all([
    Pages.get(),
    Posts.get(),
  ]);

  return {
    paths: [...posts, ...pages].map((data) => ({
      params: {
        slug: data.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, ParamType> = async function getStaticProps({
  params,
}) {
  if (!params) {
    throw new Error('Invalid params');
  }

  const [post, page, site] = await Promise.allSettled([
    Post.get(params.slug),
    Page.get(params.slug),
    Site.get(),
  ]);

  if (site.status === 'rejected') {
    throw new Error('Unable to fetch site data');
  }

  return {
    props: {
      post: post.status === 'fulfilled' ? post.value : null,
      page: page.status === 'fulfilled' ? page.value : null,
      site: site.value,
    },
  };
};
