import React, { useState } from 'react';
import DisplayResult from './components/DisplayResult';
import Base from './components/Base';
import Form from './components/Form';
import Footer from './components/Footer'


const PixelToRem = () => {
  
  const [result, setResult] = useState('');
  const [initialValue, setInitialValue] = useState('');

  const handleShareBaseValue =(value)=> {
    setInitialValue(value)
  }

  const handleSubmit = (value) => {
    setResult(value);
  }

  return (
    <div className="bg-teal-900 flex flex-col w-96 items-center">
      <Base shareBaseValue={handleShareBaseValue}/>
      <Form submit={handleSubmit} initialValue={initialValue}/>
      <DisplayResult rems={result} />
      <Footer />
    </div>
  );
}

export default PixelToRem;
