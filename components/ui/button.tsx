import * as React from "react";
import { cn } from "@/lib/utils"
// wait, I didn't install cva or radix-slot. I should stick to simple props for now to avoid dependency hell or install them. 
// Let's implement a clean simple button without extra deps to keep it lightweight unless requested.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-blue-500/20",
            secondary: "bg-white text-blue-900 hover:bg-gray-50 shadow-md",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-primary hover:bg-primary/5",
            glass: "glass text-white hover:bg-white/20 border-white/40"
        }

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg"
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
