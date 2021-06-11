import Image from 'next/image';
import Link from 'next/link';

export type Props = {
  logo?: string
  title: string
};

export default function Logo({ logo, title }: Props) {
  return (
    <div className='break-words'>
      <Link href='/'>
        <a href='/'>
          {logo ? (
            <Image
              src={logo}
              alt={title}
              layout='fill'
            />
          ) : (
            <span className='font-sans font-medium text-3xl antialiased hover:text-blue-500'>
              {title}
            </span>
          )}
        </a>
      </Link>
    </div>
  );
}

Logo.defaultProps = {
  logo: null,
};
