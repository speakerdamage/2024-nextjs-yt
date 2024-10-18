import classNames from 'classnames';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'empty';
  size: 'sm' | 'base';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  variant = 'primary',
  size = 'base',
  children,
  onClick = () => {},
  disabled = false,
}: ButtonProps) => {
  //define disabled classes
  const disabledClasses =
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:no-pointer-events';
  const hoverActiveClasses =
    'enabled:hover:transform enabled:hover:scale-105 enabled:transition enabled:duration-300 ease';

  const buttonClassNames = classNames(
    'rounded',
    {
      'bg-primary text-white': variant === 'primary',
      'bg-white text-primary border border-2 border-primary':
        variant === 'secondary',
      'text-primary underline': variant === 'empty',
    },
    {
      'p-4': size === 'base',
      'p-2': size === 'sm',
    },
    hoverActiveClasses,
    disabledClasses
  );

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClassNames}>
      {children}
    </button>
  );
};
