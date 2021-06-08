const { SUBSCRIBE_FORM } = process.env || {};

type Props = {
  children: JSX.Element | Array<JSX.Element>,
};

export default function SubscribeForm({ children }: Props) {
  return (
    <form
      action={SUBSCRIBE_FORM}
      method='post'
      target='popupwindow'
    >
      {children}
    </form>
  );
}
