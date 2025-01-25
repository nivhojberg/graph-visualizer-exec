import { MarkerType } from "@xyflow/react"

export type Position = {
  x: number
  y: number
}

export type ServerData = {
  label: string
  ip?: string
  status: "primary" | "critical"
  isMask?: boolean
  description: string
  notes?: string
}

export type Server = {
  id: string
  position: Position
  data: ServerData
  type: "customNode"
}

export type ServersConnection = {
  id: string
  source: string
  target: string
  markerEnd: { type: MarkerType }
}