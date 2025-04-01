import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, LineChart, GraduationCap, UserCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  type: 'general_public' | 'startup_founder' | 'investor' | 'student';
  color: string;
}

const RoleCard = ({ icon, title, description, to, type, color }: RoleCardProps) => {
  const { user, updateUserType, userType } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleClick = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (userType === type) {
      navigate(to);
      return;
    }

    try {
      await updateUserType(type);
      navigate(to);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user type. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="border hover:border-gray-300 hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          className="w-full bg-fundora-dark hover:bg-gray-800"
          onClick={handleClick}
        >
          Explore Features
        </Button>
      </CardContent>
    </Card>
  );
};

export const RoleSelector = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      <RoleCard
        icon={<UserCircle className="h-6 w-6 text-white" />}
        title="General Public"
        description="Access personalized financial advice, investment opportunities, and educational resources."
        to="/general-public"
        type="general_public"
        color="bg-fundora-orange"
      />
      
      <RoleCard
        icon={<LineChart className="h-6 w-6 text-white" />}
        title="Startup Founders"
        description="Connect with investors, get funding insights, and access startup growth tools."
        to="/startup-founders"
        type="startup_founder"
        color="bg-fundora-dark"
      />
      
      <RoleCard
        icon={<Users className="h-6 w-6 text-white" />}
        title="Investors"
        description="Discover promising startups, perform due diligence, and manage your investment portfolio."
        to="/investors"
        type="investor"
        color="bg-purple-600"
      />
      
      <RoleCard
        icon={<GraduationCap className="h-6 w-6 text-white" />}
        title="Students"
        description="Build financial literacy, explore entrepreneurship, and develop investment skills."
        to="/students"
        type="student"
        color="bg-green-600"
      />
    </div>
  );
};

export default RoleSelector;
