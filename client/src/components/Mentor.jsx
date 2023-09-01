import React, { useState } from 'react';
import image from "../assets/MentorImage.png";
// import Background from "../assets/mentor-bg-1.png";
// import Background1 from "../assets/mentor-bg-2.png";
import Background2 from "../assets/mentor-bg-3.png";

const TextComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  // };

  if (showForm) {
    return (
      // <form onSubmit={handleSubmit}>
      <div className='w-3/4'>
      <h1
      className="text-3xl font-bold text-[#0A033C] sm:text-6xl md:text-start text-center">
      Want to share your knowledge? Join as a Mentor{" "}
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600 md:text-start text-center">
      High-definition video is video of higher resolution and quality than
      standard-definition. While there is no standardized meaning for
      high-definition, generally any video.
    </p>
      <form className='py-10'>
        <div className="mb-4">
          <label htmlFor="email" className="text-subscribe-purple">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 rounded bg-white-700 text-white border-b border-gray-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-subscribe-purple">Description</label>
          <textarea style={{ width: '100%', height: '110px', resize: 'none' }} id="description" className="w-full px-4 py-2 rounded bg-white-700 border-b border-gray-500" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-medium-purple hover:bg-gradient-purple text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
      </div>
    );
  }
  return (
    <div>
      <h1
        className="text-3xl font-bold text-[#0A033C] sm:text-6xl md:text-start text-center">
        Want to share your knowledge? Join as a Mentor{" "}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 md:text-start text-center">
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video.
      </p>
      <div className="py-10">
        <button
        onClick={handleClick} 
          href="/"
          className="rounded-md bg-medium-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dark-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 s"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

const Mentor = () => {
  
  return (
    
    <div className="w-full flex flex-wrap"> 
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center px-8 py-10 w-3/4 mx-auto">
      <img
        src={image}
        alt=""
        className="lg:w-80 sm:w-64 mb-8 lg:mb-0 lg:mr-8"/>
      
      <TextComponent />
      </div>
      <div className="pt-20 w-1/4 ">
          <img
          className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
            src={Background2}
            alt=""/>
        </div>
      
        {/* <div className="py-5">
          <img
            src={Background}
            alt=""
            className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
          />
        </div>

        <div className="py-5 items-end">
          <img
            src={Background1}
            alt=""
            className="w-24 md:w-32 lg:w-40 mb-8 md:mb-0 lg:mr-8"
          />
        </div> */}

    </div>
  

  );
};

export default Mentor;
