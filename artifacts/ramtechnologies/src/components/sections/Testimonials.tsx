import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      text: "Ramtechnologies has greatly improved our school's technical operations and communication systems.",
      author: "School Client",
      role: "Reliable and professional ICT support."
    },
    {
      text: "Their hosting and email solutions helped our business establish a professional online presence.",
      author: "Business Client",
      role: "Excellent support and quick response."
    },
    {
      text: "We appreciate the efficiency and professionalism in handling our software and ICT needs.",
      author: "Organization Client",
      role: "Very dependable team."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">What Our Partners Say</h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Hear from the institutions that trust Ramtechnologies with their daily operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm bg-white relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 rotate-180" />
                <CardContent className="pt-10 pb-8 px-8 flex flex-col h-full">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-lg mb-8 flex-grow relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold font-heading text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
