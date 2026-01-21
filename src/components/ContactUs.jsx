import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const ContactUs = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3aca9d1c-cfc2-476b-aa8b-973c7fb377b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error("Something went wrong!");
      setResult("");

    }
  };
  return (
    <motion.div 
             initial={{opacity: 0, x:-200}}
             transition={{duration: 1}}
             whileInView={{opacity: 1, x:0}}
             viewport={{once: true}}
             className='container mx-auto py-20 px-6 md:px-20 lg:px-28 w-full overflow-hidden' id="ContactUs">
        <h1 className='text-center text-2xl sm:text-4xl font-bold mb-2'>Contact
        <span className='underline underline-offset-4 decoration-1 under font-light ml-1'>Us</span></h1>
        <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>Get in touch with us! we’re here to help and would love to hear from you</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' action="">
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>Your Name
                <input className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
                type="text" name='name' placeholder='Enter your name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                <input className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
                type="email" name='email' placeholder='Enter your Email' required/>
            </div>
         </div>
         <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 
            rounded py-3 px-4 mt-2 resize-none h-48'
            name="Message" placeholder='Message' required></textarea>
         </div>
         <button className='bg-blue-600 cursor-pointer text-white py-2 px-12 mb-10 rounded mx-auto flex justify-center'
         type="submit">{result ? result : "Send Message"}</button>
        </form>
    </motion.div>
  )
}

export default ContactUs
