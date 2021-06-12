import PageComponent from 'lib/components/Page';

import type Page from 'lib/stores/Page';

export default function PageContent({ page }: { page: Page }) {
  return (
    <PageComponent
      title={page.title}
      image={page.feature_image}
      html={page.html}
    />
  );
}
