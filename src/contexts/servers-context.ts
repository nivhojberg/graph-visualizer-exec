"use client"

import { Server, ServersConnection } from "@/types/servers-types"
import * as React from "react"

export interface ServersContextProps {
  servers: Server[]
  connections: ServersConnection[]
  setServers: (servers: Server[]) => void
  setConnections: (connections: ServersConnection[]) => void
  isServerExistById: (serverId: string) => boolean
  isConnectionExistById: (connectionId: string) => boolean
  addServer: (newServer: Server) => void
  addServerConnection: (newConnection: ServersConnection) => void
  removeServerById: (serverId: string) => void
  removeConnectionById: (connectionId: string) => void
}

const ServersContext = React.createContext<ServersContextProps>({
  servers: [],
  connections: [],
  setServers: () => {},
  setConnections: () => {},
  isServerExistById: () => false,
  isConnectionExistById: () => false,
  addServer: () => {},
  addServerConnection: () => {},
  removeServerById: () => {},
  removeConnectionById: () => {},
})

const ServersContextProvider = ServersContext.Provider

const useServersContext = () => React.useContext(ServersContext)

export { ServersContextProvider, useServersContext }
