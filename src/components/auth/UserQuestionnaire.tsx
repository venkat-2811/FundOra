
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

interface QuestionnaireProps {
  userType: 'investor' | 'startup_founder';
  onComplete: () => Promise<void>;
}

const UserQuestionnaire: React.FC<QuestionnaireProps> = ({ userType, onComplete }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Common fields
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [experience, setExperience] = useState('');
  
  // Investor specific fields
  const [investmentThesis, setInvestmentThesis] = useState('');
  const [preferredSectors, setPreferredSectors] = useState<string[]>([]);
  const [investmentSize, setInvestmentSize] = useState('');
  
  // Startup founder specific fields
  const [companyName, setCompanyName] = useState('');
  const [industryCategory, setIndustryCategory] = useState('');
  const [fundingStage, setFundingStage] = useState('');
  const [pitchDeck, setPitchDeck] = useState('');
  
  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectors = [
    "SaaS", "FinTech", "HealthTech", "EdTech", "E-commerce", 
    "AI/ML", "Clean Energy", "Gaming", "Mobility", "AgriTech"
  ];
  
  const handleSectorToggle = (sector: string) => {
    if (preferredSectors.includes(sector)) {
      setPreferredSectors(preferredSectors.filter(s => s !== sector));
    } else {
      setPreferredSectors([...preferredSectors, sector]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Error",
        description: "User must be logged in to complete profile",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Common profile data
      const profileData = {
        full_name: name,
        bio,
        experience_level: experience,
        user_id: user.id
      };
      
      // Save to the appropriate table based on user type
      if (userType === 'investor') {
        // Type-safe approach for investor profiles
        const { error } = await supabase
          .from('investor_profiles')
          .upsert({
            ...profileData,
            investment_thesis: investmentThesis,
            preferred_sectors: preferredSectors,
            typical_investment_size: investmentSize
          } as Database['public']['Tables']['investor_profiles']['Insert']);
        
        if (error) throw error;
      } else {
        // Type-safe approach for startup profiles
        const { error } = await supabase
          .from('startup_profiles')
          .upsert({
            ...profileData,
            company_name: companyName,
            industry: industryCategory,
            funding_stage: fundingStage,
            pitch_deck_url: pitchDeck
          } as Database['public']['Tables']['startup_profiles']['Insert']);
        
        if (error) throw error;
      }
      
      // Update the onboarding_completed flag in the profiles table
      await onComplete();
      
      toast({
        title: "Profile completed",
        description: "Your profile has been saved successfully!"
      });
      
      // Navigate to the appropriate dashboard
      if (userType === 'investor') {
        navigate('/investors');
      } else {
        navigate('/startup-founders');
      }
    } catch (error: any) {
      toast({
        title: "Error saving profile",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Complete Your Profile</h2>
        <p className="text-gray-600 mt-2">
          Help us customize your dashboard experience
        </p>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common Fields */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea 
                  id="bio" 
                  value={bio} 
                  onChange={(e) => setBio(e.target.value)} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Select 
                  value={experience} 
                  onValueChange={setExperience}
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (6-10 years)</SelectItem>
                    <SelectItem value="expert">Expert (10+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* User Type Specific Fields */}
            {userType === 'investor' ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="investmentThesis">Investment Thesis</Label>
                  <Textarea 
                    id="investmentThesis" 
                    value={investmentThesis} 
                    onChange={(e) => setInvestmentThesis(e.target.value)} 
                    placeholder="Describe your investment approach and criteria"
                    required 
                  />
                </div>
                
                <div>
                  <Label className="block mb-2">Preferred Sectors</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {sectors.map((sector) => (
                      <div key={sector} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`sector-${sector}`} 
                          checked={preferredSectors.includes(sector)}
                          onCheckedChange={() => handleSectorToggle(sector)}
                        />
                        <Label htmlFor={`sector-${sector}`} className="text-sm cursor-pointer">
                          {sector}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="investmentSize">Typical Investment Size</Label>
                  <Select 
                    value={investmentSize} 
                    onValueChange={setInvestmentSize}
                  >
                    <SelectTrigger id="investmentSize">
                      <SelectValue placeholder="Select investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seed">Seed (₹5L - ₹50L)</SelectItem>
                      <SelectItem value="angel">Angel (₹50L - ₹2Cr)</SelectItem>
                      <SelectItem value="series_a">Series A (₹2Cr - ₹10Cr)</SelectItem>
                      <SelectItem value="series_b">Series B+ (₹10Cr+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)} 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="industryCategory">Industry Category</Label>
                  <Select 
                    value={industryCategory} 
                    onValueChange={setIndustryCategory}
                  >
                    <SelectTrigger id="industryCategory">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector.toLowerCase()}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="fundingStage">Current Funding Stage</Label>
                  <Select 
                    value={fundingStage} 
                    onValueChange={setFundingStage}
                  >
                    <SelectTrigger id="fundingStage">
                      <SelectValue placeholder="Select funding stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Idea Stage</SelectItem>
                      <SelectItem value="mvp">MVP</SelectItem>
                      <SelectItem value="pre_seed">Pre-Seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series_a">Series A</SelectItem>
                      <SelectItem value="series_b">Series B or higher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="pitchDeck">Pitch Deck URL (Optional)</Label>
                  <Input 
                    id="pitchDeck" 
                    value={pitchDeck} 
                    onChange={(e) => setPitchDeck(e.target.value)} 
                    placeholder="Link to your pitch deck if available"
                  />
                </div>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-fundora-dark hover:bg-gray-800"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Complete Setup"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserQuestionnaire;
