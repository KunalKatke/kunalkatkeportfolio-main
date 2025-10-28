
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "Data Analysis & Visualization",
    description: "Transform your raw data into actionable insights with comprehensive analysis and intuitive visualizations.",
    icon: "📊"
  },
  {
    title: "Machine Learning Model Development",
    description: "Custom machine learning solutions tailored to your specific business needs and challenges.",
    icon: "🤖"
  },
  {
    title: "AI-powered Business Solutions",
    description: "Leverage the power of artificial intelligence to optimize processes and drive business growth.",
    icon: "💼"
  },
  {
    title: "API Integration & Automation Tools",
    description: "Streamline your workflows with custom API integrations and automated data processing systems.",
    icon: "🔄"
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-kunal-gray-light py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">How I can help you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-white hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-kunal-blue mb-4">{service.title}</h3>
              <p className="text-kunal-gray-dark">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
