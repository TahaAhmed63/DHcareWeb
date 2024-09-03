import React, { useEffect, useState } from 'react'

const HomeSecOneText = (props) => {
    const [allPara, setAllPara] = useState([]);

    // Destructure props
    const { para1, para2, para3, para4 } = props;
  
    // Use useEffect to update the state when props change
    useEffect(() => {
      // Set the state to an array containing all the paragraphs
      setAllPara([para1, para2, para3, para4]);
    }, [para1, para2, para3, para4]); // Only runs when any of these props change
  
    return (
      <div>
        {allPara.map((para, index) => (
          <p key={index} className='text-center'>{para}</p>
        ))}
      </div>
    );
  };
export default HomeSecOneText