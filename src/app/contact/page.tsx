"use client";

export default function Contact() {
  const topGradient = "bg-gradient-to-b from-[#eaf3fa] to-[#f8fafc]";
  const supportOptions = [
    {
      icon: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 text-2xl">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 1.09-1.77l7-3.11a2 2 0 0 1 1.82 0l7 3.11A2 2 0 0 1 22 16.92z" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </span>
      ),
      title: "24/7 Support Hotline",
      desc: (
        <>
          <span className="font-semibold">+91-911-971-SATH</span>
          <br />
          <span className="text-xs">(+91-911-353-372-273)</span>
        </>
      ),
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 text-2xl">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 3h-8" />
            <path d="M22 7l-10 7L2 7" />
          </svg>
        </span>
      ),
      title: "Email Support",
      desc: (
        <>
          <span className="font-semibold">support@sathilo.com</span>
          <br />
          <span className="text-xs">Response within 4 hours</span>
        </>
      ),
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 text-2xl">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15h8M8 11h8M8 7h8" />
          </svg>
        </span>
      ),
      title: "Live Chat",
      desc: (
        <>
          <span className="font-semibold">Available 24/7</span>
          <br />
          <span className="text-xs">Average response: 2 minutes</span>
        </>
      ),
    },
    {
      icon: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 text-2xl">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 8v4" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        </span>
      ),
      title: "Emergency Line",
      desc: (
        <>
          <span className="font-semibold">+91-911-EMERGENCY</span>
          <br />
          <span className="text-xs">Immediate assistance</span>
        </>
      ),
    },
  ];
  const offices = [
    {
      city: "Mumbai (Headquarters)",
      address: "15th Floor, Nariman Point, Mumbai - 400021",
      phone: "+91-22-6789-0123",
      email: "mumbai@sathilo.com",
      hours: "Mon-Sun: 24/7",
    },
    {
      city: "Delhi NCR",
      address: "Sector 44, Gurgaon - 122003",
      phone: "+91-124-456-7890",
      email: "delhi@sathilo.com",
      hours: "Mon-Sun: 24/7",
    },
    {
      city: "Bangalore",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91-80-1234-5678",
      email: "bangalore@sathilo.com",
      hours: "Mon-Sun: 24/7",
    },
    {
      city: "Pune",
      address: "Baner, Pune - 411045",
      phone: "+91-20-9876-5432",
      email: "pune@sathilo.com",
      hours: "Mon-Sun: 24/7",
    },
  ];
  const faqs = [
    {
      q: "How quickly can I get a caregiver?",
      a: "For urgent needs, we can arrange a caregiver within 2-4 hours. For planned care, we recommend booking 24 hours in advance for the best match.",
    },
    {
      q: "What if I need emergency care?",
      a: "Our emergency line is available 24/7. Call +91-911-EMERGENCY for immediate assistance. We have caregivers on standby for urgent situations.",
    },
    {
      q: "How do you verify caregivers?",
      a: "All caregivers undergo comprehensive background checks, identity verification, reference checks, and skill assessments before joining our platform.",
    },
    {
      q: "Can I change caregivers if needed?",
      a: "Absolutely! If you’re not satisfied with your current caregiver, we can arrange a replacement within 24 hours at no additional cost.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section */}
      <div
        className={`${topGradient} w-full pt-16 pb-10 border-b border-gray-100`}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Need help finding the right care? Have questions about our services?
            Our care specialists are here to help you 24/7. Reach out through
            any channel that works best for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {supportOptions.map((opt) => (
              <div
                key={opt.title}
                className="card p-6 flex flex-col items-center text-center"
              >
                {opt.icon}
                <div className="font-semibold mt-3 mb-1">{opt.title}</div>
                <div className="text-gray-700 text-sm">{opt.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white pb-12">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <div className="card p-6 text-left">
              <div className="font-bold text-lg mb-4">Send us a Message</div>
              <form className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      className="border border-gray-200 rounded px-3 py-2 w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      className="border border-gray-200 rounded px-3 py-2 w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      className="border border-gray-200 rounded px-3 py-2 w-full"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Care Type
                    </label>
                    <select className="border border-gray-200 rounded px-3 py-2 w-full">
                      <option>General Inquiry</option>
                      <option>Find a Caregiver</option>
                      <option>Medical Support</option>
                      <option>Emergency</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <input
                    className="border border-gray-200 rounded px-3 py-2 w-full"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    className="border border-gray-200 rounded px-3 py-2 w-full"
                    placeholder="Please describe your care needs, questions, or how we can help you..."
                    rows={4}
                    maxLength={500}
                  />
                  <div className="text-xs text-gray-400 mt-1 text-right">
                    0/500 characters
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary mt-2">
                  Send Message
                </button>
              </form>
            </div>
            {/* Map & Offices */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Sathilo Mumbai HQ"
                  src="https://www.google.com/maps?q=Nariman+Point,+Mumbai&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Our Offices Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="font-bold mb-2">Our Offices</div>
                <ul className="space-y-3 text-sm">
                  {offices.map((o) => (
                    <li key={o.city}>
                      <div className="font-semibold">{o.city}</div>
                      <div className="text-gray-600">{o.address}</div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span>📞</span> <span>{o.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span>✉️</span> <span>{o.email}</span>
                      </div>
                      <div className="text-xs text-gray-400">{o.hours}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Answers Section */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-2">Quick Answers</h2>
            <p className="text-gray-500 mb-8 text-sm">
              Common questions we receive from families seeking care.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6 mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-blue-400 cursor-pointer"
              >
                <div className="font-semibold mb-1">{faq.q}</div>
                <div className="text-gray-600 text-sm">{faq.a}</div>
              </div>
            ))}
          </div>
          <div className="mb-16 text-center">
            <button className="mx-auto block bg-blue-50 text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-blue-100">
              View All FAQs
            </button>
          </div>
        </div>

        {/* Need Emergency Care Section */}
        <div className="w-full bg-red-50 border-t border-red-200 py-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 text-3xl mb-3">
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M12 8v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
            </span>
            <div className="text-lg font-bold text-red-700 mb-2">
              Need Emergency Care?
            </div>
            <div className="text-red-700 mb-4">
              For urgent care situations, call our emergency hotline
              immediately.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+91911EMERGENCY"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
              >
                Call Emergency: +91-911-EMERGENCY
              </a>
              <a
                href="#"
                className="bg-white border border-red-300 text-red-700 font-semibold px-6 py-3 rounded-md hover:bg-red-100"
              >
                Live Chat Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
