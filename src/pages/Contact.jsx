import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="bg-white text-gray-700 min-h-screen px-4 sm:px-10 pt-12">
      {/* Title */}
      <div className="text-center text-2xl sm:text-3xl font-semibold pt-6 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main Section */}
      <div className="my-12 flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto mb-28">
        {/* Image */}
        <img
          src={assets.contact_img}
          alt="Contact"
          className="w-full md:max-w-[480px] rounded-2xl shadow-md object-cover"
        />

        {/* Info Section */}
        <div className="flex flex-col justify-center items-start gap-6 w-full max-w-md bg-gray-50 p-8 rounded-2xl shadow-md">
          {/* Store Info */}
          <div>
            <h3 className="font-bold text-xl text-gray-800 mb-1">Our Store</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <b>Address:</b> 123 Forever Lane, New Delhi, India
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <b>Tel:</b> +91 12345 67890<br />
              <b>Email:</b> forever@gmail.com
            </p>
          </div>

          {/* Careers Info */}
          <div>
            <h3 className="font-bold text-xl text-gray-800 mb-1">Careers at Forever</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We're always looking for fresh talent. Interested in joining the Forever team?
              Email us your resume at <b>careers@forever.com</b> and let's grow together.
            </p>
          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            View Open Roles
          </button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default Contact;
