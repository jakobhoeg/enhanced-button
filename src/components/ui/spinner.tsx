import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "relative block opacity-[0.65]",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

// Mapping from button variants to spinner background colors
const variantToBackgroundMap = {
  default: "bg-primary-foreground",
  destructive: "bg-destructive-foreground", 
  outline: "bg-accent-foreground",
  secondary: "bg-secondary-foreground",
  ghost: "bg-accent-foreground",
  link: "bg-primary",
} as const;

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof spinnerVariants> {
  loading?: boolean;
  asChild?: boolean;
  variant?: keyof typeof variantToBackgroundMap;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, loading = true, asChild = false, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    const [bgColorClass, filteredClassName] = React.useMemo(() => {
      // Extract explicit background classes from className
      const bgClass = className?.match(/(?:dark:bg-|bg-)[a-zA-Z0-9-]+/g) || [];
      const filteredClasses = className?.replace(/(?:dark:bg-|bg-)[a-zA-Z0-9-]+/g, "").trim();

      // If no explicit background classes and we have a variant, use variant-based background
      const finalBgClasses = [...bgClass];
      if (finalBgClasses.length === 0 && variant && variantToBackgroundMap[variant]) {
        finalBgClasses.push(variantToBackgroundMap[variant]);
      }

      return [finalBgClasses, filteredClasses];
    }, [className, variant]);

    if (!loading) return null;

    return (
      <Comp
        className={cn(spinnerVariants({ size, className: filteredClassName }))}
        ref={ref}
        {...props}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 w-[12.5%] h-full animate-spinner-leaf-fade"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${-(7 - i) * 100}ms`,
            }}
          >
            <span
              className={cn("block w-full h-[30%] rounded-full", bgColorClass)}
            ></span>
          </span>
        ))}
      </Comp>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };