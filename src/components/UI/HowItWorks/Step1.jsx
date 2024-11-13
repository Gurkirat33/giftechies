import { Check } from "lucide-react";

export default function Step1() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <h4 className="mb-3 text-lg font-semibold">Key Focus Areas:</h4>
        <ul className="grid grid-cols-2 gap-4 sm:block">
          {[
            "Business Analysis",
            "Goal Setting",
            "Market Research",
            "Competitor Analysis",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-lg font-semibold sm:ml-6">
          Consultation Metrics:
        </h4>
        <div className="grid grid-cols-2 items-start gap-4">
          {[
            { label: "Avg. Consultation", value: "30 min" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Follow-up Rate", value: "100%" },
            { label: "Solutions Proposed", value: "3-5" },
          ].map((metric, index) => (
            <div key={index} className="rounded-lg text-center">
              <p className="text-xl font-bold">{metric.value}</p>
              <p className="text-sm text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
