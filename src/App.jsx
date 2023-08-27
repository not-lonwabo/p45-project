import { useState } from 'react';
import './App.css'
import arrow from './assets/arrow.svg'
import avi from './assets/face.svg'
import Button from './components/Button';
import InputBox from './components/InputBox';
import CalendarInputBox from './components/CalendarInputBox';
import RadioButton from './components/RadioButton';
import mars from './assets/mars-symbol.svg';
import marsWhite from './assets/mars-symbol--white.svg';
import venus from './assets/venus-symbol.svg';
import venusWhite from './assets/venus-symbol--white.svg';
import card from './assets/card.svg';
import cardWhite from './assets/card--white.svg';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    custID: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    custID: ''
  });

  const handleClick = () => {
    setIsVisible(!isVisible);
    document.getElementById('paragraph').scrollIntoView({behavior: 'smooth'});
  }

  const handleInputChange = (inputName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: value
    }));
  }

  const handleCancel = () => {
    console.log('?????? ');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      custID: ''
    });
    setErrors({
      name: '',
      email: '',
      mobile: '',
      custID: ''
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form saved with details -> ', formData);
      return;
    }
    return;
  }

  const validate = () => {
    const newErrors = {};

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const nameRegex = /^[A-Za-z\s]*$/;
    const mobileRegex = /^\d+$/;

    if (formData.name.trim() === '') {
      newErrors.name = 'Name cannot be empty';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email cannot be empty';
    }

    if (formData.mobile.trim() === '') {
      newErrors.mobile = 'Mobile cannot be empty';
    }

    if (formData.custID.trim() === '') {
      newErrors.custID = 'Customer ID cannot be empty';
    }

    if (formData.mobile.trim() !== '') {
      const isValidName = nameRegex.test(formData.name);
      if (!isValidName) {
        newErrors.name = 'Name can only contain letters and spaces';
      }
    }

    if (formData.email.trim() !== '') {
      const isValidEmail = emailRegex.test(formData.email);
      if (!isValidEmail) {
        newErrors.email = 'Invalid email address';
      }
    }

    if (formData.mobile.trim() !== '') {
      const isValidMobile = mobileRegex.test(formData.mobile);
      if (!isValidMobile) {
        newErrors.mobile = 'Mobile can only contain numbers';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <>
      <div className="leftClass">
        <img
          alt="avatar"
          src={avi}
          width="60%"
          className="avatar"
        />
        <div>
          <h2>Front end challenge!</h2>
          <h4>This is a design that you'll need to code up and impress us</h4>
        </div>
        <div className="arrowContainer" onClick={() => handleClick()}>
          <img
            alt="chevron"
            src={arrow}
            width="30%"
            className={isVisible ? 'faceLeft' : ''}
          />
        </div>
      </div>
      <div className="rightClass"  id='paragraph'>
        <div className={`${isVisible ? 'slidePageIn' : 'slidePageOut'}`}>
          <h2>My world today</h2>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac tupis egestas. Vestibulum tortor quam, feigiat vitae, ultricies eget, tempor sit amet, ante. <u className='bolded'>View all days</u> eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec nom enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat</p>
        </div>
        <form onSubmit={handleSubmit} className={isVisible ? 'hideForm' : ''}>
          <InputBox
            label="Name"
            type="text"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            error={errors.name}
          />
          <RadioButton
            radioValues={[
              {icon: mars, iconActive: marsWhite, value: "Male"},
              {icon: venus, iconActive: venusWhite, value:"Female"}
            ]}
            label="Gender"
          />
          <CalendarInputBox
            label="Date of Birth"
            type="text"
          />
          <InputBox
            label="Email"
            type="text"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
          />
          <InputBox
            label="Mobile"
            type="text"
            value={formData.mobile}
            onChange={(value) => handleInputChange('mobile', value)}
            error={errors.mobile}
          />
          <InputBox
            label="Customer ID"
            type="text"
            value={formData.custID}
            onChange={(value) => handleInputChange('custID', value)}
            error={errors.custID}
          />
          <div>
            <br/>
            <br/>
            <br/>
          </div>
          <RadioButton
            radioValues={[
              {icon: card, iconActive: cardWhite, value: "Classic"},
              {icon: card, iconActive: cardWhite, value: "Silver"},
              {icon: card, iconActive: cardWhite, value: "Gold"}
            ]}
            label="Membership"
          />
          <div className='buttonRow'>
            <Button btnText={'CANCEL'} onClick={handleCancel}/>
            <Button btnText={'SAVE'} primary={true} type='submit' onClick={() => {}}/>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
