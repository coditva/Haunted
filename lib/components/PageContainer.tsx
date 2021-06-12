import Header from 'lib/components/Header';
import Footer from 'lib/components/Footer';

import type Site from 'lib/stores/Site';

export default function PageContainer({ children, site }: { children: JSX.Element, site: Site }) {
  const {
    title,
    logo,
    description,
    navigation,
    secondary_navigation: secondaryNavigation,
  } = site;

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header
        title={title}
        navigation={navigation}
        logo={logo}
      />
      {children}
      <Footer
        title={title}
        description={description}
        secondaryNavigation={secondaryNavigation}
        logo={logo}
      />
    </div>
  );
}
