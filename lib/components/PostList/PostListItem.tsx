import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

import type Post from 'lib/stores/Post';

function Title({ title }: { title: string }) {
  return (
    <h1 className='font-sans font-semibold text-3xl sm:text-5xl py-2 antialiased hover:text-blue-500'>
      {title}
    </h1>
  );
}

function DateAndTime({ publishedAt, readingTime }: { publishedAt: string, readingTime: number }) {
  const date = moment(publishedAt).format('MMMM Do, YYYY');
  const unit = readingTime === 1 ? ' min' : ' mins';

  return (
    <div className='font-mono text-xs text-gray-500 py-2 antialiased'>
      {`${date} – ${readingTime} ${unit} read`}
    </div>
  );
}

function Excerpt({ excerpt }: { excerpt: string }) {
  if (!excerpt) {
    return null;
  }

  return (
    <div className='font-sans font-medium text-gray-500 py-2 antialiased'>
      {excerpt}
    </div>
  );
}

export default function PostListItem({ post }: { post: Post }) {
  const relativeUrl = `/${post.slug}`;

  return (
    <div className='flex flex-col items-center sm:flex-row-reverse sm:items-start px-4 py-6 max-w-4xl lg:max-w-5xl'>
      <div className='sm:flex-shrink-0 sm:mt-14'>
        <Link href={relativeUrl}>
          <a href={relativeUrl}>
            <Image
              className='rounded-md hover:opacity-90'
              src={post.feature_image || ''}
              alt={post.title}
              height={160}
              width={320}
            />
          </a>
        </Link>
      </div>
      <div className='py-4 sm:px-4 max-w-xs sm:max-w-none'>
        <DateAndTime publishedAt={post.published_at} readingTime={post.reading_time} />
        <Link href={relativeUrl}>
          <a href={relativeUrl}>
            <Title title={post.title} />
          </a>
        </Link>
        {post.excerpt && <Excerpt excerpt={post.excerpt} />}
      </div>
    </div>
  );
}
