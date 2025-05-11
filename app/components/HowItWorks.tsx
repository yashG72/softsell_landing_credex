const steps = [
  {
    title: "Upload License",
    description: "Securely upload the license details you wish to sell.",
    icon: "📤",
  },
  {
    title: "Get Valuation",
    description: "We evaluate and suggest the best market value instantly.",
    icon: "📊",
  },
  {
    title: "Get Paid",
    description: "Accept the offer and receive payment quickly.",
    icon: "💸",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
