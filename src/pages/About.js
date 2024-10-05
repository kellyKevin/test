// src/pages/About.js

import React from 'react';

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">About FarmWise</h1>
      <p className="mb-4">
        FarmWise is your ultimate solution for smart farming, designed to help farmers optimize their agricultural practices through data-driven insights and modern technology. Our mission is to provide tools that empower farmers to make informed decisions, improve productivity, and ensure sustainability.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>📊 **Data Analytics**: Access real-time data and analytics to track plant growth and livestock health.</li>
        <li>🌱 **Plant Recommendations**: Get suggestions for the best plants to grow based on your region and climate.</li>
        <li>🐄 **Animal Management**: Efficiently manage your livestock with health tracking and feeding schedules.</li>
        <li>🌍 **Community Support**: Join a network of farmers to share experiences, tips, and insights.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p>
        We envision a world where every farmer has access to the technology and resources they need to thrive. By leveraging modern farming practices and data-driven decision-making, we aim to enhance food security and promote sustainable agriculture worldwide.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
      <p>
        Whether you're a seasoned farmer or just starting, FarmWise is here to support you. Explore our features, connect with fellow farmers, and take your farming practice to the next level.
      </p>
    </div>
  );
};

export default About;
