import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Nextarrow = (props) => {
    const {className,style,onClick}=props;
  return (
    <div  className={className}
    style={{...style,
      // borderRadius:"50%",
      display:"flex",
      width: "60px",
      height:"40px",
      // fontSize:"30px",
      justifyContent:"center",
      color:'#F38D7D',
      alignItems:"center"}}
    onClick={onClick}
    >
{/* <MdOutlineKeyboardArrowRight size={50} color='#F38D7D' /> */}
    </div>
  )
}

export default Nextarrow
