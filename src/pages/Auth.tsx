
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/layout/footer';
import AuthForms from '@/components/auth/AuthForms';
import { useAuth } from '@/contexts/AuthContext';
import UserTypeSelector from '@/components/auth/UserTypeSelector';

const Auth = () => {
  const { user, userType, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && userType) {
      navigate('/');
    }
  }, [user, userType, loading, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto">
          {!loading && (
            <>
              {!user ? (
                <AuthForms />
              ) : (
                <UserTypeSelector />
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
