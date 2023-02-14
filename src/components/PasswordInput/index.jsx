import { useEffect, useState } from "react";
import './styles.scss'
const PasswordInput = ({placeholderTitle,onChangePassword}) => {
  const [passwordValue,setPasswordValue] = useState('');

  useEffect(()=> {
    onChangePassword(passwordValue);
  },[passwordValue])
  
  return (
    <div className="input-section">
      <input 
        className="input-section__input" 
        type='text'
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder={placeholderTitle}/>
    </div>
  )
}

export default PasswordInput;