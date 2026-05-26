import ExperimentCard from "./ExperimentCard";
import { EXPERIMENT_CATALOG } from "../data/experiments";

const ChemistryHome = () => {
  const chemistryExperiments = EXPERIMENT_CATALOG.filter(
    (experiment) => experiment.subject === "chemistry"
  );

  return (
    <div>
      <h1>Chemistry Virtual Lab</h1>
      <p>Explore interactive chemistry experiments</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {chemistryExperiments.map((exp) => (
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

export default ChemistryHome;
