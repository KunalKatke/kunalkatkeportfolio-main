
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="bg-kunal-gray-light py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My background and journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg mb-6 text-kunal-gray-dark">
              I'm a Computer Science & Engineering graduate specializing in Artificial Intelligence & Machine Learning.
              My passion lies in leveraging data science and machine learning to solve real-world problems and create meaningful impact.
            </p>
            <p className="text-lg mb-6 text-kunal-gray-dark">
              With a strong foundation in programming, algorithms, and data structures, I've developed expertise in 
              building machine learning models, performing data analysis, and creating insightful visualizations.
            </p>

            <Card className="bg-white p-6 shadow-lg border-none">
              <h3 className="text-xl font-semibold text-kunal-blue mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-kunal-blue">B.E. in Computer Science & Engineering (AI & ML)</h4>
                  <p className="text-kunal-gray-dark">Smt. Indira Gandhi College of Engineering, University of Mumbai</p>
                  <div className="flex justify-between text-sm text-kunal-gray-dark mt-1">
                    <span>Graduated: May 2024</span>
                    <span>CGPA: 8.2</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-kunal-blue/20 rounded-lg transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
                alt="Programming and Technology"
                className="relative z-10 w-full max-w-md rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=AI+%26+ML+Engineer";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
