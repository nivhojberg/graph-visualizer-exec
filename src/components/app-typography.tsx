import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const appTypographyVariants = cva(
  "inline",
  {
    variants: {
      fontSize: {
        default: "text-base",
        xs: "text-xs",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
      },
      variant: {
        default: "text-[#525D73]",
        dark: "text-[#334155]",
        black: "text-black",
        white: "text-white",
        green: "text-green-600"
      }
    },
    defaultVariants: {
      fontSize: "default",
      variant: "default",
    }
  }
)

export interface AppTypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appTypographyVariants> {
  // 
}

const AppTypography = React.forwardRef<HTMLDivElement, AppTypographyProps>(
  ({ className, fontSize, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(appTypographyVariants({ fontSize, variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AppTypography.displayName = "AppTypography"

export { AppTypography, appTypographyVariants }