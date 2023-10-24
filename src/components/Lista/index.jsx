import './Lista.css';
import React, { useState } from 'react';

const Lista = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleInfo = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="info-box">
        <div className="info-header" onClick={toggleInfo}>
          <div className="info-title">{title}</div>
          <div className={`arrow ${isOpen ? 'up' : 'down'}`}></div>
        </div>
        {isOpen && (
          <div className="info-content">
            {Array.isArray(children) ? (
              <ul>
                {children.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              children
            )}
          </div>
        )}
      </div>
    );
  };

export default Lista;
