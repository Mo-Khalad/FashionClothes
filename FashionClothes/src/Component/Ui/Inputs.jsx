import React ,{useContext} from "react";
import { DisplayContext } from "../../Store/DisplayContext.js";
const InputData = ({Regex , errorSign , handleBlue , name , handleChange , type , 
className, id , value , error , rePasswordError})=>{   
const DisplayCrx=useContext(DisplayContext)
//console.log('componet input');


return (
    <>
     <input
      className={`${className}`}
      name={name}
      type={type}
      id={id}
      placeholder={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlue}
    />
            <h2 className={`errorLoginAndRegister w-100 text-center opacity-0 ${
                DisplayCrx.error &&
                errorSign && name ? (!Regex.test(value) || rePasswordError)&& 'opacity-100': rePasswordError ===true && 
                'opacity-100'
            }
            }`}>{error}</h2> 
</> )
};
export default InputData;
