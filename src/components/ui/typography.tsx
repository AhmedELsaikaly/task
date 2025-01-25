import {ComponentPropsWithoutRef, ElementType} from 'react';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'lead'
  | 'caption';

interface TypographyProps<T extends ElementType> {
  as?: T;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  h1: 'text-7xl font-bold', // 36px / 46px
  h2: 'text-6xl font-bold', // 32px / 42px
  h3: 'text-5xl font-bold', // 28px / 36px
  h4: 'text-4xl font-bold', // 24px / 32px
  h5: 'text-xl font-bold', // 18px / 27px
  h6: 'text-lg font-bold', // 16px / 24px
  body: 'text-md text-gray-400', //  14px / 22px
  small: 'text-sm text-gray-400', // 12px / 18px
  lead: 'text-lg', // 18px / 27px
  caption: 'text-xs uppercase tracking-wide', // 10px / 15px
};

export const Typography = <T extends ElementType = 'p'>({
  as,
  variant = 'body',
  className,
  children,
  ...props
}: TypographyProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || variantToElement[variant ?? as] || 'p';
  const mergedClasses = `${variantClasses[variant ?? as]} ${className || ''}`;

  return (
    <Component className={mergedClasses.trim()} {...props}>
      {children}
    </Component>
  );
};

const variantToElement: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'small',
  lead: 'p',
  caption: 'span',
};
