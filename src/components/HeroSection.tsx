import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-civic-teal/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-civic-amber/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-civic-teal rounded-full animate-pulse" />
              <span className="text-sm font-medium">AI-Powered Municipal Governance</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Urban
              <span className="block text-gradient mt-2">Governance</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              MuniPulse delivers real-time analytics, AI-driven insights, and transparent 
              performance tracking to revolutionize how cities serve their citizens.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl">
                Explore Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {[
                { value: "15%", label: "Performance Boost" },
                { value: "30%", label: "Faster Resolution" },
                { value: "25%", label: "Citizen Engagement" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl font-display font-bold text-civic-teal">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="glass-card rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-civic-teal/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-civic-teal" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">City Performance</h3>
                      <p className="text-xs text-muted-foreground">Real-time metrics</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-civic-green/10 text-civic-green text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>

                {/* Mini Chart Bars */}
                <div className="space-y-4">
                  {[
                    { name: "Sanitation", value: 87, color: "bg-civic-teal" },
                    { name: "Water Supply", value: 92, color: "bg-civic-green" },
                    { name: "Roads", value: 74, color: "bg-civic-amber" },
                    { name: "Grievances", value: 81, color: "bg-civic-navy" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-semibold text-foreground">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Card - Active Users */}
              <motion.div
                className="absolute -left-8 top-1/3 glass-card rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-civic-teal/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-civic-teal" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-foreground">12,847</div>
                    <div className="text-xs text-muted-foreground">Active Citizens</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Security */}
              <motion.div
                className="absolute -right-4 bottom-1/4 glass-card rounded-xl p-4 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-civic-green/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-civic-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">99.5% Uptime</div>
                    <div className="text-xs text-muted-foreground">Secure & Reliable</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
