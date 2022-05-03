import React, { useState } from "react";
import { format } from '../helpers/format';

const Form = ({submit, initialValue}) => {

  const [pixels, setPixels] = useState('');

  const handlePixels = (event) => {
    const value = event.target.value;
    if (value.length > 7 || value > 4000) return false;
    setPixels(value);
  }
  const makeCalculations = (event) => {
    event.preventDefault();
    const calculations = format( Number(pixels) / Number(initialValue)) ;
    submit(calculations);
  }
  const resetValues = () => {
    setPixels('');
    submit('');
  }

  return (
    <div className="h-12 w-full flex">
      <form 
        onSubmit={makeCalculations}
        onReset={resetValues}
        className="m-auto"
      >
        <input 
          type="number" 
          min="0"
          step=".01"
          max="4000"
          placeholder="px"
          value={pixels}
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
          onChange={handlePixels}
        />
        <input 
          type="submit" 
          value="Get in rems"
          className="
                    mx-2.5 
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
        <input 
          type="reset" 
          placeholder="Clear"
          className="
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
  );
}

export default Form;