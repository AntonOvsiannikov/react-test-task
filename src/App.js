import 'normalize.css';
import { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import './styles/index.scss';
import CheckedSection from './components/CheckedSection';
import {checkPasswordLvl} from './util'

function App() {
  const [checkedState,setCheckedState] = useState(['','','']);

  const checkedSectionTitle = ['Ease','Medium','Strong']
  const onChangePassword = (passwordValue) => {
    setCheckedState(checkPasswordLvl(passwordValue));
  }

  return (
    <div className="app">
      <PasswordInput 
        placeholderTitle = {'Test password strength'}
        onChangePassword={onChangePassword}/>
      <CheckedSection>
        {checkedSectionTitle.map(
          (arrItem,index) => {
            return <section 
              key={arrItem} 
              className={`checked-section__block ${checkedState[index]}`}>{arrItem}</section>
          }
          )
        }
      </CheckedSection>
    </div>
  );
}

export default App;
