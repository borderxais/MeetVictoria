import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, Target, LineChart, Users, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onNext: () => void;
  parentName: string;
  childData: {
    name: string;
    age: string;
    interests: string[];
    grade: string;
  };
}

const features = [
  {
    icon: Brain,
    title: 'Talent Discovery',
    description: 'AI-powered assessment of strengths and potential',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Personalized Learning',
    description: 'Customized learning paths and goals',
    color: 'green'
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Real-time monitoring and insights',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Connect with tutors and specialists',
    color: 'pink'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Optimized activity planning',
    color: 'orange'
  },
  {
    icon: GraduationCap,
    title: 'College Planning',
    description: 'Long-term academic strategy',
    color: 'indigo'
  }
];

export function Features({ onNext, parentName, childData }: FeaturesProps) {
  const navigate = useNavigate();

  const handleStart = () => {
    onNext();
    navigate('/home');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome aboard, {parentName}!
        </h2>
        <p className="text-xl text-gray-600">
          Here's how Victoria will help {childData.name} excel
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`bg-${feature.color}-50 p-6 rounded-xl`}
            >
              <Icon className={`w-10 h-10 text-${feature.color}-600 mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
        >
          <span>Start Your Journey</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}