import React from "react";

const DisplayResult = ({rems}) => {

  const number =rems;
  const semicolon = `${rems}rem;`;

  const copyResult = (format) => {
    if (!format) return;
    if (format) navigator.clipboard.writeText(format);
  }

  return (
    <div className="h-24 flex items-center">
      {rems &&(
        <div>
          <div className="flex gap-2 items-center justify-end">
            <div className="text-orange-400 font-semibold mb-2.5">{number}</div>
            <input 
              type="button" 
              value="Copy" 
              onClick={copyResult(number)}
              className="
                        ml-2 
                        mb-2.5 
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
          <div className="flex gap-2 items-center justify-end">
            <div className="text-orange-400 font-semibold">{semicolon}</div>
            <input 
              type="button"
               value="Copy" 
              onClick={copyResult(semicolon)}
              className="
                        ml-2 
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
      )}
  </div>
  );
};

export default DisplayResult;