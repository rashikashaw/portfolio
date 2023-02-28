'use client'
import { FormEvent, useState } from "react";

export const ContactSection = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Send")


  const handleValidation = () => {
    let tempErrors = {
      fullname: false,
      email: false,
      subject: false,
      message: false
    }
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/send", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        return;
      }
      if (!error) {
        setFullname("");
        setEmail("");
        setSubject("");
        setMessage("");
        setButtonText("Send")
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    }
  
  };

  return (
    <section id="contactMe"className="relative flex flex-col items-center justify-center min-h-full">
      <div className="flex flex-col items-center mt-36 justify-center">
        <h2 className="max-w-md text-4xl font-bold items-center justify-center lg:text-left">Contact</h2>
        <div className="container flex flex-col mb-36 mt-16 justify-center items-center space-y-12 lg:space-y-0 lg:flex-row">
          <div className="space-y-10 lg:px-20 lg:w-1/2">
            <form onSubmit={onSubmit} className="rounded-lg flex flex-col px-8 py-8">
              <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>
              <input 
                type="text" 
                name="fullname" 
                placeholder="Full-Name" 
                value={fullname}
                onChange={(e) => {setFullname(e.target.value);}} 
                required 
                className="bg-transparent placeholder-cyan-800 dark:placeholder-zinc-400 mb-4 mt-8 rounded-2xl border-cyan-300 border-2 p-4 focus:outline-none font-light text-cyan-800 dark:text-white text-md focus:placeholder-transparent focus:border-cyan-600 focus:dark:placeholder-transparent" />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => {setEmail(e.target.value);}} 
                required 
                className="bg-transparent placeholder-cyan-800 dark:placeholder-zinc-400  border-2 rounded-2xl border-cyan-300 p-4 focus:outline-none text-cyan-800 dark:text-white text-md font-light focus:placeholder-transparent focus:border-cyan-900 focus:dark:placeholder-transparent" />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={subject}
                onChange={(e) => {setSubject(e.target.value);}} 
                required 
                className="bg-transparent border-2 rounded-2xl placeholder-cyan-800 dark:placeholder-zinc-400 border-cyan-300 my-4 p-4 focus:outline-none text-cyan-800 dark:text-white text-md font-light focus:placeholder-transparent focus:border-cyan-600 focus:dark:placeholder-transparent" />
              <textarea 
                name="message" 
                placeholder="Message" 
                onChange={(e) => {setMessage(e.target.value);}} 
                value={message}
                required 
                className="bg-transparent border-2 rounded-2xl placeholder-cyan-800 border-cyan-300 dark:placeholder-zinc-400 p-4 h-40 focus:outline-none font-light text-cyan-800 dark:text-white text-md focus:placeholder-transparent focus:border-cyan-600 focus:dark:placeholder-transparent">
              </textarea>
              <div className="flex flex-row items-center justify-start">
                <button className="px-10 mt-8 py-2 bg-cyan-700 text-gray-50 font-light rounded-md text-lg flex flex-row items-center hover:opacity-80">
                  {buttonText}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              {showSuccessMessage && (
                <h3 className="text-green-700">Thank you, your message was sent successfully</h3>
                )}
                {showFailureMessage && (
                  <h3 className="text-red-700">Sorry there was an error in sending your message</h3>
                )}
            </form>
          </div>
          <div className="flex justify-center items-center my-36 space-y-10 lg:px-20 lg:w-1/2">
            <img src="/contact.png" alt="" />
          </div>
        </div>  
      </div>
    </section>
  );
}
function handleValidation() {
  throw new Error("Function not implemented.");
}

