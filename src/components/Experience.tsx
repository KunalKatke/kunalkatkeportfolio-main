import { Card } from '@/components/ui/card';

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Anubrain Technology",
    period: "2024 - Present",
    description: "Implemented ML models for brain tumor detection, enhanced diagnostic accuracy by 20%.",
    achievements: [
      "Researched and implemented machine learning models for brain tumor detection, enhancing diagnostic accuracy by 20% through advanced data preprocessing and feature engineering techniques",
      "Developed NLP models using word embeddings to improve text processing efficiency, contributing to the optimization of language understanding systems",
      "Collaborated on various machine learning projects, including applications in computer vision, resulting in a 25% improvement in image analysis and feature extraction accuracy"
    ]
  },
  {
    role: "Flutter Flow Developer Intern",
    company: "Codify Tech LLP",
    period: "Mar 2023 – Sep 2023",
    description: "Developed 5+ mobile apps, boosted user satisfaction by 30%, reduced error rates by 20%.",
    achievements: [
      "Led the development of 5+ mobile applications using Flutter Flow",
      "Implemented responsive UI designs and integrated REST APIs",
      "Boosted user satisfaction metrics by 30% through intuitive interfaces",
      "Reduced app error rates by 20% through rigorous testing protocols"
    ]
  },
  {
    role: "Data Visualization Intern",
    company: "Tata",
    period: "July 2023",
    description: "Built dashboards with Power BI, improved decision-making by 25%.",
    achievements: [
      "Created interactive data visualization dashboards using Power BI",
      "Transformed complex datasets into actionable insights",
      "Improved executive decision-making efficiency by 25%",
      "Automated reporting processes to reduce manual work by 40%"
    ]
  },
  {
    role: "Tech Central Digital Intern",
    company: "Sydney School of Entrepreneurship",
    period: "June 2023",
    description: "Addressed real-world business problems, increased customer satisfaction by 20%.",
    achievements: [
      "Collaborated with cross-functional teams to solve business challenges",
      "Applied data-driven approaches to improve operational efficiency",
      "Developed customer-focused solutions that increased satisfaction by 20%",
      "Presented findings and recommendations to senior management"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 border-l-4 border-kunal-accent hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-kunal-blue">{exp.role}</h3>
                  <p className="text-kunal-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-kunal-gray-dark bg-kunal-gray-light px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-kunal-gray-dark mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-kunal-accent mr-2">•</span>
                    <span className="text-kunal-gray-dark text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
