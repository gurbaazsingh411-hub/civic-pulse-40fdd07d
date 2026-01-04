import { motion } from "framer-motion";
import { 
  Users, 
  Building2, 
  Clock, 
  Eye, 
  TrendingUp, 
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

const BenefitsSection = () => {
  const citizenBenefits = [
    { icon: Eye, text: "Complete transparency into city performance" },
    { icon: MessageSquare, text: "Easy complaint filing with real-time tracking" },
    { icon: Clock, text: "30% faster grievance resolution" },
    { icon: Sparkles, text: "AI assistant for instant answers" },
  ];

  const officialBenefits = [
    { icon: TrendingUp, text: "90% reduction in reporting time" },
    { icon: Target, text: "AI-powered root cause analysis" },
    { icon: Zap, text: "Proactive issue detection" },
    { icon: Shield, text: "Role-based access control" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefits for
            <span className="text-civic-teal"> Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MuniPulse delivers measurable value to both citizens and municipal officials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Citizens Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-civic-teal/20 to-civic-teal/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-civic-teal/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-civic-teal/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-civic-teal" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">For Citizens</h3>
                  <p className="text-muted-foreground">Transparency & Engagement</p>
                </div>
              </div>

              <div className="space-y-4">
                {citizenBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-civic-teal/5 hover:bg-civic-teal/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-civic-teal/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-civic-teal" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-display font-bold text-civic-teal">25%</div>
                  <div className="text-sm text-muted-foreground">
                    projected citizen engagement<br />within 12 months
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Officials Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-civic-navy/20 to-civic-navy/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-civic-navy/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-civic-navy/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-civic-navy" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">For Officials</h3>
                  <p className="text-muted-foreground">Efficiency & Intelligence</p>
                </div>
              </div>

              <div className="space-y-4">
                {officialBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-civic-navy/5 hover:bg-civic-navy/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-civic-navy/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-civic-navy" />
                    </div>
                    <span className="text-foreground font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-display font-bold text-civic-navy">15%</div>
                  <div className="text-sm text-muted-foreground">
                    average performance<br />improvement across wards
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
