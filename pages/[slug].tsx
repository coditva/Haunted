import Pages from 'lib/stores/Pages';
import Posts from 'lib/stores/Posts';
import Page from 'lib/stores/Page';
import Post from 'lib/stores/Post';
import Site from 'lib/stores/Site';
import Meta from 'lib/components/Meta';
import PageContainer from 'lib/components/PageContainer';
import PostContainer from 'lib/components/PostContainer';
import PageContentContainer from 'lib/components/PageContentContainer';

export default function PageComponent(
  { post, page, site }: { post?: Post, page?: Page, site: Site },
) {
  if (post) {
    return (
      <div>
        <Meta
          title={post.title}
          url={post.url}
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
PageComponent.defaultProps = {
  page: null,
  post: null,
};

type ParamType = {
  slug: string
};

export async function getStaticPaths() {
  const [pages, posts] = await Promise.all([
    Pages.get(),
    Posts.get(),
  ]);

  const paths = new Array<{ params: ParamType }>().concat(
    posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParamType }) {
  const [post, page, site] = await Promise.allSettled([
    Post.get(params.slug),
    Page.get(params.slug),
    Site.get(),
  ]);

  return {
    props: {
      post: post.status === 'fulfilled' && post.value,
      page: page.status === 'fulfilled' && page.value,
      site: site.status === 'fulfilled' && site.value,
    },
  };
}
