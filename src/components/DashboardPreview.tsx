import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin
} from "lucide-react";

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<"citizen" | "official">("citizen");

  const wardData = [
    { name: "Ward 1", score: 92, trend: "up" },
    { name: "Ward 2", score: 78, trend: "down" },
    { name: "Ward 3", score: 85, trend: "up" },
    { name: "Ward 4", score: 71, trend: "stable" },
    { name: "Ward 5", score: 88, trend: "up" },
    { name: "Ward 6", score: 65, trend: "down" },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return "bg-civic-green text-civic-green";
    if (score >= 70) return "bg-civic-amber text-civic-amber";
    return "bg-civic-red text-civic-red";
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dual Dashboard
            <span className="text-civic-teal"> Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored interfaces for citizens seeking transparency and officials requiring deep analytics.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card rounded-xl p-1.5 shadow-card">
            <button
              onClick={() => setActiveTab("citizen")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "citizen"
                  ? "bg-civic-teal text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Citizen View
            </button>
            <button
              onClick={() => setActiveTab("official")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "official"
                  ? "bg-civic-navy text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Official View
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          {activeTab === "citizen" ? (
            <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-civic-teal to-civic-teal/80 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">City Performance Score</h3>
                    <p className="text-white/80 mt-1">Updated 5 minutes ago</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-display font-bold">82</div>
                    <div className="text-white/80 text-sm">out of 100</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 grid md:grid-cols-3 gap-6">
                {/* Quick Stats */}
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  {[
                    { label: "Open Complaints", value: "234", icon: AlertTriangle, color: "amber" },
                    { label: "Resolved Today", value: "45", icon: CheckCircle, color: "green" },
                    { label: "Avg Resolution", value: "3.2 days", icon: Clock, color: "teal" },
                    { label: "Active Wards", value: "24", icon: MapPin, color: "navy" },
                  ].map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-civic-${stat.color}/10 flex items-center justify-center`}>
                          <stat.icon className={`w-5 h-5 text-civic-${stat.color}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* My Ward */}
                <div className="stat-card">
                  <h4 className="font-display font-semibold text-foreground mb-4">Your Ward: Sector 5</h4>
                  <div className="space-y-3">
                    {["Sanitation", "Water", "Roads"].map((dept) => (
                      <div key={dept} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{dept}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-civic-teal rounded-full" 
                              style={{ width: `${Math.random() * 30 + 70}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-foreground">
                            {Math.floor(Math.random() * 30 + 70)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="civic-outline" size="sm" className="w-full mt-4">
                    File Complaint
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-civic-navy to-civic-navy-light p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">Executive Dashboard</h3>
                    <p className="text-white/80 mt-1">Commissioner View • All Wards</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="hero-outline" size="sm">Export Report</Button>
                    <Button variant="hero" size="sm">AI Insights</Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Ward Performance Grid */}
                <h4 className="font-display font-semibold text-foreground mb-4">Ward Performance Overview</h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                  {wardData.map((ward) => (
                    <div key={ward.name} className="stat-card text-center py-4">
                      <div className="text-xs text-muted-foreground mb-1">{ward.name}</div>
                      <div className={`text-2xl font-display font-bold ${getScoreColor(ward.score).split(" ")[1]}`}>
                        {ward.score}
                      </div>
                      <div className="flex items-center justify-center mt-1">
                        {ward.trend === "up" && <TrendingUp className="w-3 h-3 text-civic-green" />}
                        {ward.trend === "down" && <TrendingDown className="w-3 h-3 text-civic-red" />}
                        {ward.trend === "stable" && <div className="w-3 h-0.5 bg-muted-foreground" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Alert */}
                <div className="bg-civic-amber/10 border border-civic-amber/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-civic-amber/20 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-civic-amber" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">AI Alert: Ward 6 Needs Attention</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Sanitation scores dropped 12% this week. 23 clustered complaints detected in Sector 12. 
                        <span className="text-civic-teal font-medium cursor-pointer ml-1">View Analysis →</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
