import React, { SyntheticEvent, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useForm } from "../modules/hooks/useForm";
import { Catergorie } from "../modules/models";
import { postCategorie } from "../modules/client/api";
import { Popover } from "@headlessui/react";

const CreateCatgories = (): JSX.Element => {
  const [bgColor, setBgColor] = useState<string>("#ed8d8d");
  const [textColor, setTextColor] = useState<string>("#4d4545");
  const [formValues, handleChange] = useForm({ name: "" });

  const handleClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const post = await postCategorie({ bgColor, textColor, ...formValues } as Catergorie);
    console.log(post);
  };

  return (
    <div>
      <form className="p-4 shadow-lg rounded-md">
        <div>
          <label />
          <input onInput={handleChange} className="rounded-lg shadow-md" type="text" name="name" id="" placeholder="categorie" />
        </div>
        <Popover className="relative mt-2">
          <Popover.Button className="p-2 rounded-lg shadow-md bg-gray-50 flex items-center justify-between font-medium w-3/4 mx-auto" style={{ border: `solid 5px ${bgColor}` }}>
            <span style={{ color: bgColor }}>Background</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--mdi text-gray-500"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="currentColor"></path>
              </svg>
            </span>
          </Popover.Button>
          <Popover.Panel className="absolute z-10">
            <HexColorPicker color={bgColor} onChange={setBgColor} />
            <div className="flex justify-center">
              <HexColorInput className="rounded-lg shadow-md w-3/4 p-1 mx-auto" color={bgColor} onChange={setBgColor} />
            </div>
          </Popover.Panel>
        </Popover>
        <Popover className="relative mt-2">
          <Popover.Button className="p-2 rounded-lg shadow-md bg-gray-50 flex items-center justify-between font-medium w-3/4 mx-auto" style={{ border: `solid 5px ${textColor}` }}>
            <span style={{ color: textColor }}>Text</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="iconify iconify--mdi text-gray-500"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="currentColor"></path>
              </svg>
            </span>
          </Popover.Button>
          <Popover.Panel className="absolute z-10">
            <HexColorPicker color={textColor} onChange={setTextColor} />
            <div className="flex justify-center">
              {" "}
              <HexColorInput className="rounded-lg shadow-md w-3/4 p-1" color={textColor} onChange={setTextColor} />
            </div>
          </Popover.Panel>
        </Popover>

        <div className="mt-5 mb-3 flex justify-center">
          <button className="base-button" onClick={handleClick}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateCatgories;
