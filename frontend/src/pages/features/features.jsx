import React from 'react';
import './features.css';

const features = [
  {
    title: "Dynamic Token Pricing",
    points: [
      "Token prices dynamically adjust based on both market demand and engagement metrics of the associated YouTube channel.",
    ],
  },
  {
    title: "Engagement-Based Monetization",
    points: [
      "Content creators earn royalties from trading fees, providing a new revenue stream directly linked to their audience engagement.",
    ],
  },
  {
    title: "Blockchain Platform",
    points: [
      "EngageCoin is built on the Polygon network, leveraging its fast, low-cost, and scalable blockchain capabilities.",
    ],
  },
  {
    title: "Smart Contracts",
    points: [
      "Custom ERC-20 token contracts handle dynamic pricing adjustments and royalty distribution mechanisms.",
    ],
  },
  {
    title: "Decentralized Exchange",
    points: [
      "The QuickSwap DEX on Polygon provides liquidity and trading infrastructure for EngageCoin tokens.",
    ],
  },
  {
    title: "Engagement Data Integration",
    points: [
      "EngageCoin fetches real-time engagement metrics such as likes, comments, and views from the YouTube Data API.",
      "A custom oracle integrates the YouTube data into the Polygon smart contracts for dynamic price adjustments.",
    ],
  },
  {
    title: "Future Roadmap",
    points: [
      "Transition to the Polygon mainnet for broader adoption and real-world trading.",
      "Explore integrations with additional social media platforms to extend the EngageCoin ecosystem.",
      "Develop new features and functionalities, such as advanced analytics, for more value to creators and investors.",
    ],
  },
];

const Features = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <h3>{feature.title}</h3>
          <ul>
            {feature.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Features;
