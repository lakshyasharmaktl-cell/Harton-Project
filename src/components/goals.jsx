import React, { useState } from 'react';

const goalsData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build modern websites and web applications.',
    courses: [
      'Cyber Secured Web Development',
      'Course in Web Technology (CWT)',
      'Assistant PHP Developer (APD)',
      'PHP and MySQL Web Development'
    ]
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    description: 'Master Data Analytics and Artificial Intelligence.',
    courses: [
      'Artificial Intelligence Application',
      'Data Analysis Associate (DAA)',
      'Artificial Intelligence Associate',
      'Junior Data Analyst (JDA)'
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Secure networks and protect digital assets.',
    courses: [
      'Junior Cyber Security Associate',
      'Cyber Security & Social Media Analysis',
      'Cyber Security Associate (JCSA)'
    ]
  },
  {
    id: 'software-eng',
    title: 'Software Engineering',
    description: 'Learn core programming and software logic.',
    courses: [
      'Course in Software Development',
      'Programming with Python',
      'Java Programming Fundamentals',
      'Advanced Java Programming'
    ]
  }
];

export default function Goals() {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Hartron Skill Center</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What is your career goal?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Select a path to see the recommended courses specifically curated for your success.
          </p>
        </div>

        {/* Goals Selection Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {goalsData.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal)}
              className={`p-6 border-2 rounded-xl text-left transition-all duration-200 shadow-sm hover:shadow-md ${
                selectedGoal?.id === goal.id
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-white bg-white hover:border-gray-200'
              }`}
            >
              <h3 className="text-lg font-bold text-gray-900">{goal.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{goal.description}</p>
            </button>
          ))}
        </div>

        {/* Suggested Courses Section */}
        {selectedGoal && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                Recommended for {selectedGoal.title}
              </h3>
            </div>
            <div className="p-6">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {selectedGoal.courses.map((course, index) => (
                  <li 
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 group hover:bg-white hover:border-blue-300 transition-colors"
                  >
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 font-medium">{course}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
                  Enrol Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}