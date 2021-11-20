import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

interface BaseColors {
  [key: string]: string;
}
const CreateCatgories = (): JSX.Element => {
  const baseColors: BaseColors = {
    bg: "#ed8d8d",
    text: "#4d4545",
  };
  return (
    <div className="">
      <form action="">
        <div className="">
          <label />
          <input type="text" name="" id="" placeholder="categorie" />
        </div>
        <div className="">
          <HexColorPicker color={baseColors.bg }/>
          <HexColorInput color={baseColors.bg }/>
        </div>
      </form>
    </div>
  );
};
export default CreateCatgories;
