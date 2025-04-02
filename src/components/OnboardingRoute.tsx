
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserQuestionnaire from './auth/UserQuestionnaire';

interface OnboardingRouteProps {
  children: React.ReactNode;
  requiredUserType: 'general_public' | 'startup_founder' | 'investor' | 'student';
}

const OnboardingRoute: React.FC<OnboardingRouteProps> = ({ 
  children, 
  requiredUserType 
}) => {
  const { user, userType, loading, onboardingCompleted, completeOnboarding } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (requiredUserType && userType !== requiredUserType) {
        navigate('/');
      }
    }
  }, [user, userType, loading, navigate, requiredUserType]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  if (requiredUserType && userType !== requiredUserType) {
    return null;
  }

  // If onboarding is not completed, show the questionnaire
  if (!onboardingCompleted) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
          <UserQuestionnaire 
            userType={requiredUserType as 'investor' | 'startup_founder'} 
            onComplete={completeOnboarding}
          />
        </main>
      </div>
    );
  }

  // Onboarding is complete, show the regular content
  return <>{children}</>;
};

export default OnboardingRoute;
