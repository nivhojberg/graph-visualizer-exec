import * as React from "react"
import { RoundedIconWrapper } from "@/components/rounded-icon-wrapper"

export interface IconWithTextProps {
  iconSrc: string
  text: string
  color: string
  size?: string
}

const IconWithText: React.FC<IconWithTextProps> = ({ iconSrc, text, color, size = "[35px]" }) => {
  return (
    <>
      <div className={`p-[12px] text-${color} flex gap-[8px] items-center`}>
        <RoundedIconWrapper color={color} iconSrc={iconSrc} size={size} />
        <span>{text}</span>
      </div>
      {/* invisible div to trigger tailwind classes load */}
      <div className="invisible size-[35px]"></div>
    </>
  )
}
IconWithText.displayName = "IconWithText"

export { IconWithText }