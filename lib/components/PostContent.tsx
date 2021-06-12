import Page from 'lib/components/Page';

import type Post from 'lib/stores/Post';

export default function PostContent({ post }: { post: Post }) {
  return (
    <Page
      hasCover
      title={post.title}
      excerpt={post.excerpt || ''}
      image={post.feature_image}
      publishedAt={post.published_at}
      readingTime={post.reading_time}
      html={post.html}
    />
  );
}
