// src/NumberSystemCalculator.js
import React, { useState } from 'react';
import './App.css';

const NumberSystemCalculator = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleDecimalChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setDecimal(value);

      if (value === "") {
        setBinary("");
        setOctal("");
        setHexadecimal("");
      } else {
        setBinary(Number(value).toString(2));
        setOctal(Number(value).toString(8));
        setHexadecimal(Number(value).toString(16).toUpperCase());
      }
    }
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;

    if (/^[01]*$/.test(value)) {
      setBinary(value);

      if (value === "") {
        setDecimal("");
        setOctal("");
        setHexadecimal("");
      } else {
        setDecimal(parseInt(value, 2).toString());
        setOctal(parseInt(value, 2).toString(8));
        setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
      }
    }
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;

    if (/^[0-7]*$/.test(value)) {
      setOctal(value);

      if (value === "") {
        setDecimal("");
        setBinary("");
        setHexadecimal("");
      } else {
        setDecimal(parseInt(value, 8).toString());
        setBinary(parseInt(value, 8).toString(2));
        setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
      }
    }
  };

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;

    if (/^[0-9a-fA-F]*$/.test(value)) {
      setHexadecimal(value);

      if (value === "") {
        setDecimal("");
        setBinary("");
        setOctal("");
      } else {
        setDecimal(parseInt(value, 16).toString());
        setBinary(parseInt(value, 16).toString(2));
        setOctal(parseInt(value, 16).toString(8));
      }
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h2 class="h2">Number System Calculator</h2>

        <label>
          Decimal:
          <div className="inp-border a1">
            <input
              className="input"
              type="text"
              value={decimal}
              onChange={handleDecimalChange}
              placeholder="Enter Decimal"
            />
          </div>
        </label>

        <label>
          Binary:
          <div className="inp-border a1">
            <input
              className="input"
              type="text"
              value={binary}
              onChange={handleBinaryChange}
              placeholder="Enter Binary"
            />
          </div>
        </label>

        <label>
          Octal:
          <div className="inp-border a1">
            <input
              className="input"
              type="text"
              value={octal}
              onChange={handleOctalChange}
              placeholder="Enter Octal"
            />
          </div>
        </label>

        <label>
          Hexadecimal:
          <div className="inp-border a1">
            <input
              className="input"
              type="text"
              value={hexadecimal}
              onChange={handleHexadecimalChange}
              placeholder="Enter Hexadecimal"
            />
          </div>
        </label>
           <div>
          Made by 
              < a href="https://github.com/kavyaballa1020" >  Balla Kavya</a>

          </div>
      </div>
    </div>
  );
};

export default NumberSystemCalculator;
