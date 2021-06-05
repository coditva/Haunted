import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ logo, title }: { logo?: string, title: string }) {
  return (
    <div className='break-words'>
      <Link href='/'>
        <a href='/'>
          {logo ? (
            <Image
              src={logo}
              alt='Logo'
              layout='fill'
            />
          ) : (
            <div className='font-sans font-medium text-3xl antialiased hover:text-blue-500'>
              {title}
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

Logo.defaultProps = {
  logo: null,
};
