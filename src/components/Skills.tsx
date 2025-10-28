
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "Excel", level: 85 }
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Keras", level: 80 },
      { name: "Hugging Face", level: 70 }
    ]
  },
  {
    title: "Expertise",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "APIs", level: 75 },
      { name: "Data Analysis", level: 90 },
      { name: "Visualization", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-kunal-gray-light py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">My technical expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-kunal-blue mb-6 pb-3 border-b border-kunal-gray-medium">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-kunal-gray-dark">{skill.name}</span>
                      <span className="text-sm text-kunal-accent">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
