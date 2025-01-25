import * as React from "react"

import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Icon } from "@/components/icon"

export interface AppSidebarMenuItemProps {
  title: string
  subtitle?: string
  url: string
  iconSrc: string
  iconSize?: "default" | "sm" | "lg"
  isActive?: boolean
  trailingIconSrc?: string
  onClickTrailing?: () => void
  titleClassName?: string
}

const AppSidebarMenuItem: React.FC<AppSidebarMenuItemProps> = ({
  title,
  subtitle = "",
  url,
  iconSrc,
  iconSize = "sm",
  isActive,
  trailingIconSrc,
  onClickTrailing,
  titleClassName,
}) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <a href={url} className="h-auto">
          <Icon src={iconSrc} size={iconSize} />
          <div className="flex flex-col">
            <span className={titleClassName}>{title}</span>
            <span>{subtitle}</span>
          </div>
        </a>
      </SidebarMenuButton>
      {trailingIconSrc && (
        <SidebarMenuAction onClick={onClickTrailing}>
          <Icon src={trailingIconSrc} size="sm" />
        </SidebarMenuAction>
      )}
    </SidebarMenuItem>
  )
}
AppSidebarMenuItem.displayName = "AppSidebarMenuItem"

export { AppSidebarMenuItem }
