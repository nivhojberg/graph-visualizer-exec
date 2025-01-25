"use client";

import React from "react";

import { AppCard } from "@/components/app-card";
import { AppTypography } from "@/components/app-typography";
import { Paragraph } from "@/components/paragraph";
import { DetailProps } from "@/components/detail";
import { Details } from "@/components/details";
import { Separator } from "@/components/ui/separator"
import { ServersGraph } from "@/components/servers-graph";
import { useServers } from "@/hooks/use-servers";
import { ServersContextProvider } from "@/contexts/servers-context";
import { ServersDetails } from "@/components/servers-details";

export default function HomePage() {
  const serversContextValue = useServers()

  const detailsProps: DetailProps[] = [
    { field: "Lorem ipsum dolor", fieldVariants: { variant: "dark" }, value: <>10/19/2017</> },
    { field: "Lorem ipsum dolor", fieldVariants: { variant: "dark" }, value: <>Ut</> },
    { field: "Lorem ipsum dolor", value: <>Eros</> },
    { field: "Lorem ipsum dolor", value: <>Yes</> },
    { field: "Lorem ipsum dolor", value: <>Sit</> },
    { field: "Lorem ipsum dolor", value: <>Lorem ipsum dolor</> },
    { field: "Lorem ipsum dolor", value: <>Lorem ipsum dolor</> },
  ]

  return (
    <ServersContextProvider value={serversContextValue}>
      <div className="h-full flex gap-[20px]">
        <AppCard className="w-[385px]">
          <Paragraph
            title="Description"
            text="Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum."
          />
          <Paragraph
            title="Extra"
            text="Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse."
          />
          <Separator />
          <Details fieldsClassName="font-bold w-[150px]" detailsProps={detailsProps} />
          <AppTypography variant="dark" className="font-bold">
            Lorem ipsum dolor sit
          </AppTypography>
        </AppCard>
        <AppCard className="flex-1">
          <ServersGraph />
          <ServersDetails />
        </AppCard>
      </div>
    </ServersContextProvider>
  );
}
