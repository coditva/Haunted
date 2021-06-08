import Link from 'next/link';
import Logo from 'lib/components/Logo';
import SubscribeForm from 'lib/components/form/SubscribeForm';
import Input from 'lib/components/form/Input';
import Button from 'lib/components/form/Button';

import type Site from 'lib/stores/Site';
import type NavigationItem from 'lib/stores/NavigationItem';

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

function LeftContent({ site }: { site: Site }) {
  return (
    <div className='flex-1'>
      <Logo title={site.title} logo={site.logo} />
      <Description description={site.description} />
      <Social />
    </div>
  );
}

function Subscription() {
  return (
    <div className='flex flex-col items-center sm:items-end mb-10 sm:mb-0 sm:ml-10'>
      <div className='text-lg font-medium antialiased py-2 px-1'>
        Get the latest posts directly to your inbox!
      </div>
      <div className='flex-1 flex flex-col flex-wrap'>
        <SubscribeForm>
          <Input type='text' name='email' placeholder='Email' fluid />
          <Button type='primary' inputType='submit' value='Subscribe' fluid />
        </SubscribeForm>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <Subscription />
  );
}

function SecondaryNavigation({ items }: { items: Array<NavigationItem> }) {
  return (
    <div className='flex justify-center space-x-4 my-4 px-4 sm:px-8 text-sm text-gray-400'>
      {
        items.map((item) => (
          <span key={item.label} className='hover:underline whitespace-pre'>
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

export default function Footer({ site }: { site: Site }) {
  return (
    <div className='max-w-4xl mx-auto my-16 md:max-w-none md:mx-0'>
      <div className='flex flex-col items-center sm:flex-row-reverse sm:justify-between items-start space-y-8 sm:space-y-0 py-5 px-4 sm:py-10 sm:px-8'>
        <RightContent />
        <LeftContent site={site} />
      </div>
      <SecondaryNavigation items={site.secondary_navigation} />
    </div>
  );
}
