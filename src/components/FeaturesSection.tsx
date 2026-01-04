import { motion } from "framer-motion";
import { 
  Brain, 
  MapPin, 
  Bell, 
  BarChart2, 
  MessageSquare, 
  Shield,
  Zap,
  Eye
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Decision Copilot",
    description: "Advanced machine learning provides root cause analysis, predictive forecasting, and actionable recommendations.",
    color: "civic-teal",
  },
  {
    icon: MapPin,
    title: "Ward-Level Analytics",
    description: "Granular performance tracking across all city wards with interactive maps and comparative insights.",
    color: "civic-amber",
  },
  {
    icon: Bell,
    title: "Real-Time Anomaly Detection",
    description: "Automated monitoring identifies unusual patterns and alerts officials before issues escalate.",
    color: "civic-red",
  },
  {
    icon: BarChart2,
    title: "Performance Dashboards",
    description: "Beautiful, intuitive dashboards for both citizens and officials with role-based access control.",
    color: "civic-green",
  },
  {
    icon: MessageSquare,
    title: "Grievance Intelligence",
    description: "NLP-powered complaint analysis with sentiment detection, clustering, and automated routing.",
    color: "civic-navy",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Row-level security, MFA authentication, and comprehensive audit logging for compliance.",
    color: "civic-slate",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-civic-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-civic-amber/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-civic-teal/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-civic-teal" />
            <span className="text-sm font-medium text-civic-teal">Powerful Capabilities</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="text-civic-teal"> Smart Governance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MuniPulse combines cutting-edge AI technology with intuitive design to deliver 
            comprehensive municipal performance management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="stat-card h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Eye className="w-5 h-5" />
            <span>See all features in action</span>
            <span className="text-civic-teal font-medium cursor-pointer hover:underline">
              View Demo →
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
