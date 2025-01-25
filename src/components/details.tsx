import * as React from "react"
import { Detail, DetailProps } from "@/components/detail";

import { cn } from "@/lib/utils";

export interface DetailsProps {
  detailsProps: DetailProps[]
  fieldsClassName?: string
}

const Details: React.FC<DetailsProps> = ({ detailsProps, fieldsClassName }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      {detailsProps.map(({ fieldClassName, ...rest }, _idx) => (
          <Detail
            key={`detail-${_idx}`}
            fieldClassName={cn(fieldsClassName, fieldClassName)}
            {...rest}
          />
        )
      )}
    </div>
  )
}
Details.displayName = "Details"

export { Details }
