import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  ShieldCheck, 
  BrainCircuit, 
  Layers, 
  ChevronLeft, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

const goalsData = [
  {
    id: 'web',
    title: 'Full Stack Developer',
    description: 'Build end-to-end web applications and modern interfaces.',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-400',
    courses: [
      'Cyber Secured Web Development',
      'Course in Web Technology (CWT)',
      'Assistant PHP Developer (APD)',
      'PHP and MySQL Web Development'
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Security Expert',
    description: 'Protect digital infrastructure and analyze threats.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
    courses: [
      'Junior Cyber Security Associate',
      'Cyber Security & Social Media Analysis',
      'Cyber Security Associate (JCSA)',
      'Course in IT Foundation and Tools'
    ]
  },
  {
    id: 'ai',
    title: 'AI & Data Specialist',
    description: 'Master machine learning and data-driven insights.',
    icon: <BrainCircuit className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-400',
    courses: [
      'Artificial Intelligence Application',
      'Data Analysis Associate (DAA)',
      'Junior Data Analyst (JDA)',
      'Programming with Python'
    ]
  },
  {
    id: 'software',
    title: 'Software Engineer',
    description: 'Develop robust desktop and enterprise software.',
    icon: <Layers className="w-8 h-8" />,
    color: 'from-orange-500 to-amber-400',
    courses: [
      'Course in Software Development',
      'Java Programming Fundamentals',
      'Advanced Java Programming',
      'C++ Programming with OOP'
    ]
  }
];

export default function goals2() {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex items-center justify-center p-6 selection:bg-blue-500/30">
      {/* Background Abstract Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <AnimatePresence mode="wait">
          {!selectedGoal ? (
            <motion.div
              key="selection-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
                >
                  <Sparkles size={14} />
                  Career Path Finder
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
                  What do you want to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">become?</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goalsData.map((goal, index) => (
                  <motion.button
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.02, translateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGoal(goal)}
                    className="group relative text-left p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-500/50 transition-colors backdrop-blur-xl overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                    
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${goal.color} mb-6 shadow-lg shadow-blue-500/20`}>
                      {goal.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{goal.description}</p>
                    
                    <div className="mt-6 flex items-center text-sm font-bold text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      View Courses <ExternalLink className="ml-2 w-4 h-4" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="course-reveal"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-8"
            >
              <button 
                onClick={() => setSelectedGoal(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-full group-hover:bg-slate-800 transition-colors">
                  <ChevronLeft size={20} />
                </div>
                Back to Goals
              </button>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-[2rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div className="flex items-center gap-6">
                    <div className={`p-5 rounded-3xl bg-gradient-to-br ${selectedGoal.color} shadow-xl shadow-blue-500/10`}>
                      {selectedGoal.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedGoal.title}</h2>
                      <p className="text-slate-400">Curated Hartron skill programs for your goal</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {selectedGoal.courses.map((course, i) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex items-center justify-between p-6 rounded-2xl bg-slate-900/50 border border-slate-700/30 hover:border-blue-500/40 hover:bg-slate-800 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        <span className="text-lg font-medium text-slate-200">{course}</span>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-slate-700 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                        Details
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-4 rounded-2xl bg-white text-slate-900 font-black text-lg shadow-xl hover:shadow-white/10 transition-all"
                  >
                    Enroll in this Path
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}