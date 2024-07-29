import React from "react";
import Card from "../ui components/card";

const currentData = {
  currentTitle: <>We Understand the Current Landscape</>,
  cardData: [
    {
      id: 1,
      title: "Coder Shortages Lead to Poor Quality",
      description: "Poor quality makes it difficult to maximize revenue.",
    },
    {
      id: 2,
      title: "Increased Operations Costs",
      description:
        "Financial pressure due to fluctuating patient volumes and labor market.",
    },
    {
      id: 3,
      title: "Delayed Revenue",
      description:
        "Revenue leakage owing to late and/or inaccurate claims submission and denied claims.",
    },
  ],
};


function Current() {
  return (
    <section className="py-16">
      <div className="container-common">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl">{currentData.currentTitle}</h1>
          <div className="border-b-4 border-secondary w-24"></div>
        </div>
        <div className="flex flex-wrap items-center gap-6 pt-16">
          {currentData.cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Current;
