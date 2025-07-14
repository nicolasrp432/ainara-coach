import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  // Base styles
  'rounded-card transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-card',
        outlined: 'border-2 border-primary-blue/10',
        ghost: 'bg-pearl-gray/50',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false,
    },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({
  children,
  className,
  variant,
  padding,
  hover,
  onClick,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(cardVariants({ variant, padding, hover }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card, cardVariants };
export type { CardProps };
