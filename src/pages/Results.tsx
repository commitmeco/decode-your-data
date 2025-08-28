import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Download, TrendingUp, AlertTriangle, CheckCircle2, Target } from "lucide-react";
import { quizQuestions, categoryDescriptions } from "@/components/QuizQuestions";

const Results = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [categoryScores, setCategoryScores] = useState<{ [key: string]: { score: number; maxScore: number; percentage: number } }>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (!savedAnswers) {
      navigate('/quiz');
      return;
    }

    const parsedAnswers = JSON.parse(savedAnswers);
    setAnswers(parsedAnswers);

    // Calculate category scores
    const scores: { [key: string]: { score: number; maxScore: number; percentage: number } } = {};
    
    Object.entries(categoryDescriptions).forEach(([category]) => {
      const categoryQuestions = quizQuestions.filter(q => q.category === category);
      const categoryAnswers = categoryQuestions.map(q => parsedAnswers[q.id] || 0);
      const score = categoryAnswers.reduce((sum, answer) => sum + answer, 0);
      const maxScore = categoryQuestions.length * 3; // Max score per question is 3
      const percentage = Math.round((score / maxScore) * 100);
      
      scores[category] = { score, maxScore, percentage };
    });

    setCategoryScores(scores);
  }, [navigate]);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 70) return "text-success";
    if (percentage >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 70) return <CheckCircle2 className="w-5 h-5 text-success" />;
    if (percentage >= 40) return <TrendingUp className="w-5 h-5 text-warning" />;
    return <AlertTriangle className="w-5 h-5 text-destructive" />;
  };

  const getScoreLabel = (percentage: number) => {
    if (percentage >= 70) return "Strong";
    if (percentage >= 40) return "Moderate";
    return "Needs Focus";
  };

  const overallScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.percentage, 0) / Object.keys(categoryScores).length;

  const recommendations = [
    {
      category: "High Priority",
      items: Object.entries(categoryScores)
        .filter(([_, data]) => data.percentage < 40)
        .map(([category]) => category)
    },
    {
      category: "Medium Priority", 
      items: Object.entries(categoryScores)
        .filter(([_, data]) => data.percentage >= 40 && data.percentage < 70)
        .map(([category]) => category)
    },
    {
      category: "Strengths to Maintain",
      items: Object.entries(categoryScores)
        .filter(([_, data]) => data.percentage >= 70)
        .map(([category]) => category)
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/quiz')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retake Assessment</span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg text-foreground">CMCD</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Overall Score */}
          <Card className="p-8">
            <div className="text-center space-y-6">
              <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg">
                Your Digital Health Score
              </Badge>
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {Math.round(overallScore)}%
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {overallScore >= 70 ? "Strong digital foundation with optimization opportunities" :
                   overallScore >= 40 ? "Good foundation with significant improvement potential" :
                   "Major opportunities for digital transformation"}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Based on your responses, we've identified specific areas where targeted improvements 
                  can dramatically increase your conversions and user satisfaction.
                </p>
              </div>
            </div>
          </Card>

          {/* Category Breakdown */}
          <div className="grid lg:grid-cols-2 gap-6">
            {Object.entries(categoryScores).map(([category, data]) => (
              <Card key={category} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg text-foreground">{category}</h3>
                    <div className="flex items-center space-x-2">
                      {getScoreIcon(data.percentage)}
                      <Badge variant={data.percentage >= 70 ? "default" : data.percentage >= 40 ? "secondary" : "destructive"}>
                        {getScoreLabel(data.percentage)}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                      </span>
                      <span className={`font-semibold ${getScoreColor(data.percentage)}`}>
                        {data.percentage}%
                      </span>
                    </div>
                    <Progress value={data.percentage} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recommendations */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Your Action Plan</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground border-b pb-2">
                      {rec.category}
                    </h3>
                    {rec.items.length > 0 ? (
                      <ul className="space-y-2">
                        {rec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground italic">No items in this category</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Ready to transform these insights into growth?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                This assessment reveals the surface. A full CMCD digital audit dives deep into user behavior, 
                conversion psychology, and data-driven optimization strategies tailored to your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Full Digital Audit
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Report
                </Button>
              </div>

              <div className="flex justify-center items-center space-x-8 text-sm text-primary-foreground/80 pt-4">
                <div>✓ Behavioral analysis</div>
                <div>✓ Conversion optimization</div>
                <div>✓ Implementation roadmap</div>
              </div>
            </div>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="px-6"
            >
              Take Another Assessment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;