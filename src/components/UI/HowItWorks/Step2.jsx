import { Check, Code, FileSearch, PenTool, Rocket } from "lucide-react";

export default function Step2() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div>
        <h4 className="mb-3 text-lg font-semibold">Project Stages:</h4>
        <div className="flex flex-wrap justify-between">
          {[
            { title: "Research", color: "bg-blue-500", icon: FileSearch },
            { title: "Design", color: "bg-purple-500", icon: PenTool },
            { title: "Development", color: "bg-green-500", icon: Code },
            { title: "Launch", color: "bg-red-500", icon: Rocket },
          ].map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`${stage.color} flex h-16 w-16 items-center justify-center rounded-full`}
              >
                <stage.icon size={32} className="text-white" />
              </div>
              <p className="mt-2 text-sm font-medium">{stage.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3 text-lg font-semibold">Key Deliverables:</h4>
        <ul className="grid grid-cols-2 gap-3">
          {[
            "Detailed Project Scope",
            "Technical Requirements",
            "Content Strategy",
            "SEO Plan",
            "Timeline & Milestones",
            "Resource Allocation",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center rounded-lg bg-primary-700 p-1"
            >
              <Check className="mr-2 h-5 w-5 text-green-500" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
