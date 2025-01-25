import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const appCardVariants = cva(
  "flex flex-col gap-[12px] p-[20px] rounded-md shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-white text-primary",
        secondary:
          "bg-secondary text-secondary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AppCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appCardVariants> {
  asChild?: boolean
}

const AppCard = React.forwardRef<HTMLDivElement, AppCardProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(appCardVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AppCard.displayName = "Card"

export { AppCard, appCardVariants }
