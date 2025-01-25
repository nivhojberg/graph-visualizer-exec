import * as React from "react"
import { Icon } from "./icon";

export interface ServerStatusIconWrapperProps {
  iconSrc: string
  color: string
  size?: string
  iconSize?: "default" | "sm" | "lg"
  badgeIconSrc?: string
  badgeColor?: string
}

const RoundedIconWrapper: React.FC<ServerStatusIconWrapperProps> = ({
  iconSrc,
  color,
  size = "[35px]",
  iconSize = "sm",
  badgeIconSrc = "",
  badgeColor = "",
}) => {
  return (
    <div className="relative">
      <div className={`rounded-full flex justify-center items-center bg-${color} size-${size}`}>
        <Icon src={iconSrc} size={iconSize} />
      </div>
      {badgeIconSrc && (
        <div className="absolute top-[-6px] right-[-6px]">
          <RoundedIconWrapper
            color={badgeColor}
            iconSrc={badgeIconSrc}
            size="[28px]"
            iconSize="sm"
          />
        </div>
      )}
    </div>
  )
}
RoundedIconWrapper.displayName = "RoundedIconWrapper"

export { RoundedIconWrapper }