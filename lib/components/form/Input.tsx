import classnames from 'tailwindcss-classnames';

type Props = {
  type: 'text'
  name: string
  placeholder: string
  fluid?: boolean
  isRequired?: boolean
};

export default function Input({
  type,
  name,
  placeholder,
  isRequired,
  fluid,
}: Props) {
  return (
    <input
      className={classnames(
        'border',
        'px-4',
        'py-2',
        'm-1',
        'rounded',
        'border-black',
        {
          'flex-1': fluid,
        },
        'focus:outline-none',
        'focus:border-blue-500',
      )}
      type={type}
      name={name}
      required={isRequired}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  fluid: false,
  isRequired: false,
};
