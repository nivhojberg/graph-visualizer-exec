import * as React from "react"
import { Container } from "./container"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useServersContext } from "@/contexts/servers-context"
import { Separator } from "@/components/ui/separator"
import { ServerIconWrapper } from "@/components/server-icon-wrapper"
import { Badge } from "@/components/ui/badge"

const ServersDetails: React.FC = () => {
  const { servers } = useServersContext()
  const criticalServers = servers.filter(({ data }) => data.status === "critical")

  return (
    <Container title="Lorem ipsum dolor sit">
      <div className="flex gap-[20px]">
        <Card className="w-1/2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <span>Asset</span>
              <span>Contextual Risk</span>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-[8px]">
            {criticalServers.map((server) => (
              <div key={server.id} className="flex items-center justify-between h-[60px]">
                <div className="flex items-center">
                  <ServerIconWrapper data={server.data} />
                  <div>{server.data.label}</div>
                </div>
                <Badge variant="destructive">Critical</Badge>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="w-full text-center text-gray-700">
              Showing 1-{criticalServers.length} of {criticalServers.length}
            </div>
          </CardFooter>
        </Card>
      </div>
    </Container>
  )
}
ServersDetails.displayName = "ServersDetails"

export { ServersDetails }