import * as React from "react"
import {
  Handle,
  NodeProps,
  Position,
} from "@xyflow/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ServerData } from "@/types/servers-types";
import { ServerIconWrapper } from "./server-icon-wrapper";
import { ServerNodePopoverContent } from "./server-node-popover-content";

export interface CustomNodeProps extends NodeProps {
  data: ServerData
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <div className="flex flex-col items-center gap-[8px] relative">
          <ServerIconWrapper data={data} />
          <div className="absolute top-[60px] text-center">
            <div>{data.label}</div>
            <div className="text-xs text-gray-soft-900">{data.ip}</div>
          </div>
          <Handle type="source" position={Position.Right} className="invisible" />
          <Handle type="target" position={Position.Left} className="invisible" />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ServerNodePopoverContent data={data} />
      </PopoverContent>
    </Popover>
  )
}
CustomNode.displayName = "CustomNode"

export { CustomNode }
