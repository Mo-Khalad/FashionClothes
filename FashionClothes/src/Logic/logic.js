export const checkValidationFormInput=(state, { type, payload } )=>{   
switch (type) {
    case "name":
      return { ...state, name: payload };
    case "rePassword":
      return { ...state, rePassword: payload };
    case "phone":
      return { ...state, phone: payload };
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
    case "reset":
      return {
        ...state,
        name: payload,
        rePassword: payload,
        email: payload,
        phone: payload,
        password: payload,
      };
      case "error":
      return {        
        ...state,
        name:payload, 
        rePassword: payload,
        email: payload,
        phone: payload,
        password: payload,
      }; 
        default : return state
      }                     
}
export const currencyFormatter = new Intl.NumberFormat('en-US' , {
  style:'currency',
  currency:'USD'
})
export const totalPriceProduct=(price , count)=>{
return (price * count).toFixed(2)
}

export const totalPriceProducts=(item)=>{
 return item.reduce((total , item)=>{
    return ( total + (item.price * item.quantity))
},0).toFixed(2) 
}