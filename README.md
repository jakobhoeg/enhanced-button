[<img src="ezgif-7-38e5f4fe19.gif">](https://enhanced-button.vercel.app/)

# enhanced-button

An enhanced version of the default **shadcn-button** component.

Expands the default component by adding new beautiful button styles and features with minimal code, so you no longer have to create and manage multiple button components for your projects.

[Demo](https://enhanced-button.vercel.app/) • [Preview](#Preview) • [Requisites](#Requisites) • [Installation](#Installation) • [Usage](#Usage)

# Preview

https://github.com/jakobhoeg/enhanced-button/assets/114422072/ee05475f-6502-4e7a-8bde-ae5144ece85e

# Requisites

[shadcn-ui](https://ui.shadcn.com/docs/installation) and [shadcn-ui button component](https://ui.shadcn.com/docs/components/button) must be installed in your project.

# Installation

All it takes is **two** copy & paste and you're ready to go.

**_1. Copy the `button.tsx` component below and replace it with your existing one in `src/components/ui/button.tsx`_**

**_2. Copy the lines from `tailwind.config.ts` to your existing file._**

<details>
  <summary>button.tsx</summary>

```tsx
import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      effect: {
        expandIcon: 'group gap-0 relative',
        ringHover: 'transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2',
        shine:
          'before:animate-shine relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat background-position_0s_ease',
        shineHover:
          'relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] before:duration-1000',
        gooeyRight:
          'relative z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-white/40 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%]',
        gooeyLeft:
          'relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-white/40 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%]',
        underline:
          'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300',
        hoverUnderline:
          'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface IconProps {
  icon: React.ElementType;
  iconPlacement: 'left' | 'right';
}

interface IconRefProps {
  icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & ButtonIconProps>(
  ({ className, variant, effect, size, icon: Icon, iconPlacement, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, effect, size, className }))} ref={ref} {...props}>
        {Icon &&
          iconPlacement === 'left' &&
          (effect === 'expandIcon' ? (
            <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
              <Icon />
            </div>
          ) : (
            <Icon />
          ))}
        <Slottable>{props.children}</Slottable>
        {Icon &&
          iconPlacement === 'right' &&
          (effect === 'expandIcon' ? (
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
              <Icon />
            </div>
          ) : (
            <Icon />
          ))}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

</details>

<details>
  <summary>tailwind.config.ts</summary>

```diff
const config = {
  extend: {
      keyframes: {
+       shine: {
+          '0%': { backgroundPosition: '200% 0' },
+          '25%': { backgroundPosition: '-200% 0' },
+          '100%': { backgroundPosition: '-200% 0' },
+        },
      },
      animation: {
+         shine: 'shine 3s ease-out infinite',
      },
  },
}
```

</details>

# Usage

Example usage:

```tsx
import { Button } from './ui/button';

<Button effect="expandIcon" icon={ArrowRightIcon} iconPlacement="right">
  Icon right
</Button>;
```

```tsx
import { Button } from './ui/button';

<Button effect="gooeyRight">Gooey right</Button>;
```

Mix with other variants:

```tsx
import { Button } from './ui/button';

<Button variant="outline" effect="shineHover">
  Outline with shine hover
</Button>;
```

Check out the [demo](https://enhanced-button.vercel.app/) to see **all** the different styles.
