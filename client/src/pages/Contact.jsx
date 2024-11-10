import Nav from "../components/Nav";
import "../css/Contact.css";
import { useState } from "react";
function Contact() {
  const [user, setUser] = useState({
    name: "", email: "", message: ""
  });
  let name, value;
  function handleInput(e) {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  // const PostData = async (e) => {
  //   e.preventDefault();
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const responseData = await response.json();
        alert("Message sent successfully");
        setUser({ name: "", email: "", message: "" });
        console.log(responseData);

      }
    } catch (error) {
      console.log("Contact", error);
    }
  }
  return (
    <div>
      <Nav></Nav>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="contact-container">
          <label htmlFor="Name" className="label-name">Name</label>
          <input className="input-name" value={user.name} type="text" onChange={handleInput} placeholder="Enter your name" name="name" />

          <label htmlFor="email" className="label-email">Email</label>
          <input className="input-email" value={user.email} type="email" onChange={handleInput} placeholder="Enter your email address" name="email" id="email" />

          <label htmlFor="message" className="label-msg">Message</label>
          <input name="message" className="input-msg" type="text" value={user.message} onChange={handleInput} id="message" placeholder="Enter your Message" />
          <button type="submit" className="btn" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;