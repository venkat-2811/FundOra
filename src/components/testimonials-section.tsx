
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

const Testimonial = ({ quote, name, role, company }: TestimonialProps) => (
  <Card className="border hover:shadow-md transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex text-yellow-400 mb-4">
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
        <Star className="h-5 w-5 fill-current" />
      </div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}{company && `, ${company}`}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FundOra is transforming financial journeys across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="FundOra's AI assistant helped me understand investments in a way no financial advisor ever could. I've grown my portfolio by 32% in just a year!"
            name="Priya Sharma"
            role="Marketing Professional"
          />
          
          <Testimonial
            quote="As a startup founder, finding the right investors was always challenging. FundOra matched us with investors who truly understand our vision and provided the mentorship we needed."
            name="Vikram Mehta"
            role="Founder & CEO"
            company="HealthTech Solutions"
          />
          
          <Testimonial
            quote="The personalized investment recommendations are spot-on. The platform understands my risk tolerance and financial goals better than I do myself."
            name="Anjali Patel"
            role="Software Engineer"
          />
          
          <Testimonial
            quote="As an angel investor, FundOra has revolutionized my deal flow. The AI matching algorithm consistently connects me with startups that align with my investment thesis."
            name="Rajiv Kapoor"
            role="Angel Investor"
          />
          
          <Testimonial
            quote="The educational resources are incredible. As a student, I've learned more about financial planning and investing here than in my entire college curriculum."
            name="Aditya Singh"
            role="Finance Student"
            company="Delhi University"
          />
          
          <Testimonial
            quote="FundOra's document analyzer saved me thousands in tax deductions I wasn't aware of. The platform makes complex financial concepts accessible to everyone."
            name="Meera Krishnan"
            role="Small Business Owner"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
