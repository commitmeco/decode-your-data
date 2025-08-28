import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect directly to quiz since this is a tool, not a landing page
    navigate('/quiz');
  }, [navigate]);

  return null;
};

export default Index;