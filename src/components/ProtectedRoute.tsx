
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'general_public' | 'startup_founder' | 'investor' | 'student';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredUserType 
}) => {
  const { user, userType, loading } = useAuth();
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

  return <>{children}</>;
};

export default ProtectedRoute;
