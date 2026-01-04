import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 500000, suffix: "+", label: "Citizens Served", prefix: "" },
  { value: 24, suffix: "", label: "Wards Monitored", prefix: "" },
  { value: 99.5, suffix: "%", label: "System Uptime", prefix: "" },
  { value: 3.3, suffix: " yrs", label: "Payback Period", prefix: "" },
];

const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toFixed(value % 1 !== 0 ? 1 : 0);
  };

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 gradient-hero relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-civic-teal mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-primary-foreground/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
