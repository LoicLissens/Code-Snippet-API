import React,{useState} from 'react'
import UploadSnippetForm from '@/components/UploadSnippetForm'
import Tabs from "@/components/Tabs"
const App = (): JSX.Element => {
    const tabList: string[] = ["Upload Snippet", "Create Categorie"]
    const [selectedTab, useSelectedTab] =  useState("Upload Snippet")
    const changeTab = (newTab: string): void => {
        console.log("change");
        
        useSelectedTab(newTab)
    }
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
            <Tabs tabList={tabList} selectedTab={selectedTab} changeTab={changeTab} >
                <UploadSnippetForm />
            </Tabs>
        </div>
    )
}
export default App