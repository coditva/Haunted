import Logo from 'lib/components/Logo';
import type { SiteType } from 'lib/stores/Site';

export default function Header({ site }: { site: SiteType }) {
  return (
    <div className='container px-4 py-8'>
      <Logo logo={site.logo} title={site.title} />
    </div>
  );
}
