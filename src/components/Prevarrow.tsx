import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Prevarrow = (props) => {
  const {className,style,onClick}=props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: "80px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClick}
    >
       
      <MdOutlineKeyboardArrowLeft size={50} color='#F38D7D'/>
    </div>
  );
}

export default Prevarrow;
