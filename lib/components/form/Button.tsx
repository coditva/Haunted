import classnames from 'tailwindcss-classnames';

type Props = {
  value: string
  inputType: 'submit' | 'button' | 'reset'
  fluid?: boolean
  type?: 'primary'
};

export default function Input({
  type,
  value,
  fluid,
  inputType,
}: Props) {
  const className = classnames(
    'border',
    'px-4',
    'py-2',
    'm-1',
    'rounded',
    {
      'flex-1': fluid,
      'bg-blue-500': type === 'primary',
      'text-white': type === 'primary',
      'border-blue-500': type === 'primary',
    },
    'hover:bg-blue-400',
    'hover:border-blue-400',
  );

  return (
    <button
      className={className}
      type={inputType}
    >
      {value}
    </button>
  );
}

Input.defaultProps = {
  fluid: false,
  type: 'primary',
};
