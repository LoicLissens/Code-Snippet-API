import React, { useState } from "react";
import UploadSnippetForm from "@/components/UploadSnippetForm";
import Tabs from "@/components/Tabs";
import CreateCatgories from "@/components/CreateCatgories";
import axios from "axios";

interface TabsName {
  [key: string]: string;
}

const App = (): JSX.Element => {
  const tabsName: TabsName = {
    uploadSnipp: "Upload Snippet",
    createCat: "Create Categorie",
  };
  const tabList: string[] = Object.values(tabsName);
  const [selectedTab, useSelectedTab] = useState("Upload Snippet");

  const changeTab = (newIndexTab: number): void => {
    useSelectedTab(tabList[newIndexTab]);
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-400">
      <Tabs tabList={tabList} selectedTab={selectedTab} changeTab={changeTab}>
        {selectedTab === tabsName.createCat && <CreateCatgories />}
        {selectedTab === tabsName.uploadSnipp && <UploadSnippetForm />}
      </Tabs>
    </div>
  );
};
export default App;
