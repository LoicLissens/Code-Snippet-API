import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useForm } from "../modules/hooks/useForm";
import {Catergorie} from "../modules/models"
const CreateCatgories = (): JSX.Element => {
  // const [bgColor, setBgColor] = useState<string>("#ed8d8d");
  // const [textColor, setTextColor] = useState<string>("#4d4545");
  const [formValues, handleChange] = useForm({name:"",bgColor:"ed8d8d",textColor:"4d4545"})
  return (
    <div className="">
      <form action="">
        <div className="">
          <label />
          <input className="rounded-lg shadow-md" type="text" name="" id="" placeholder="categorie" />
        </div>
        <div className="mt-1">
          <HexColorPicker color={formValues.bgColor} onChange={handleChange} />
          <div className="flex mt-1 justify-center">
            <HexColorInput className="rounded-lg shadow-md w-1/2 p-1" color={formValues.bgColor} onChange={handleChange} />
            <div style={{ backgroundColor: formValues.bgColor }} className="h-8 w-10 rounded-lg shadow-md"></div>
          </div>
        </div>
        <div className="mt-1">
          <HexColorPicker color={formValues.textColor} onChange={handleChange} />
          <div className="flex mt-1 justify-center">
            <HexColorInput className="rounded-lg shadow-md w-1/2 p-1" color={formValues.textColor} onChange={handleChange} />
            <div style={{ backgroundColor: formValues.textColor }} className="h-8 w-10 rounded-lg shadow-md"></div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateCatgories;
