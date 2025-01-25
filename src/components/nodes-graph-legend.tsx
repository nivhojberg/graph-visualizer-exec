import * as React from "react"
import ShieldX from "public/icons/shield-x.svg"
import ShieldV from "public/icons/shield-v.svg"
import { IconWithText } from "@/components/icon-with-text"

const NodesGraphLegend: React.FC = () => {
  return (
    <div className="flex">
      <IconWithText
        color="red-600"
        iconSrc={ShieldX}
        text="Lorem"
      />
      <IconWithText
        color="yellow-600"
        iconSrc={ShieldX}
        text="Lorem"
      />
      <IconWithText
        color="green-600"
        iconSrc={ShieldV}
        text="Lorem"
      />
      {/* invisible div to trigger tailwind classes load */}
      <div className="invisible text-red-600 bg-red-600 text-yellow-600 bg-yellow-600 text-green-600 bg-green-600" />
    </div>
  )
}
NodesGraphLegend.displayName = "NodesGraphLegend"

export { NodesGraphLegend }
