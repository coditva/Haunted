import Image from 'next/image';

export default function Logo({ logo, title }: { logo?: string, title: string }) {
  return (
    <div>
      {logo ? (
        <Image
          src={logo}
          alt='Logo'
          layout='fill'
        />
      ) : (
        <div className='font-title'>
          {title}
        </div>
      )}
    </div>
  );
}

Logo.defaultProps = {
  logo: null,
};
