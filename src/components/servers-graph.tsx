import * as React from "react"
import "@xyflow/react/dist/style.css";
import { ReactFlow } from "@xyflow/react";
import { Container } from "@/components/container";
import { CustomNode } from "@/components/custom-node";
import { Separator } from "@/components/ui/separator";
import { NodesGraphLegend } from "@/components/nodes-graph-legend";
import { useServersContext } from "@/contexts/servers-context";

const nodeTypes = {
  customNode: CustomNode
};

const ServersGraph: React.FC = () => {
  const { servers, connections} = useServersContext()

  return (
    <Container title="Lorem Lorem Lorem">
      <div className="w-full h-[400px] bg-gray-100 flex flex-col gap-[10px] px-[16px] py-[10px]">
        <ReactFlow
          nodes={servers}
          edges={connections}
          nodeTypes={nodeTypes}
        />
        <Separator />
        <NodesGraphLegend />
      </div>
    </Container>
  )
}
ServersGraph.displayName = "ServersGraph"

export { ServersGraph }
