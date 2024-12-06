import { useState } from 'react';
import Dog from './Components/Dog';

function App() {
  const [email, setEmail] = useState('');
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handleEmailInput = () => {
    window.alert(`Your email ${email} has been successfully be added`)

  }


  return (
    <>
      <Dog
      email={email}
      onChangeEmail={handleEmail}
      onSubmitEmail={handleEmailInput}
      />
    </>
  )
}

export default App
