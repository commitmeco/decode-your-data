export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Behavioral Signals",
    question: "How often do users seem frustrated or confused when navigating your website?",
    options: [
      { value: 3, label: "Rarely", description: "Users navigate smoothly with minimal friction" },
      { value: 2, label: "Sometimes", description: "Occasional friction points but generally manageable" },
      { value: 1, label: "Often", description: "Users frequently struggle or abandon tasks" },
      { value: 0, label: "Not sure", description: "I don't have visibility into user behavior patterns" }
    ]
  },
  {
    id: 2,
    category: "Behavioral Signals",
    question: "Do you track rage clicks, exits, or other frustration indicators?",
    options: [
      { value: 3, label: "Yes, actively", description: "We monitor and respond to user friction signals" },
      { value: 2, label: "Basic tracking", description: "Some tracking but limited analysis" },
      { value: 1, label: "No tracking", description: "We don't monitor user frustration indicators" },
      { value: 0, label: "Not sure", description: "I'm not sure what data we collect" }
    ]
  },
  {
    id: 3,
    category: "Content & Voice",
    question: "How consistent is your messaging across all digital touchpoints?",
    options: [
      { value: 3, label: "Very consistent", description: "Clear, unified voice across all platforms" },
      { value: 2, label: "Mostly consistent", description: "Generally aligned with some variations" },
      { value: 1, label: "Inconsistent", description: "Mixed messaging that may confuse users" },
      { value: 0, label: "Not sure", description: "Haven't audited messaging consistency" }
    ]
  },
  {
    id: 4,
    category: "Content & Voice",
    question: "Are your calls-to-action (CTAs) clear and action-oriented?",
    options: [
      { value: 3, label: "Very clear", description: "CTAs are specific, compelling, and drive action" },
      { value: 2, label: "Somewhat clear", description: "Generally good but could be stronger" },
      { value: 1, label: "Unclear", description: "Vague or weak CTAs that don't motivate action" },
      { value: 0, label: "Not sure", description: "Haven't evaluated CTA effectiveness" }
    ]
  },
  {
    id: 5,
    category: "Conversion Pathways",
    question: "How well do you understand your conversion funnel performance?",
    options: [
      { value: 3, label: "Very well", description: "Track each step and optimize regularly" },
      { value: 2, label: "Basic understanding", description: "Know overall conversion but limited detail" },
      { value: 1, label: "Limited insight", description: "Minimal funnel tracking or optimization" },
      { value: 0, label: "Not sure", description: "Don't track conversion paths systematically" }
    ]
  },
  {
    id: 6,
    category: "User Experience",
    question: "How does your website perform on mobile devices?",
    options: [
      { value: 3, label: "Excellent", description: "Fast, responsive, and optimized for mobile" },
      { value: 2, label: "Good", description: "Generally works well with minor issues" },
      { value: 1, label: "Poor", description: "Slow, difficult to use, or broken on mobile" },
      { value: 0, label: "Not sure", description: "Haven't tested mobile performance recently" }
    ]
  },
  {
    id: 7,
    category: "User Experience",
    question: "Is your website accessible to users with disabilities?",
    options: [
      { value: 3, label: "Fully accessible", description: "WCAG compliant with proper accessibility features" },
      { value: 2, label: "Basic accessibility", description: "Some accessibility features implemented" },
      { value: 1, label: "Limited accessibility", description: "Minimal or no accessibility considerations" },
      { value: 0, label: "Not sure", description: "Haven't evaluated accessibility compliance" }
    ]
  },
  {
    id: 8,
    category: "Trust & Credibility",
    question: "Do you display social proof, testimonials, or trust indicators effectively?",
    options: [
      { value: 3, label: "Very effectively", description: "Strong social proof strategically placed" },
      { value: 2, label: "Somewhat", description: "Some trust indicators but could be stronger" },
      { value: 1, label: "Minimal", description: "Little to no social proof or trust signals" },
      { value: 0, label: "Not sure", description: "Haven't evaluated trust indicator effectiveness" }
    ]
  },
  {
    id: 9,
    category: "Measurement",
    question: "How confident are you in your current data and analytics setup?",
    options: [
      { value: 3, label: "Very confident", description: "Comprehensive tracking with actionable insights" },
      { value: 2, label: "Somewhat confident", description: "Basic analytics but could be more detailed" },
      { value: 1, label: "Not confident", description: "Limited or unreliable data collection" },
      { value: 0, label: "Not sure", description: "Unsure about data accuracy or completeness" }
    ]
  }
];

export const categoryDescriptions = {
  "Behavioral Signals": "Understanding how users actually interact with your site",
  "Content & Voice": "Consistency and clarity of your messaging",
  "Conversion Pathways": "How well your site guides users to take action",
  "User Experience": "Technical performance and usability",
  "Trust & Credibility": "Building confidence with your audience",
  "Measurement": "Data collection and analysis capabilities"
};