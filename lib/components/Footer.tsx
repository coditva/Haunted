import Logo from 'lib/components/Logo';

import type { SiteType } from 'lib/stores/Site';

function Description({ description }: { description: string }) {
  return (
    <div className='antialiased font-medium text-sm py-2'>
      {description}
    </div>
  );
}

function Social() {
  return (
    <div />
  );
}

function LeftContent({ site }: { site: SiteType }) {
  return (
    <div className='flex-1'>
      <Logo title={site.title} logo={site.logo} />
      <Description description={site.description} />
      <Social />
    </div>
  );
}

function RightContent() {
  return (
    <div className='flex-1 flex justify-end'>
      right
    </div>
  );
}

export default function Footer({ site }: { site: SiteType }) {
  return (
    <div className='flex sm:justify-between items-center sm:items-start flex-col sm:flex-row-reverse py-5 px-4 sm:py-10 sm:px-8'>
      <RightContent />
      <LeftContent site={site} />
    </div>
  );
}
