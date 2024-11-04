import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { HomePage } from './components/HomePage';
import { FeatureTalentDiscovery } from './components/FeatureTalentDiscovery';
import { FeaturePersonalizedLearning } from './components/FeaturePersonalizedLearning';
import { FeatureProgressTracking } from './components/FeatureProgressTracking';
import { FeatureExpertCoordination } from './components/FeatureExpertCoordination';
import { FeatureCurriculumOptimization } from './components/FeatureCurriculumOptimization';
import { FeatureTalentDevelopment } from './components/FeatureTalentDevelopment';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingFlow />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/features/talent-discovery" element={<FeatureTalentDiscovery />} />
        <Route path="/features/personalized-learning" element={<FeaturePersonalizedLearning />} />
        <Route path="/features/progress-tracking" element={<FeatureProgressTracking />} />
        <Route path="/features/expert-coordination" element={<FeatureExpertCoordination />} />
        <Route path="/features/curriculum-optimization" element={<FeatureCurriculumOptimization />} />
        <Route path="/features/talent-development" element={<FeatureTalentDevelopment />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;