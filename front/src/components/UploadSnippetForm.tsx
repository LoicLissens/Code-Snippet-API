import React,{useState, useEffect} from "react";
import { fetchCategories } from "../modules/client/api"
import {useFetch} from '../modules/hooks/useFetch'

const UploadSnippetForm: React.FC = (): JSX.Element => {
  
  const [catergories,catLoading, catErr] = useFetch([],fetchCategories)
  return (
    <div className="">
      <form action="">
        <div className="">
          <label />
          <input type="text" name="" id="" placeholder="title" />
        </div>
        
        
      </form>
    </div>
  );
};
export default UploadSnippetForm;
