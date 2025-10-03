import React from 'react';
// To use icons, first install react-icons: npm install react-icons
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

// --- Data for the contact cards on the left ---
// This makes the code cleaner and easier to manage.
const contactInfo = [
  {
    icon: <Mail size={24} className="text-blue-800" />,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    details: 'corpcomm@cavinkare.com',
  },
  {
    icon: <MessageSquare size={24} className="text-blue-800" />,
    title: 'Live Chat',
    description: 'Our friendly team is here to help.',
    details: 'Start new chat',
  },
  {
    icon: <MapPin size={24} className="text-blue-800" />,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    details: 'CavinKare Pvt Ltd, No. 12, Cenotaph Road, Teynampet, Chennai.',
  },
  {
    icon: <Phone size={24} className="text-blue-800" />,
    title: 'Phone',
    description: 'Mon-Fri from 9am to 6pm.',
    details: '044 22251011 / 12 / 13',
  },
];

// --- A reusable card component for the left side ---
const InfoCard = ({ icon, title, description, details }) => (
  <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px]">
    <div>
      <div className="p-2 bg-gray-100 rounded-lg w-max mb-4">{icon}</div>
      <h3 className="text-slate-800 text-2xl font-extrabold font-['Host_Grotesk'] leading-tight">{title}</h3>
      <p className="text-gray-400 text-base font-normal font-['Host_Grotesk'] leading-normal">{description}</p>
    </div>
    <p className="text-slate-800 text-base font-extrabold font-['Host_Grotesk'] leading-loose mt-4">{details}</p>
  </div>
);

function Form() {
  return (
    <section className="bg-gray-100 w-full font-['Host_Grotesk'] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-slate-800 text-5xl md:text-7xl font-extrabold leading-tight">
            Chat to our friendly team
          </h1>
          <p className="text-gray-600 text-xl font-normal font-['Inter'] leading-loose mt-4">
            We’d love to hear from you. Please fill out this form or shoot us an email.
          </p>
        </div>

        {/* Main Content: Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Contact Info Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-slate-50 rounded-3xl p-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div>
                <label htmlFor="firstName" className="text-gray-600 text-sm font-medium mb-1 block">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
              {/* Last Name Input */}
              <div>
                <label htmlFor="lastName" className="text-gray-600 text-sm font-medium mb-1 block">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="text-gray-600 text-sm font-medium mb-1 block">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="text-gray-600 text-sm font-medium mb-1 block">Message</label>
              <textarea
                id="message"
                placeholder="Leave us a message..."
                rows="5"
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              ></textarea>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="w-5 h-5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="text-gray-500 text-base">
                You agree to our friendly <a href="#" className="underline hover:text-blue-700">privacy policy.</a>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full px-5 py-3 bg-gradient-to-br from-slate-800 to-blue-800 rounded-xl text-white text-base font-semibold leading-normal hover:opacity-90 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;