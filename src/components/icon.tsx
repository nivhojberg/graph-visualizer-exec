import * as React from "react"
import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconVariants = cva(
  "inline-block",
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-6 w-6",
        lg: "h-10 w-10",
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export interface IconProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof iconVariants> {
  src: string
  alt?: string
  className?: string
  width?: number
  height?: number
}

const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ className, size, src, alt = "Icon", width = 24, height = 24, ...props }, ref) => {
    return (
      <Image
        src={src}
        alt={alt}
        className={cn(iconVariants({ className, size }))}
        width={width}
        height={height}
        ref={ref}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }