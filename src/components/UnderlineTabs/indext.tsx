import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Tabs as EnumTabs } from "../../configs/tabs";
import { ReceiverTabContent } from "../Receiver";

export const UnderlineTabs = () => {
  const [activeTab, setActiveTab] = React.useState(EnumTabs.RECEIVERS);

  const data = [
    {
      label: "Seus favorecidos",
      value: EnumTabs.RECEIVERS,
      desc: <ReceiverTabContent />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-primary/100 p-0"
        indicatorProps={{
          className:
            "bg-primary border-b-2 border-white shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className="text-white text-sm w-[130px] p-0 py-4 justify-start text-left"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
