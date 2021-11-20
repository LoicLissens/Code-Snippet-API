// import React from "react";
import { Tab } from "@headlessui/react";

interface Props {
  tabList: string[];
  selectedTab: string;
  changeTab: (newTab: string) => void;
  children: JSX.Element;
}

function Tabs(props: Props) {
  return (
    <Tab.Group onChange={(e:number) => props.changeTab(e)}>
      <Tab.List className="mb-4">
        {props.tabList.map((tab) => {
          return (
            <Tab key={tab} className={props.selectedTab === tab ? "border-2 border-black p-2" : "" + " mx-2"}>
              {tab}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>{props.children}</Tab.Panels>
    </Tab.Group>
  );
}
export default Tabs;
