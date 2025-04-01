
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, LineChart, GraduationCap, UserCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface UserTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: 'general_public' | 'startup_founder' | 'investor' | 'student';
  color: string;
}

const UserTypeCard = ({ icon, title, description, type, color }: UserTypeCardProps) => {
  const { updateUserType, userType } = useAuth();
  const { toast } = useToast();
  
  const handleSelect = async () => {
    try {
      await updateUserType(type);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user type. Please try again.",
        variant: "destructive",
      });
    }
  };

  const isSelected = userType === type;

  return (
    <Card className={`border hover:border-gray-300 hover:shadow-md transition-all duration-300 ${isSelected ? 'ring-2 ring-fundora-orange' : ''}`}>
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          className={`w-full ${isSelected ? 'bg-fundora-orange hover:bg-orange-600' : 'bg-fundora-dark hover:bg-gray-800'}`}
          onClick={handleSelect}
        >
          {isSelected ? 'Selected' : 'Select Type'}
        </Button>
      </CardContent>
    </Card>
  );
};

export const UserTypeSelector = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Select Your User Type</h2>
        <p className="text-gray-600 mt-2">
          Choose the category that best describes you for a tailored experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        <UserTypeCard
          icon={<UserCircle className="h-6 w-6 text-white" />}
          title="General Public"
          description="Access personalized financial advice, investment opportunities, and educational resources."
          type="general_public"
          color="bg-fundora-orange"
        />
        
        <UserTypeCard
          icon={<LineChart className="h-6 w-6 text-white" />}
          title="Startup Founder"
          description="Connect with investors, get funding insights, and access startup growth tools."
          type="startup_founder"
          color="bg-fundora-dark"
        />
        
        <UserTypeCard
          icon={<Users className="h-6 w-6 text-white" />}
          title="Investor"
          description="Discover promising startups, perform due diligence, and manage your investment portfolio."
          type="investor"
          color="bg-purple-600"
        />
        
        <UserTypeCard
          icon={<GraduationCap className="h-6 w-6 text-white" />}
          title="Student"
          description="Build financial literacy, explore entrepreneurship, and develop investment skills."
          type="student"
          color="bg-green-600"
        />
      </div>
    </div>
  );
};

export default UserTypeSelector;
