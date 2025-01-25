import * as React from "react"
import { ServerData } from "@/types/servers-types"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"
import { ServerIconWrapper } from "@/components/server-icon-wrapper"

export interface ServerNodePopoverContentProps {
  data: ServerData
}

const ServerNodePopoverContent: React.FC<ServerNodePopoverContentProps> = ({ data }) => {
  return (
    <Container title={data.label} titleColor="gray-600">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center h-[64px] p-[6px] gap-[8px] bg-gray-100 rounded-md text-sm">
          <div className="flex items-center gap-[4px]">
            <ServerIconWrapper data={data} />
            <div>
              <div>Server</div>
              <div>{data.ip}</div>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span className="text-gray-soft-900">{data.description}</span>
          </div>
        </div>
        {data.notes && <span className="text-sm">{data.notes}</span>}
      </div>
    </Container>
  )
}
ServerNodePopoverContent.displayName = "ServerNodePopoverContent"

export { ServerNodePopoverContent }
