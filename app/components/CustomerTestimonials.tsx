"use client";

const testimonials = [
  {
    name: "Anita Sharma",
    role: "IT Manager",
    company: "TechNova Ltd.",
    quote:
      "SoftSell helped us recover value from licenses we thought were useless. The process was smooth and super fast!",
  },
  {
    name: "Rahul Mehta",
    role: "Procurement Head",
    company: "ByteForge Inc.",
    quote:
      "Professional team and seamless experience. Highly recommended for any business with surplus licenses.",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors">
      <div className="max-w-4xl mx-auto text-center text-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left transition-colors"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
