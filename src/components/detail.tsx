import * as React from "react"
import { AppTypography, appTypographyVariants } from "@/components/app-typography"
import { type VariantProps } from "class-variance-authority"

export interface DetailProps {
  field: string,
  value: React.ReactNode
  fieldVariants?: VariantProps<typeof appTypographyVariants>
  valueVariants?: VariantProps<typeof appTypographyVariants>
  fieldClassName?: string
}

const Detail: React.FC<DetailProps> = ({ field, value, fieldVariants, valueVariants, fieldClassName }) => {
  return (
    <div className="flex gap-[20px] items-center">
      <AppTypography className={fieldClassName} {...fieldVariants}>
        {field}
      </AppTypography>
      <AppTypography className="flex-1" {...valueVariants}>
        {value}
      </AppTypography>
    </div>
  )
}
Detail.displayName = "Paragraph"

export { Detail }
