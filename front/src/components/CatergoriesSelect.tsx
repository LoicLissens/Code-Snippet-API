import React, { useState, useEffect } from "react";
import { fetchCategories } from "../modules/client/api";
import { useFetch } from "../modules/hooks/useFetch";
import { Listbox } from "@headlessui/react";
import {Catergorie} from '../modules/models'


const CategoriesSelect = () => {
  const [categories, catLoading, catErr] = useFetch([], fetchCategories);
  const [selectedCategories, setSelectedCategories] = useState<Catergorie | undefined>([]);
  useEffect(() => {
    setSelectedCategories(categories[0])
  },[categories])
  const loader = (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z" opacity=".5" fill="currentColor"></path>
      <path d="M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8z" fill="currentColor">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"></animateTransform>
      </path>
    </svg>
  );
  return (
    <Listbox value={selectedCategories} onChange={setSelectedCategories}>
      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
        {(catLoading || !selectedCategories) ? loader : selectedCategories.name}
       
      </Listbox.Button>
      <Listbox.Options className="absolute  py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {categories.length > 0 &&
          categories.map((cat:Catergorie) => (
            <Listbox.Option key={cat.id} value={categories.id} className="cursor-pointer">
              {cat.name}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CategoriesSelect;
