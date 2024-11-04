import {
  Check,
  Layers,
  Monitor,
  Shield,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";

export default function Step3() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <h4 className="mb-3 text-lg font-semibold">Development Approach:</h4>
        <ul className="grid grid-cols-2 gap-2 sm:block">
          {[
            "Agile Methodology",
            "CI/CD Pipeline",
            "Test-Driven Development",
            "Code Reviews",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-lg font-semibold">Key Features:</h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Monitor, text: "Responsive Design" },
            { icon: Zap, text: "Performance Optimized" },
            { icon: Shield, text: "Security First" },
            { icon: Smartphone, text: "Mobile-First Approach" },
            { icon: Layers, text: "Scalable Architecture" },
            { icon: Target, text: "Accessibility Compliant" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 rounded-lg bg-primary-700 p-1"
            >
              <feature.icon className="h-8 w-8 text-tertiary-400" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
