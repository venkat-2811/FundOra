
import React from 'react';
import { 
  Brain, LineChart, Users, Shield, 
  MessageSquare, Search, Target, UserCheck 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="feature-card">
    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Unique "AIFi" Framework</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing financial literacy and investment with AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-fundora-orange" />}
            title="Integrated Financial Intelligence"
            description="A unified platform connecting education, investments, funding, and mentorship in one comprehensive ecosystem."
          />

          <FeatureCard
            icon={<Target className="h-6 w-6 text-fundora-orange" />}
            title="Hyper-Personalized Guidance"
            description="AI that adapts to your financial literacy level, risk tolerance, and goals for truly tailored advice."
          />

          <FeatureCard
            icon={<UserCheck className="h-6 w-6 text-fundora-orange" />}
            title="Smart Matching"
            description="Proprietary algorithms connecting investors with startups based on multiple compatibility factors beyond traditional metrics."
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-fundora-orange" />}
            title="Real-Time Compliance"
            description="Dynamic monitoring that adjusts to changing regulations across different investment categories and jurisdictions."
          />

          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-fundora-orange" />}
            title="PersonalFinAI Assistant"
            description="Conversational AI that answers financial questions and adapts to your knowledge level, providing personalized guidance."
          />

          <FeatureCard
            icon={<Search className="h-6 w-6 text-fundora-orange" />}
            title="Investor Discovery"
            description="For startups: Find the right investors. For investors: Discover promising startups aligned with your investment strategy."
          />

          <FeatureCard
            icon={<LineChart className="h-6 w-6 text-fundora-orange" />}
            title="Portfolio Analytics"
            description="Advanced performance tracking, risk assessment, and growth projections for both investors and retail users."
          />

          <FeatureCard
            icon={<Users className="h-6 w-6 text-fundora-orange" />}
            title="Community & Mentorship"
            description="Connect with peers, industry experts, and mentors for knowledge sharing and growth opportunities."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
