import ExperimentCard from "./ExperimentCard";
import { EXPERIMENT_CATALOG } from "../data/experiments";

const PhysicsHome = () => {
  const physicsExperiments = EXPERIMENT_CATALOG.filter(
    (experiment) => experiment.subject === "physics"
  );

  return (
    <div>
      <h1>Physics Virtual Lab</h1>
      <p>Explore interactive physics experiments</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {physicsExperiments.map((exp) => (
          <ExperimentCard
            key={exp.id}
            id={exp.id}
            title={exp.title}
            description={exp.description}
            subject={exp.subject}
            link={exp.link}
            difficulty={exp.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default PhysicsHome;
