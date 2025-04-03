
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Search, BookOpen, Bookmark, Building, Users, ArrowRight, GraduationCap, MapPin, DollarSign } from 'lucide-react';
import FeatureTemplate from '../FeatureTemplate';

const CareerExplorer = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("careers");
  const [searchQuery, setSearchQuery] = useState("");

  const careerPaths = [
    {
      id: 1,
      title: "Software Engineer",
      industry: "Technology",
      growthOutlook: "Excellent",
      salaryRange: "$70,000-$150,000",
      education: "Bachelor's in Computer Science or related field",
      skills: ["Coding", "Problem Solving", "Software Development", "Algorithms"],
      description: "Design, develop, and maintain software systems and applications.",
      matchScore: 92
    },
    {
      id: 2,
      title: "Financial Analyst",
      industry: "Finance",
      growthOutlook: "Good",
      salaryRange: "$65,000-$120,000",
      education: "Bachelor's in Finance, Economics, or Accounting",
      skills: ["Financial Modeling", "Data Analysis", "Forecasting", "Excel"],
      description: "Analyze financial data and provide insights for business decisions.",
      matchScore: 85
    },
    {
      id: 3,
      title: "Marketing Manager",
      industry: "Marketing",
      growthOutlook: "Good",
      salaryRange: "$60,000-$130,000",
      education: "Bachelor's in Marketing, Communications, or Business",
      skills: ["Digital Marketing", "Analytics", "Campaign Management", "Brand Strategy"],
      description: "Develop and implement marketing strategies to promote products or services.",
      matchScore: 78
    },
    {
      id: 4,
      title: "UX/UI Designer",
      industry: "Design / Technology",
      growthOutlook: "Excellent",
      salaryRange: "$65,000-$125,000",
      education: "Bachelor's in Design, HCI, or related field",
      skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      description: "Create intuitive and engaging user experiences for digital products.",
      matchScore: 88
    },
  ];

  const internships = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      title: "Software Development Intern",
      location: "San Francisco, CA (Remote Available)",
      duration: "10 weeks (Summer 2024)",
      compensation: "$25/hour",
      deadline: "April 15, 2024",
      requirements: ["Current student pursuing CS or related degree", "Programming experience in Python or Java", "Team player with strong communication skills"],
      description: "Gain hands-on experience working with our engineering team to develop new features and fix bugs in our product."
    },
    {
      id: 2,
      company: "Global Finance Group",
      title: "Financial Analysis Intern",
      location: "New York, NY",
      duration: "12 weeks (Summer 2024)",
      compensation: "$22/hour",
      deadline: "April 20, 2024",
      requirements: ["Current student pursuing Finance, Economics, or related degree", "Strong analytical skills", "Proficiency in Excel"],
      description: "Support financial analysts with research, modeling, and data analysis for client portfolios and investment opportunities."
    },
    {
      id: 3,
      company: "Creative Marketing Agency",
      title: "Digital Marketing Intern",
      location: "Chicago, IL (Hybrid)",
      duration: "8 weeks (Summer 2024)",
      compensation: "$20/hour",
      deadline: "April 30, 2024",
      requirements: ["Current student pursuing Marketing or Communications degree", "Experience with social media platforms", "Basic understanding of SEO and analytics"],
      description: "Assist with social media management, content creation, and campaign analytics for various client accounts."
    },
  ];

  const skillsCourses = [
    {
      id: 1,
      title: "Introduction to Programming",
      provider: "CodeCamp",
      duration: "8 weeks",
      format: "Online, self-paced",
      level: "Beginner",
      skills: ["Python", "Basic Algorithms", "Problem Solving"],
      rating: 4.8,
      reviews: 1245,
      price: "Free"
    },
    {
      id: 2,
      title: "Financial Modeling Fundamentals",
      provider: "Finance Academy",
      duration: "6 weeks",
      format: "Online, instructor-led",
      level: "Intermediate",
      skills: ["Excel", "Financial Analysis", "Forecasting"],
      rating: 4.7,
      reviews: 892,
      price: "$49"
    },
    {
      id: 3,
      title: "Digital Marketing Essentials",
      provider: "Marketing Pro",
      duration: "4 weeks",
      format: "Online, self-paced",
      level: "Beginner",
      skills: ["SEO", "Social Media Marketing", "Content Strategy"],
      rating: 4.5,
      reviews: 1567,
      price: "$29"
    },
    {
      id: 4,
      title: "UX Design Principles",
      provider: "Design School",
      duration: "10 weeks",
      format: "Online, instructor-led",
      level: "Beginner to Intermediate",
      skills: ["User Research", "Wireframing", "Prototyping"],
      rating: 4.9,
      reviews: 1023,
      price: "$79"
    },
  ];

  const getMatchScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 75) return "text-amber-600";
    return "text-gray-600";
  };

  return (
    <FeatureTemplate
      title="Career Explorer"
      description="Discover career paths aligned with your skills, interests, and goals."
      backLink="/students"
      backLinkText="Student Dashboard"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Career Explorer</CardTitle>
                <CardDescription>
                  Find the right career path based on your skills and interests
                </CardDescription>
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search careers or skills..." 
                  className="pl-8" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="careers" className="flex-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career Paths
                </TabsTrigger>
                <TabsTrigger value="internships" className="flex-1">
                  <Building className="h-4 w-4 mr-2" />
                  Internships
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Skills & Courses
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="careers">
                <div className="space-y-6">
                  {careerPaths.map(career => (
                    <Card key={career.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-medium">{career.title}</h3>
                              <span className={`${getMatchScoreColor(career.matchScore)} font-medium`}>
                                {career.matchScore}% Match
                              </span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                              <div className="flex items-center">
                                <Building className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{career.industry}</span>
                              </div>
                              <div className="flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">Growth: {career.growthOutlook}</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{career.salaryRange}</span>
                              </div>
                              <div className="flex items-center">
                                <GraduationCap className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{career.education}</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{career.description}</p>
                            
                            <div className="mb-4">
                              <h4 className="text-sm text-gray-500 mb-2">Key Skills</h4>
                              <div className="flex flex-wrap gap-2">
                                {career.skills.map((skill, index) => (
                                  <Badge key={index} variant="outline">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-between lg:w-36">
                            <Progress 
                              value={career.matchScore} 
                              className="w-full h-2 mb-1" 
                            />
                            <div className="flex flex-col space-y-2 mt-4">
                              <Button>Explore Career</Button>
                              <Button variant="outline">
                                <Bookmark className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="internships">
                <div className="space-y-6">
                  {internships.map(internship => (
                    <Card key={internship.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <h3 className="text-xl font-medium">{internship.title}</h3>
                              <Badge className="w-fit">{internship.company}</Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{internship.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{internship.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">{internship.compensation}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                                <span className="text-gray-700">Deadline: {internship.deadline}</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4">{internship.description}</p>
                            
                            <div>
                              <h4 className="text-sm text-gray-500 mb-2">Requirements</h4>
                              <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {internship.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-end lg:w-36">
                            <div className="flex flex-col space-y-2">
                              <Button>Apply Now</Button>
                              <Button variant="outline">
                                <Bookmark className="h-4 w-4 mr-2" />
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skills">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillsCourses.map(course => (
                      <Card key={course.id}>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-medium mb-1">{course.title}</h3>
                          <p className="text-gray-500 text-sm mb-3">by {course.provider}</p>
                          
                          <div className="space-y-3 mb-4">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-500">Duration: </span>
                                <span>{course.duration}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Format: </span>
                                <span>{course.format}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Level: </span>
                                <span>{course.level}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Price: </span>
                                <span>{course.price}</span>
                              </div>
                            </div>
                            
                            <div>
                              <span className="text-gray-500 text-sm">Skills: </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {course.skills.map((skill, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center">
                              <div className="flex items-center text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-gray-600">
                                {course.rating} ({course.reviews.toLocaleString()} reviews)
                              </span>
                            </div>
                          </div>
                          
                          <Button className="w-full">
                            Enroll Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </FeatureTemplate>
  );
};

// Missing icon components
const Star = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

const Clock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

const Calendar = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
};

const TrendingUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
};

export default CareerExplorer;
