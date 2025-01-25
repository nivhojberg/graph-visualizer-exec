import * as React from "react"
import LogoSVG from "public/icons/logo.svg"
import AdjustmentSVG from "public/icons/adjustment.svg"
import CubeSVG from "public/icons/cube.svg"
import DashboardSVG from "public/icons/dashboard.svg"
import ExitFullscreenSVG from "public/icons/exit-fullscreen.svg"
import FileSVG from "public/icons/file.svg"
import PlugSVG from "public/icons/plug.svg"
import WarningSVG from "public/icons/warning.svg"
import SettingsSVG from "public/icons/settings.svg"
import TopRightPopupSVG from "public/icons/top-right-popup.svg"
import UserSVG from "public/icons/user.svg"
import LogoutSVG from "public/icons/logout.svg"
import { AppSidebarMenuItem } from "@/components/app-sidebar-menu-item"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const topMenuItems = [
  {
    title: "Lorem",
    url: "#",
    iconSrc: DashboardSVG,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: WarningSVG,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: CubeSVG,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: ExitFullscreenSVG,
    isActive: true,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: PlugSVG,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: FileSVG,
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: AdjustmentSVG,
  },
]

const bottomMenuItems = [
  {
    title: "Lorem",
    url: "#",
    iconSrc: SettingsSVG
  },
  {
    title: "Lorem",
    url: "#",
    iconSrc: TopRightPopupSVG
  },
]

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="absolute -right-4 top-3 rounded-full bg-green-700 text-white"/>
      <SidebarHeader>
        <SidebarMenu>
          <AppSidebarMenuItem
            iconSrc={LogoSVG}
            title="Astelia"
            url="#"
            iconSize="lg"
            titleClassName="font-medium text-[22px]"
          />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {topMenuItems.map((item, _idx) => (
                <AppSidebarMenuItem key={`${_idx} - ${item.title}`} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomMenuItems.map((item, _idx) => (
                <AppSidebarMenuItem key={`${_idx} - ${item.title}`} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <AppSidebarMenuItem
            iconSrc={UserSVG}
            title="Lorem"
            subtitle="Lorem"
            url="#"
            iconSize="lg"
            trailingIconSrc={LogoutSVG}
          />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
AppSidebar.displayName = "AppSidebar"

export { AppSidebar }
