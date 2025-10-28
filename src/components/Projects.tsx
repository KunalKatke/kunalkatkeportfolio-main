
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Sales Navigator",
    description: "Transformer-based model for stock prediction; published in IJSREM (Apr 2024).",
    image: "https://i.postimg.cc/SNsW2Hvg/1.png",
    tags: ["Transformers", "Stock Prediction", "Python", "Deep Learning"],
    highlights: [
      "Implemented state-of-the-art transformer architecture for time-series forecasting",
      "Published research findings in the International Journal of Scientific Research in Engineering and Management",
      "Achieved 15% better prediction accuracy than traditional LSTM models",
      "Incorporated market sentiment analysis from news sources"
    ],
    github: "https://github.com/KunalKatke/Sales_Navigator"
  },
  {
    title: "Stock Price Prediction",
    description: "Used LSTM and RNN for dynamic financial forecasting.",
    image: "https://i.postimg.cc/L6Xb9CBp/2.png",
    tags: ["LSTM", "RNN", "Financial Analysis", "Time Series"],
    highlights: [
      "Engineered a hybrid LSTM-RNN model for enhanced prediction capabilities",
      "Processed 5+ years of historical stock data for training and validation",
      "Built interactive visualization dashboard for real-time prediction monitoring",
      "Implemented feature engineering to incorporate technical indicators"
    ],
    github: "https://github.com/KunalKatke/Stock-Price-Prediction"
  },
  {
    title: "City House Price Prediction",
    description: "Linear Regression model with Kaggle dataset; improved market forecast accuracy by 20%.",
    image: "https://i.postimg.cc/zf0hGjFs/3.png",
    tags: ["Linear Regression", "Feature Engineering", "Data Visualization"],
    highlights: [
      "Developed multivariate regression model with 20+ features",
      "Improved market forecast accuracy by 20% compared to baseline models",
      "Created interactive heatmap to visualize price distributions across neighborhoods",
      "Implemented feature importance analysis to identify key price determinants"
    ],
    github: "https://github.com/KunalKatke/City-House-Price-Prediction"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">My portfolio of work</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-2 h-64 lg:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/600x400?text=Project+Image";
                    }}
                  />
                </div>
                <CardContent className="lg:col-span-3 p-6">
                  <h3 className="text-2xl font-semibold text-kunal-blue mb-2">{project.title}</h3>
                  <p className="text-kunal-gray-dark mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-kunal-gray-light text-kunal-gray-dark text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-medium text-kunal-blue mt-4 mb-2">Key Highlights:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-kunal-accent mr-2">•</span>
                        <span className="text-kunal-gray-dark text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => window.open(project.github, '_blank')} 
                    className="bg-kunal-blue hover:bg-kunal-accent text-white"
                  >
                    View Project
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
