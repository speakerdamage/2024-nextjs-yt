import classNames from 'classnames';

export type AvatarProps = {
  src: string;
  alt: string;
  size: 'sm' | 'base' | 'lg';
};

export const Avatar = ({ src, alt, size = 'base' }: AvatarProps) => {
  const avatarClassNames = classNames('rounded-full object-cover', {
    'w-24 h-24': size === 'lg',
    'w-20 h-20': size === 'base',
    'w-16 h-16': size === 'sm',
  });

  return <img src={src} alt={alt} className={avatarClassNames} />;
};
