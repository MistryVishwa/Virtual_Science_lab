import { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";
import Footer from "../components/Footer";

const Home = () => {
  const [backendStatus, setBackendStatus] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("Backend not connected ❌"));
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <div className="home-hero">
        <h1>🌱 Virtual Science Lab</h1>
        <p>
          Explore interactive Biology, Chemistry, and Physics experiments with AI-powered simulations.
        </p>

        <div
          className={`backend-status ${
            backendStatus === "ok" ? "success" : "error"
          }`}
        >
          {backendStatus === "ok"
            ? "Backend Connected ✅"
            : backendStatus}
        </div>
      </div>

      {/* SUBJECT CARDS */}
      <div className="card-grid">
        <SubjectCard
          title="Biology"
          description="Human anatomy and cell structures in 3D"
          link="/biology"
        />

        <SubjectCard
          title="Chemistry"
          description="Chemical reactions and laboratory apparatus"
          link="/chemistry"
        />

        <SubjectCard
          title="Physics"
          description="Motion, magnetism, and physical laws"
          link="/physics"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;