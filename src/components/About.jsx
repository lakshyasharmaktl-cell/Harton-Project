import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-700 text-sm font-bold tracking-widest uppercase mb-2">
            Empowering Digital India
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About Harton <span className="text-blue-600">Computer Centre</span>
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Placeholder */}
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl w-full h-80 md:h-96 shadow-2xl flex items-center justify-center text-white text-xl font-semibold overflow-hidden">
               {/* Replace with an actual image tag if you have one */}
               <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Learning Environment" 
                className="object-cover w-full h-full opacity-80"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-gray-600 text-sm">Practical Training</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Your Gateway to Information Technology & Skill Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Harton Computer Centre is a premier institution dedicated to bridging the digital divide. 
              Authorized by the Haryana State Electronics Development Corporation Limited, we provide 
              high-quality technical education to students and professionals alike.
            </p>
            
            <ul className="space-y-4">
              {[
                "Government Recognized Certifications",
                "Advanced Lab Infrastructure",
                "Expert Faculty with Industrial Experience",
                "Placement Assistance for Meritorious Students"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-gray-200">
          {[
            { label: "Students Trained", value: "5000+" },
            { label: "Years Excellence", value: "15+" },
            { label: "Expert Trainers", value: "20+" },
            { label: "Courses Offered", value: "50+" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;