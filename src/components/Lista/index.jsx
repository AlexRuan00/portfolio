import './Lista.css';
import React, { useState, useEffect } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const Lista = ({ title, children }) => {
  const [project, setProject] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const item = children[0];
    if (item.includes("http")) {
      setProject(true)
    } 

  }, []);

  return (
    <div className="info-box">
      <div className="info-header" onClick={toggleInfo}>
        <div className="info-title">{title}</div>
        {isOpen ? (
          <BiUpArrowAlt />
        ) : (
          <BiDownArrowAlt />
        )}
      </div>
      
      {
  isOpen && (
    <div className="info-content">
      {Array.isArray(children) ? (
        project ? ( 
          <ul>
            {children.map((item, index) => (
              <a  href={item} key={index} style={{ color: '#f7f3f3' }}>Rick and Morty App</a>
            ))}
          </ul>
        ) : ( 
          <ul>
            {children.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      ) : (
        children
      )}
    </div>
  )
}


    </div>
  );
};

export default Lista;
