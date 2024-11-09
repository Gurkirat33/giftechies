import { Search, PenTool, Code, TestTube, Rocket } from "lucide-react";

export const steps = [
  {
    icon: Search,
    subTitle: "PHASE 1",
    title: "Meet and Discovery",
    src: "https://imgs.search.brave.com/fsAokEqtULra30oy4flnz2gJxI7c9Q1PGJjQwCufiTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NDkyOTk4MS9waG90/by93ZWxjb21lLXRo/ZS1uZXctYnVzaW5l/c3MtcGFydG5lci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eHFhaUxuaUc4R0w1/ckhZdFFqQ2s5UHJl/UGtuZEtvQzRpMWVM/cWhtVjdxND0",
    description:
      "We begin with an in-depth questionnaire and consultation to understand your business vision, goals, and project requirements. This initial discovery phase ensures we're aligned with your objectives and helps prevent any off-target development.",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            At the core of our process is a comprehensive discovery phase, where
            we strive to deeply understand your business, your goals, and your
            target audience. This crucial step lays the foundation for a
            successful project outcome.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              In-depth client questionnaire to uncover your unique needs and
              challenges
            </li>
            <li>
              Collaborative consultation sessions to align on your vision and
              objectives
            </li>
            <li>
              Thorough analysis of your industry, competitors, and target
              customer base
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    icon: PenTool,
    subTitle: "PHASE 2",
    title: "Planning & Strategy",
    src: "https://imgs.search.brave.com/mWk2QiCQRdhq-nUlm6-Vj50ByWuXbydueJmYTku0-fk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y29ycG9yYXRlZmlu/YW5jZWluc3RpdHV0/ZS5jb20vYXNzZXRz/L3N0cmF0ZWdpYy1w/bGFubmluZy5qcGVn",
    description:
      "Based on our discovery insights, we develop a comprehensive project strategy and timeline. We outline technical requirements, project milestones, and delivery schedules to ensure a smooth development process.",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            With a clear understanding of your business and goals, we
            meticulously plan and strategize the entire project lifecycle. This
            phase establishes a solid foundation for efficient and successful
            execution.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Detailed project roadmap with well-defined milestones and
              deliverables
            </li>
            <li>
              Comprehensive technical specifications and system architecture
              planning
            </li>
            <li>
              Collaborative development of a project timeline to ensure timely
              launch
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    icon: PenTool,
    subTitle: "PHASE 3",
    title: "Design & UI/UX",
    src: "https://imgs.search.brave.com/1BA2ry5qEy7_I0XKvk5mjKzoJZ6-XlK6XrnbdJDi_08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1dr/SlhVWTN3UncyRmZy/dEVaR3BlU24tMzIw/LTgwLmpwZw",
    description:
      "Our design team creates multiple visual concepts for your review. After your feedback, we refine the chosen direction or proceed with approved designs, ensuring every detail meets your expectations.",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Great design is not just about aesthetics – it's about creating a
            seamless and intuitive user experience. Our design team collaborates
            closely with you to bring your vision to life.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Exploration of multiple design concepts and visual directions to
              align with your brand
            </li>
            <li>
              Iterative refinement based on your feedback to ensure the final
              design exceeds your expectations
            </li>
            <li>
              Meticulous attention to user experience, with a focus on
              accessibility and usability
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    icon: Code,
    subTitle: "PHASE 4",
    title: "Development",
    src: "https://imgs.search.brave.com/0f6dRuCUlSLwTQ-zH8Cayr34XNP87qtgAJ7Ovral3xE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aG9vZGxpbmUuY29t/LzIwMjQvMTAvbm9y/dGgtY2Fyb2xpbmEt/aW52ZXN0cy04MDAt/MDAwLWluLWZ1dHVy/ZS10ZWNoLXRhbGVu/dC13aXRoLXNjaG9v/bC1jb2RpbmctYW5k/LWFwcC1kZXZlbG9w/bWVudC1ncmFudHMt/MS53ZWJwP21heC1o/PTQ0MiZ3PTc2MCZm/aXQ9Y3JvcCZjcm9w/PWZhY2VzLGNlbnRl/cg",
    description:
      "Our development team brings the approved designs to life, building your website with clean, efficient code. We focus on performance, scalability, and maintainability throughout the development process.",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            With the design in place, our skilled development team gets to work,
            bringing your project to life with clean, optimized code. We
            prioritize performance, scalability, and maintainability every step
            of the way.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Agile development methodology to ensure smooth and efficient
              collaboration
            </li>
            <li>
              Utilization of the latest technologies and frameworks to deliver a
              cutting-edge solution
            </li>
            <li>
              Rigorous testing and quality assurance measures to guarantee
              flawless functionality
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    icon: Rocket,
    subTitle: "PHASE 5",
    title: "Testing & Launch",
    src: "https://imgs.search.brave.com/DczoR5h1Kx0ntUwtL_tTebQa49ElE0qpY15Dlb0JFSM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tbG9va2luZy1s/YXB0b3AtY2xvc2Ut/dXBfMjMtMjE0ODM5/OTU1NS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    description:
      "Final phase includes thorough testing across devices and browsers, ensuring everything works flawlessly. After your final review and approval, we handle the deployment and launch of your new website.",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            The final phase of our process is crucial – we meticulously test
            every aspect of your project to ensure a smooth and successful
            launch. Only then do we proceed with the deployment and handoff.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              Comprehensive cross-browser and cross-device testing to guarantee
              universal compatibility
            </li>
            <li>
              Thorough quality assurance checks to identify and address any
              remaining issues
            </li>
            <li>
              Seamless deployment and launch process, with a focus on minimizing
              downtime
            </li>
          </ul>
        </div>
      );
    },
  },
];
