import React from "react";
import CategoriesSelect from "../components/CatergoriesSelect";
import {createUploadLink} from "../modules/utils"

const UploadSnippetForm: React.FC = (): JSX.Element => {

  const handleClick = () => {
    const image = createUploadLink()
    console.log(image);
    
  }
  return (
    <div className="">
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className="">
          <label />
          <input type="text" name="" id="" placeholder="Name" className="rounded-lg shadow-md" />
        </div>
        <div className="mt-3">
          <CategoriesSelect />
        </div>
        <div className="mt-3 ">
          <textarea className="rounded-lg"></textarea>
        </div>
        <div className="mt-3 flex justify-center">
         <button className="base-button bg-white text-gray-600" onClick={handleClick}>Upload Image</button>
        </div>
      </form>
    </div>
  );
};
export default UploadSnippetForm;
