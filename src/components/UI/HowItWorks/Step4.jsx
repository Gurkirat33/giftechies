import { Check, Coffee, TrendingUp, Users, Zap } from "lucide-react";

export default function Step4() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <h4 className="mb-3 text-lg font-semibold">Launch Checklist:</h4>
        <ul className="grid grid-cols-2 gap-2 sm:block">
          {[
            "Quality Assurance",
            "Performance Testing",
            "Security Audit",
            "User Acceptance Testing",
            "SEO Optimization",
            "Analytics Setup",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-lg font-semibold">Growth Metrics:</h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, label: "User Acquisition", value: "+150%" },
            { icon: TrendingUp, label: "Conversion Rate", value: "+75%" },
            { icon: Zap, label: "Page Load Speed", value: "-40%" },
            { icon: Coffee, label: "Client Satisfaction", value: "100%" },
          ].map((metric, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-lg bg-primary-700 p-1"
            >
              <metric.icon className="h-10 w-10 text-tertiary-400" />
              <div>
                <p className="text-lg font-bold">{metric.value}</p>
                <p className="text-sm text-gray-300">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
