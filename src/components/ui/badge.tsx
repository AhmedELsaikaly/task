import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';
import {X} from 'lucide-react';

const badgeVariants = cva(
  'inline-flex items-center justify-between rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onClose?: () => void; // Optional onClose prop to handle badge removal
}

function Badge({className, variant, onClose, children, ...props}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({variant}), className)} {...props}>
      <span className={`${onClose ? 'me-2' : ''}`}>{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="rounded-full text-sm hover:bg-opacity-20"
        >
          <X size={10} className="text-current stroke-foreground" />
        </button>
      )}
    </div>
  );
}

export {Badge, badgeVariants};
