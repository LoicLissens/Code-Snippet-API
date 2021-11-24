import React from "react";
import CategoriesSelect from "../components/CatergoriesSelect"

const UploadSnippetForm: React.FC = (): JSX.Element => {
  
  

  
  return (
    <div className="">
      <form action="">
        <div className="">
          <label />
          <input type="text" name="" id="" placeholder="Name" className="rounded-lg shadow-md" />
        </div>
        <div className="mt-3">
          <CategoriesSelect/>
        </div>
        <div className="">
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
};
export default UploadSnippetForm;
