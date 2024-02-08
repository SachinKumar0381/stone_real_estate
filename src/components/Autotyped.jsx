import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Autotyped = ({strings,typeSpeed,backSpeed,classname}) => {
    const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop: true
    };

    typedRef.current = new Typed(`.${classname}`, options);

    // Cleanup on component unmount
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);
  return (
    
        <span className={classname}/>
    
  )
}

export default Autotyped