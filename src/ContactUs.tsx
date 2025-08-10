import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>

        <section aria-label="Phone Numbers" className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            Mobile Numbers
          </h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3 bg-indigo-50 border border-indigo-200 rounded-lg px-5 py-3 text-indigo-700 font-medium hover:bg-indigo-100 transition cursor-pointer select-text">
              +971 5692 92410
            </p>
            <p className="flex items-center gap-3 bg-indigo-50 border border-indigo-200 rounded-lg px-5 py-3 text-indigo-700 font-medium hover:bg-indigo-100 transition cursor-pointer select-text">
              +971 5664 10177
            </p>
          </div>
        </section>

        <section aria-label="Email Address" className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            Email
          </h2>
          <p className="bg-indigo-50 border border-indigo-200 rounded-lg px-5 py-3 text-indigo-700 font-medium hover:bg-indigo-100 transition cursor-pointer select-text">
            chafaqdogar33@gmail.com
          </p>
        </section>

        <section aria-label="Address">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            Address
          </h2>
          <address className="not-italic bg-indigo-50 border border-indigo-200 rounded-lg px-5 py-3 text-indigo-700 font-medium hover:bg-indigo-100 transition select-text">
            MG Technical Services LLC<br />
            Land DM N0: 4413-123, Plot No:3210-0, BN Complex, Land Area AI Muteena.<br />
            Dubai, UAE<br />
          </address>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
