import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(224,76%,48%)] text-white hover:brightness-110 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-2xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl",
        outline: "border-2 border-[rgba(59,130,246,0.3)] bg-transparent text-foreground hover:bg-[rgba(59,130,246,0.05)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] rounded-2xl backdrop-blur-sm",
        secondary: "bg-gradient-to-r from-[hsl(224,76%,48%)] to-[hsl(217,91%,60%)] text-white hover:brightness-110 rounded-2xl",
        ghost: "hover:bg-[rgba(59,130,246,0.08)] hover:text-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "bg-[rgba(255,255,255,0.25)] border border-[rgba(59,130,246,0.2)] backdrop-blur-md text-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-[rgba(255,255,255,0.35)] rounded-2xl",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-xl px-4",
        lg: "h-12 rounded-2xl px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
