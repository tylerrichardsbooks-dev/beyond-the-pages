import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans font-light tracking-wider transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5 hover:border-primary/50 rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "text-foreground hover:bg-foreground/5 hover:text-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "border border-primary/50 bg-primary/10 text-foreground hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_30px_hsl(28_75%_55%_/_0.3)] backdrop-blur-sm rounded-sm",
        heroSolid: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_40px_hsl(28_75%_55%_/_0.4)] rounded-sm",
        elegant: "border-b border-foreground/30 rounded-none bg-transparent text-foreground hover:border-primary px-0 py-1",
        glow: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_50px_hsl(28_75%_55%_/_0.5)] rounded-sm",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
