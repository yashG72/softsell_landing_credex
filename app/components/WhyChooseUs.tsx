const benefits = [
  {
    icon: "⚡",
    title: "Fast Process",
    description: "Instant valuations and payouts so you’re never left waiting.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description: "We handle your data with top-grade security and privacy.",
  },
  {
    icon: "💼",
    title: "Business Focused",
    description: "Built for companies to streamline license resale with ease.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description: "We’re always here to help via email, chat, or phone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
