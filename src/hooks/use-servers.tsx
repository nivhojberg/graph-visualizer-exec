import * as React from "react"
import { ServersContextProps } from "@/contexts/servers-context"
import { Server, ServersConnection } from "@/types/servers-types";
import { MarkerType } from "@xyflow/react";

const initialServers: Server[] = [
  {
    id: "1",
    position: { x: 50, y: 100 },
    data: {
      label: "Loremipsumm",
      status: "primary",
      isMask: true,
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    type: "customNode"
  },
  {
    id: "2",
    position: { x: 200, y: 100 },
    data: {
      label: "Loremipsu",
      status: "primary",
      description: "Lorem ipsum dolor sit amet consectetur.",
      notes: "Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.",
    },
    type: "customNode"
  },
  {
    id: "3",
    position: { x: 350, y: 100 },
    data: {
      label: "Loremipsu",
      status: "primary",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    type: "customNode"
  },
  {
    id: "4",
    position: { x: 550, y: 25 },
    data: {
      label: "Loremipsumdolorsit",
      status: "critical",
      ip: "192.168.1.1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      notes: "Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.",
    },
    type: "customNode"
  },
  {
    id: "5",
    position: { x: 550, y: 175 },
    data: {
      label: "Loremipsumdolorsit002",
      status: "critical",
      ip: "192.168.1.2",
      description: "Lorem ipsum dolor sit amet consectetur.",
      notes: "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.",
    },
    type: "customNode"
  },
];
const initialConnections: ServersConnection[] = [
  { id: "e1-2", source: "1", target: "2", markerEnd: { type: MarkerType.Arrow }, },
  { id: "e2-3", source: "2", target: "3", markerEnd: { type: MarkerType.Arrow } },
  { id: "e3-4", source: "3", target: "4", markerEnd: { type: MarkerType.Arrow } },
  { id: "e3-5", source: "3", target: "5", markerEnd: { type: MarkerType.Arrow } },
];

export function useServers(): ServersContextProps {
  const [servers, setServers] = React.useState<Server[]>(initialServers);
  const [connections, setConnections] = React.useState<ServersConnection[]>(initialConnections);

  const isServerExistById = (serverId: string) => {
    return servers.find(({ id }) => id === serverId) !== undefined
  }

  const isConnectionExistById = (connectionId: string) => {
    return connections.find(({ id }) => id === connectionId) !== undefined
  }

  const addServer = (newServer: Server) => {
    setServers((prev: Server[]) => [...prev, newServer])
  }

  const addServerConnection = (newConnection: ServersConnection) => {
    setConnections((prev: ServersConnection[]) => [...prev, newConnection])
  }

  const removeServerById = (serverId: string) => {
    setServers((prev: Server[]) => prev.filter(({ id }) => id !== serverId))
  }

  const removeConnectionById = (connectionId: string) => {
    setConnections((prev: ServersConnection[]) => prev.filter(({ id }) => id !== connectionId))
  }

  return {
    servers,
    connections,
    setServers,
    setConnections,
    isServerExistById,
    isConnectionExistById,
    addServer,
    addServerConnection,
    removeServerById,
    removeConnectionById,
  }
}