import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { quizQuestions, categoryDescriptions } from "@/components/QuizQuestions";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: selectedOption });
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Quiz completed, navigate to results
        const finalAnswers = { ...answers, [quizQuestions[currentQuestion].id]: selectedOption };
        localStorage.setItem('quizAnswers', JSON.stringify(finalAnswers));
        navigate('/results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || null);
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-lg text-foreground">CMCD</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 pb-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="text-sm">
              {categoryDescriptions[question.category as keyof typeof categoryDescriptions]}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-light text-primary-foreground">
                  {question.category}
                </Badge>
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
                  {question.question}
                </h1>
              </div>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedOption === option.value
                        ? 'border-primary bg-primary-extra-light'
                        : 'border-border hover:border-primary-light hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                        selectedOption === option.value
                          ? 'border-primary bg-primary'
                          : 'border-border'
                      }`}>
                        {selectedOption === option.value && (
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-foreground">
                          {option.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="px-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;