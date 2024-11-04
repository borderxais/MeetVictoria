import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Target, LineChart, Store, Calendar, GraduationCap } from 'lucide-react';

export function FeatureNavigation() {
  const location = useLocation();
  
  const features = [
    {
      icon: Brain,
      title: "Talent",
      path: "/features/talent-discovery",
      description: "AI-powered assessment"
    },
    {
      icon: Target,
      title: "Learning",
      path: "/features/personalized-learning",
      description: "Custom strategies"
    },
    {
      icon: LineChart,
      title: "Progress",
      path: "/features/progress-tracking",
      description: "Real-time monitoring"
    },
    {
      icon: Store,
      title: "Marketplace",
      path: "/features/expert-coordination",
      description: "Education resources"
    },
    {
      icon: Calendar,
      title: "Optimization",
      path: "/features/curriculum-optimization",
      description: "Schedule balancing"
    },
    {
      icon: GraduationCap,
      title: "Admission",
      path: "/features/talent-development",
      description: "College preparation"
    }
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="font-medium">Victory AI</span>
          </Link>
          
          <nav className="flex space-x-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = location.pathname === feature.path;
              
              return (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className={`w-5 h-5 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`} />
                    <span className="text-xs font-medium mt-1">{feature.title}</span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}