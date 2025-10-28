import { Card } from '@/components/ui/card';

const AIMentorship = () => {
  return (
    <section id="ai-mentorship" className="bg-white py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">AI Mentorship & Integration Services</h2>
        </div>

        <Card className="p-8 max-w-4xl mx-auto bg-kunal-gray-light border-none shadow-lg">
          <div className="space-y-6 text-kunal-gray-dark">
            <p className="text-lg leading-relaxed">
              I provide AI education, mentorship, and integration support to individuals and professionals across different domains — including healthcare, education, finance, and startups.
            </p>
            
            <p className="text-lg leading-relaxed">
              My focus is on helping others understand, apply, and integrate Artificial Intelligence into their workflows and projects. From teaching the fundamentals of Machine Learning to guiding AI-driven solution development, I work hands-on to ensure my clients successfully adopt AI.
            </p>
            
            <p className="text-lg leading-relaxed">
              Whether you're a beginner or an established professional, I offer custom strategies and personalized support to help you harness the power of AI in your field.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIMentorship;