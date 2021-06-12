import Header from 'lib/components/Header';
import Footer from 'lib/components/Footer';

import type Site from 'lib/stores/Site';

export default function PageContainer({ children, site }: { children: JSX.Element, site: Site }) {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header
        title={site.title}
        navigation={site.navigation}
        logo={site.logo}
      />
      {children}
      <Footer
        title={site.title}
        description={site.description}
        secondaryNavigation={site.secondary_navigation}
        logo={site.logo}
      />
    </div>
  );
}
