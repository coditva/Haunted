export default function PostContainer({ html }: { html: string }) {
  return (
    <div
      className='html-container'
      dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
    />
  );
}
