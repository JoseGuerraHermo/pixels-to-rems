import React, { useState, useEffect } from "react";
import { InitConverter, updateConverter } from '../services/localStorageServices';

const Base = ({shareBaseValue}) => {
  const [baseValue, setBaseValue] = useState('');
  const [updateForm, setUpdateForm] = useState(false);
  const [updateBase, setUpdateBase] = useState('');

  useEffect(() => {
    setBaseValue(InitConverter())
    shareBaseValue(baseValue);
  }, [baseValue,shareBaseValue]);

  const toggleUpdateForm = () => {
    setUpdateForm(!updateForm);
  }

  const handleUpdateBase = (event) => {
    event.preventDefault();
    if (updateBase <= 0 || updateBase === '') return;
    const update = updateConverter(updateBase);
    if (update) setBaseValue(updateBase);
    if (!update) setBaseValue('Error!');
    setUpdateForm(!updateForm);
    setUpdateBase('');
  }

  const handleUpdateBaseInput = (event) => {
    const value = event.target.value;
    if (value.length > 2 || value > 40) return false;
    setUpdateBase(value);
  }

  return (
    <div className="h-12 w-full flex justify-center">
      <div className="flex justify-center items-center">
        {updateForm && (
          <div>
            <form onSubmit={handleUpdateBase}>
              <input 
                type="number" 
                placeholder="px"
                min="1"
                max="40"
                value={updateBase}
                onChange={handleUpdateBaseInput}
                className="
                          appearance-none 
                          bg-transparent 
                          text-orange-400 
                          font-semibold 
                          border 
                          border-orange-400 
                          rounded 
                          py-1 
                          w-32 
                          px-5 
                          focus:outline-none 
                          focus:border-orange-400 
                          placeholder-orange-400
                          "
              />
              <input 
                type="submit" 
                value="Update"
                className="
                          ml-2.5 
                          bg-transparent 
                          hover:bg-orange-400 
                          text-orange-400 
                          font-semibold 
                          hover:text-white 
                          py-1 
                          px-4 
                          border 
                          border-orange-400 
                          hover:border-transparent 
                          rounded
                          "
              />
            </form>
          </div>
        )}
        {!updateForm && (
          <div className="text-orange-400 font-semibold">Current base: {baseValue}{!isNaN(baseValue) ? "px." : ''}</div>
        )}
        <input 
          type="button" 
          value={`${updateForm ? 'Nah...leave it' : 'Set other value'}`} 
          onClick={toggleUpdateForm}
          className="
                    ml-2.5 
                    bg-transparent 
                    hover:bg-orange-400 
                    text-orange-400 
                    font-semibold 
                    hover:text-white 
                    py-1 
                    px-4 
                    border 
                    border-orange-400 
                    hover:border-transparent 
                    rounded
                    "
        />
      </div>
    </div>
  );
}

export default Base;