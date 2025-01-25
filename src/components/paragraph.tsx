import * as React from "react"
import { AppTypography } from "@/components/app-typography"
import { Container } from "@/components/container"

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  text: string
}

const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>(
  ({ title, text, ...props }, ref) => {
    return (
      <Container title={title} ref={ref} {...props}>
        <AppTypography fontSize="sm">
          {text}
        </AppTypography>
      </Container>
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph }
