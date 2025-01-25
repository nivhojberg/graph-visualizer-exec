import * as React from "react"
import { AppTypography } from "@/components/app-typography";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  titleColor?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ title, titleColor = "green-600", children, ...props }, ref) => {
    return (
      <div
        className="flex flex-col gap-[12px] mb-[30px]"
        ref={ref}
        {...props}
      >
        <AppTypography fontSize="lg" className={`text-${titleColor} font-bold`}>
          {title}
        </AppTypography>
        {children}
      </div>
    )
  }
)
Container.displayName = "Container"

export { Container }
