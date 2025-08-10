import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At MG Technical Services, we are dedicated to providing top-notch solutions tailored to your needs.
          Our experienced team works tirelessly to deliver quality and excellence in every project.
        </p>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower our clients with reliable technical services that drive success and growth,
            through innovation, integrity, and commitment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Customer Satisfaction</li>
            <li>Quality & Excellence</li>
            <li>Transparency & Trust</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team is composed of highly skilled professionals who bring expertise, creativity,
            and dedication to every project we undertake.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
