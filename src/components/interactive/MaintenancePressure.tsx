import { useMemo, useState } from "react";
import "./MaintenancePressure.css";

interface Recommendation {
  label: string;
  summary: string;
  nextSteps: string[];
}

const getRecommendation = (score: number): Recommendation => {
  if (score < 3.5) {
    return {
      label: "Keep it direct",
      summary: "Optimise for speed of learning and easy replacement.",
      nextSteps: [
        "Use the smallest clear shape",
        "Test the risky behaviour",
        "Avoid premature extension points",
      ],
    };
  }

  if (score < 6.5) {
    return {
      label: "Add lightweight structure",
      summary: "The code is likely to repay a few explicit boundaries.",
      nextSteps: [
        "Name ownership boundaries",
        "Cover important changes with tests",
        "Record consequential decisions",
      ],
    };
  }

  return {
    label: "Design for sustained change",
    summary: "Future coordination and migration costs now deserve deliberate treatment.",
    nextSteps: [
      "Define stable contracts",
      "Plan observability and migration",
      "Make ownership explicit",
    ],
  };
};

const MaintenancePressure = () => {
  const [longevity, setLongevity] = useState(5);
  const [contributors, setContributors] = useState(3);
  const [uncertainty, setUncertainty] = useState(6);

  const score = useMemo(() => {
    const contributorPressure = ((contributors - 1) / 11) * 10;
    return longevity * 0.35 + contributorPressure * 0.35 + uncertainty * 0.3;
  }, [contributors, longevity, uncertainty]);

  const recommendation = getRecommendation(score);
  const roundedScore = score.toFixed(1);

  return (
    <section className="maintenance-model" aria-labelledby="maintenance-model-title">
      <div className="maintenance-model__intro">
        <div>
          <p className="maintenance-model__eyebrow">Interactive model</p>
          <h2 id="maintenance-model-title">Maintenance pressure</h2>
        </div>
        <p>
          Adjust the assumptions. The model weights lifespan and contributor count slightly above
          uncertainty.
        </p>
      </div>

      <div className="maintenance-model__body">
        <div className="maintenance-model__controls">
          <div className="maintenance-model__control">
            <div className="maintenance-model__control-heading">
              <label htmlFor="maintenance-lifespan">Expected lifespan</label>
              <output htmlFor="maintenance-lifespan">{longevity} / 10</output>
            </div>
            <input
              id="maintenance-lifespan"
              type="range"
              min="1"
              max="10"
              value={longevity}
              aria-describedby="maintenance-lifespan-help"
              onChange={(event) => setLongevity(Number(event.currentTarget.value))}
            />
            <small id="maintenance-lifespan-help">Disposable experiment → long-lived system</small>
          </div>

          <div className="maintenance-model__control">
            <div className="maintenance-model__control-heading">
              <label htmlFor="maintenance-contributors">Regular contributors</label>
              <output htmlFor="maintenance-contributors">{contributors}</output>
            </div>
            <input
              id="maintenance-contributors"
              type="range"
              min="1"
              max="12"
              value={contributors}
              aria-describedby="maintenance-contributors-help"
              onChange={(event) => setContributors(Number(event.currentTarget.value))}
            />
            <small id="maintenance-contributors-help">One owner → a larger shared codebase</small>
          </div>

          <div className="maintenance-model__control">
            <div className="maintenance-model__control-heading">
              <label htmlFor="maintenance-uncertainty">Requirement uncertainty</label>
              <output htmlFor="maintenance-uncertainty">{uncertainty} / 10</output>
            </div>
            <input
              id="maintenance-uncertainty"
              type="range"
              min="1"
              max="10"
              value={uncertainty}
              aria-describedby="maintenance-uncertainty-help"
              onChange={(event) => setUncertainty(Number(event.currentTarget.value))}
            />
            <small id="maintenance-uncertainty-help">Stable problem → moving target</small>
          </div>
        </div>

        <div className="maintenance-model__result" aria-live="polite">
          <div className="maintenance-model__score">
            <span>Pressure score</span>
            <strong>{roundedScore}</strong>
          </div>
          <meter
            className="maintenance-model__meter"
            aria-label="Maintenance pressure score"
            min={0}
            max={10}
            value={Number(roundedScore)}
          >
            {roundedScore} out of 10
          </meter>
          <h3>{recommendation.label}</h3>
          <p>{recommendation.summary}</p>
          <ul>
            {recommendation.nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePressure;
