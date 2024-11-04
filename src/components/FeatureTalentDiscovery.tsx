import React, { useState } from 'react';
import { FeatureLayout } from './FeatureLayout';
import { ProfileSection } from './talent-discovery/ProfileSection';
import { ChatInterface } from './talent-discovery/ChatInterface';
import { SkillTree } from './talent-discovery/SkillTree';
import { TalentDiscoveryHero } from './talent-discovery/TalentDiscoveryHero';
import { CognitiveAnalysis } from './talent-discovery/CognitiveAnalysis';
import { CareerProjection } from './talent-discovery/CareerProjection';

// Profile data with differentiated content
const profiles = {
  '1': {
    id: '1',
    name: 'Emma',
    age: 8,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '2 days ago',
    skills: [
      { category: 'Mathematics', level: 3, progress: 85 },
      { category: 'Arts', level: 4, progress: 92 },
      { category: 'Science', level: 3, progress: 78 },
      { category: 'Music', level: 4, progress: 88 }
    ],
    cognitiveProfile: {
      strengths: [
        {
          title: 'Strong Artistic Expression',
          description: 'Shows exceptional creativity and artistic talent',
          examples: ['Advanced drawing skills', 'Musical composition ability']
        },
        {
          title: 'Pattern Recognition',
          description: 'Excellent at identifying patterns and relationships',
          examples: ['Quick grasp of mathematical sequences', 'Musical pattern recognition']
        }
      ],
      learningStyle: 'Visual-Spatial',
      careerPaths: ['Creative Arts', 'Music Education', 'Architecture']
    }
  },
  '2': {
    id: '2',
    name: 'Lucas',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1595454223600-91fbdeb71f38?auto=format&fit=crop&q=80',
    lastActive: '5 hours ago',
    skills: [
      { category: 'Mathematics', level: 4, progress: 95 },
      { category: 'Programming', level: 3, progress: 82 },
      { category: 'Science', level: 4, progress: 90 },
      { category: 'Language', level: 3, progress: 75 }
    ],
    cognitiveProfile: {
      strengths: [
        {
          title: 'Analytical Thinking',
          description: 'Exceptional ability in logical reasoning and problem-solving',
          examples: ['Advanced mathematics performance', 'Complex problem decomposition']
        },
        {
          title: 'Scientific Curiosity',
          description: 'Strong drive to understand how things work',
          examples: ['Independent research projects', 'Scientific experimentation']
        }
      ],
      learningStyle: 'Logical-Mathematical',
      careerPaths: ['Computer Science', 'Engineering', 'Scientific Research']
    }
  }
};

export function FeatureTalentDiscovery() {
  const [activeProfile, setActiveProfile] = useState('1');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'victoria',
      content: `Hi! I'm Victoria, your AI co-pilot for discovering ${profiles[activeProfile].name}'s unique talents. Would you like to explore their current interests and abilities?`,
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = (content: string, attachments?: Message['attachments']) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content,
      timestamp: new Date().toISOString(),
      attachments
    };
    setMessages([...messages, newMessage]);
  };

  const handleProfileChange = (profileId: string) => {
    setActiveProfile(profileId);
    // Reset chat with personalized greeting for the selected profile
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'victoria',
        content: `Switching to ${profiles[profileId].name}'s profile. What would you like to know about their talents and development?`,
        timestamp: new Date().toISOString()
      }
    ]);
  };

  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TalentDiscoveryHero />
        
        {/* Chat Interface */}
        <div className="mb-8">
          <ChatInterface 
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSection 
              activeProfile={activeProfile}
              onProfileSelect={handleProfileChange}
            />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <CognitiveAnalysis 
              profileId={activeProfile}
              profile={profiles[activeProfile]}
            />
            
            <CareerProjection 
              profileId={activeProfile}
              profile={profiles[activeProfile]}
            />
            
            <SkillTree profileId={activeProfile} />
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}