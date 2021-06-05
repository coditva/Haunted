import Link from 'next/link';
import Logo from 'lib/components/Logo';

import type Site from 'lib/stores/Site';
import type NavigationItem from 'lib/stores/NavigationItem';

function Navigation({ items }: { items: Array<NavigationItem> }) {
  return (
    <div className='flex flex-wrap font-mono text-gray-500 mt-6 sm:mt-0 space-x-4'>
      {
        items.map((item) => (
          <span key={item.label} className='flex-1 hover:underline whitespace-pre'>
            <Link href={item.url}>
              <a href={item.url}>
                {item.label}
              </a>
            </Link>
          </span>
        ))
      }
    </div>
  );
}

export default function Header({ site }: { site: Site }) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between items-center p-4 sm:px-8'>
      <Logo logo={site.logo} title={site.title} />
      <Navigation items={site.navigation} />
    </div>
  );
}
