'use client'
import { CheckIcon, ClipboardCopyIcon, CopyIcon } from "@radix-ui/react-icons";
import React from "react"; 
import { CodeBlock,github } from "react-code-blocks"; 
import { Button } from "./ui/button";
  

export default function CodeBlockk() { 
    const code = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
{
    variants: {
    variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        expandIcon:
        "group relative text-primary-foreground bg-primary hover:bg-primary/90",
        hoverRing:
        "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        shine:
        "text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:400%_100%] ",
        linkHover:
        "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        linkHover2:
        "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
    },
    size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    },
    },
    defaultVariants: {
    variant: "default",
    size: "default",
    },
}
);

interface IconProps {
Icon: React.ElementType;
iconPlacement: "left" | "right";
}

interface IconRefProps {
Icon?: never;
iconPlacement?: undefined;
}

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<
HTMLButtonElement,
ButtonProps & ButtonIconProps
>(
(
    {
    className,
    variant,
    size,
    asChild = false,
    Icon,
    iconPlacement,
    ...props
    },
    ref
) => {
    const Comp = asChild ? Slot : "button";
    return (
    <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
    >
        {Icon && iconPlacement === "left" && (
        <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
        </div>
        )}
        {props.children}
        {Icon && iconPlacement === "right" && (
        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
        </div>
        )}
    </Comp>
    );
}
);
Button.displayName = "Button";

export { Button, buttonVariants };
        `;


    const [isCopied, setisCopied] = React.useState(false);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
      setisCopied(true);
        setTimeout(() => {
            setisCopied(false);
        }, 1000);
    };




  return ( 
    <div className="md:max-w-3xl max-w-sm flex flex-col h-96 rounded-l-lg  text-start shadow-xl "> 
    <div className=" bg-[#fafafa] w-full py-2 px-3.5 flex items-center text-muted-foreground justify-between ">
    <div className="flex items-center gap-2">
    <svg className="fill-muted-foreground" role="img" height={18} width={18} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
        <span>src/components/ui/button.tsx</span>
    </div>
        <Button 
        onClick={copyToClipboard}
        variant="ghost" size="icon" className="h-8 w-8">
        {isCopied ? <CheckIcon className="w-5 h-5 scale-100 transition-all" /> :  <CopyIcon className="w-5 h-5 scale-100 transition-all" />}

        </Button>
        </div>
      <CodeBlock  customStyle={{
        borderTopLeftRadius: '0.8rem',
        borderBottomLeftRadius: '0.8rem',
        paddingLeft: '0.4rem',
      }}
      text={code}
      language='tsx'
      showLineNumbers={false}
      theme={github} 
    /> 
    </div> 
  ); 
}