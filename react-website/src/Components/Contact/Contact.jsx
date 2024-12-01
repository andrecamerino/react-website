import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15f31938-6d57-421a-950e-ebf6428715bf"); // YES I KNOW ITS NOT ENCRYPTED IDK HOW TO DO THAT YET OK

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message! <img src={msg_icon} alt="" /></h3>
            <p>Feel free to contact us here.</p>
            <ul>
                <li><img src={mail_icon} alt="" />johndoe@gmail.com</li>
                <li><img src={phone_icon} alt="" />+65 022-341-4457</li>
                <li><img src={location_icon} alt="" />69 St Patricks Road, Kilbirne<br/>Wellington 6969, New Zealand</li>
            </ul>
        </div>
        <div className="contact-col form">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact