import classnames from 'tailwindcss-classnames';

type Props = {
  value: string
  fluid?: boolean
  type: 'primary'
  inputType: 'submit' | 'button' | 'reset',
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
      type={inputType} // eslint-ignore-line react/button-has-type
    >
      {value}
    </button>
  );
}

Input.defaultProps = {
  fluid: false,
};
