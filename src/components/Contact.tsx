
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

const ContactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "kunal.p.katkework@gmail.com",
    link: "mailto:kunal.p.katkework@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+91 9404643274",
    link: "tel:+919404643274"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    title: "LinkedIn",
    value: "linkedin.com/in/kunal-katke-973328206",
    link: "https://linkedin.com/in/kunal-katke-973328206"
  },
  {
    icon: <Github className="h-5 w-5" />,
    title: "GitHub",
    value: "github.com/KunalKatke",
    link: "https://github.com/KunalKatke"
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    title: "Instagram",
    value: "instagram.com/kunalkatke46",
    link: "https://instagram.com/kunalkatke46"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Initialize EmailJS with your public key
      emailjs.init("nc6ofMrXBQB2FwVrl");
      
      await emailjs.send(
        "service_lhudxaf", // Service ID
        "template_djm5922", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I will get back to you soon.",
      });
      
      // Reset form data
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-kunal-blue mb-6">Get In Touch</h3>
            <p className="text-kunal-gray-dark mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects or ideas.
            </p>

            <div className="space-y-4">
              {ContactInfo.map((item, index) => (
                <Card key={index} className="p-4 flex items-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-kunal-accent/10 flex items-center justify-center text-kunal-accent mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-kunal-gray-dark">{item.title}</h4>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-kunal-blue hover:text-kunal-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-kunal-blue mb-6">Location</h3>
              <p className="text-kunal-gray-dark">
                Mahalaxmi, Mumbai – 400011
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-kunal-gray-light p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-kunal-blue mb-6">Send Message</h3>
              
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="bg-kunal-blue hover:bg-kunal-accent text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
