import * as React from "react"
import { ServerData } from "@/types/servers-types"
import MaskSVG from "public/icons/mask.svg"
import ServerSVG from "public/icons/server.svg"
import ShieldX from "public/icons/shield-x.svg"
import UsersSVG from "public/icons/users.svg"
import { RoundedIconWrapper } from "@/components/rounded-icon-wrapper"

export interface ServerIconWrapperProps {
  data: ServerData
}

const ServerIconWrapper: React.FC<ServerIconWrapperProps> = ({ data }) => {
  return (
    <>
      <RoundedIconWrapper
        color={data.isMask ? "red-100" : "blue-100"}
        iconSrc={data.isMask ? MaskSVG : ServerSVG}
        size="[52px]"
        badgeIconSrc={data.isMask ? UsersSVG : data.status === "critical" ? ShieldX : ""}
        badgeColor={data.isMask ? "purple-800" : "red-600"}
      />
      {/* invisible div to trigger tailwind classes load */}
      <div className="invisible bg-red-100 bg-blue-100 bg-purple-800 bg-red-600 size-[52px]" />
    </>
  )
}
ServerIconWrapper.displayName = "ServerIconWrapper"

export { ServerIconWrapper }
