import Image from "next/image";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Card with Image - Full Page Cover */}
      <section
        className="relative w-screen min-h-[400px] md:min-h-[520px] flex items-center justify-center bg-gray-100 overflow-hidden mb-8"
        style={{
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
        }}
      >
        <Image
          src="/home-caregiver-assisting-a-senior-woman-to-get-clothed-in-a-nursing-home.webp"
          alt="ElderCare Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          draggable={false}
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className="relative z-20 text-center w-full px-4 flex flex-col items-center justify-center"
          style={{ minHeight: "400px" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-3 mt-8">
            About ElderCare
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white drop-shadow">
            We’re on a mission to transform elderly care in India by connecting
            families with trusted, professional caregivers who provide
            compassionate, high-quality care services.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To provide accessible, affordable, and high-quality elderly care
              services that enable seniors to age in place with dignity while
              giving families peace of mind.
            </p>
            <p className="text-gray-700">
              We believe every elderly person deserves dignified, compassionate
              care, and every family deserves support in their caregiving
              journey.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-64">
            <Image
              src="/about.png"
              alt="Our Mission"
              className="object-cover w-full h-full absolute inset-0"
              fill
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Our Story / Testimonial */}
      <section id="our-story" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Our Story</h3>
          <p className="text-gray-600 mb-6">
            ElderCare was born from a personal experience of struggling to find
            reliable, professional care for aging parents — and a desire to
            build a better way.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 max-w-3xl text-center shadow-md">
            <div className="text-gray-800 mb-4">
              “When my grandmother needed care, we spent weeks searching for a
              reliable caregiver. The process was frustrating and filled with
              uncertainty. That’s when we realized there had to be a better way.
              ElderCare was created to solve this problem for millions of
              families.”
            </div>
            <div className="mt-4">
              <div className="font-semibold">Dr. Priya Sharma</div>
              <div className="text-sm text-gray-600">Founder & CEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Values</h3>
          <p className="text-center text-gray-600 mb-8">
            The principles that guide everything we do at ElderCare.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
              <IconCircle>❤</IconCircle>
              <div>
                <div className="font-semibold">Compassion First</div>
                <div className="text-sm text-gray-600">
                  Every decision we make is guided by empathy and genuine care.
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
              <IconCircle>🔒</IconCircle>
              <div>
                <div className="font-semibold">Trust & Safety</div>
                <div className="text-sm text-gray-600">
                  We maintain high standards of background verification and
                  training.
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
              <IconCircle>👪</IconCircle>
              <div>
                <div className="font-semibold">Family-Centered Care</div>
                <div className="text-sm text-gray-600">
                  We involve families in care decisions and keep them informed.
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex gap-4 items-start">
              <IconCircle>⭐</IconCircle>
              <div>
                <div className="font-semibold">Excellence</div>
                <div className="text-sm text-gray-600">
                  We continuously strive to exceed expectations in care quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline - Centered, Both Sides, Blue Dots, Clean Modern Look */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
        <p className="text-center text-gray-600 mb-8">
          Key milestones in our mission to transform elderly care in India.
        </p>
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-1 bg-blue-200 h-full z-0"
            style={{ transform: "translateX(-50%)" }}
          />
          <div className="flex flex-col gap-12">
            {[
              {
                year: 2020,
                title: "Founded ElderCare",
                text: "Started with a vision to revolutionize elder care services in India.",
              },
              {
                year: 2021,
                title: "1,000+ Caregivers",
                text: "Built a network of verified, professional caregivers across major cities.",
              },
              {
                year: 2022,
                title: "10,000+ Families Served",
                text: "Reached milestone of serving over 10,000 families with quality care.",
              },
              {
                year: 2023,
                title: "National Expansion",
                text: "Expanded services to 25+ cities across India with 24/7 support.",
              },
              {
                year: 2024,
                title: "Technology Innovation",
                text: "Launched AI-powered matching and family collaboration tools.",
              },
            ].map((item, idx, arr) => (
              <div
                key={idx}
                className="relative flex md:justify-between items-center group"
              >
                {/* Left Side (even idx) */}
                <div
                  className={`hidden md:flex w-1/2 justify-end pr-8 ${
                    idx % 2 !== 0 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <div className="bg-white rounded-lg shadow p-5 min-w-[320px] max-w-[380px] border border-blue-100 transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600 font-bold text-base md:text-lg">
                        {item.year}
                      </span>
                      <span className="font-semibold text-sm md:text-base">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">
                      {item.text}
                    </div>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-blue-500 shadow transition-all duration-200 group-hover:bg-blue-500 group-hover:border-blue-700" />
                  {idx !== arr.length - 1 && (
                    <div className="w-1 h-12 bg-blue-200" />
                  )}
                </div>
                {/* Right Side (odd idx) */}
                <div
                  className={`hidden md:flex w-1/2 justify-start pl-8 ${
                    idx % 2 === 0 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  <div className="bg-white rounded-lg shadow p-5 min-w-[320px] max-w-[380px] border border-blue-100 transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600 font-bold text-base md:text-lg">
                        {item.year}
                      </span>
                      <span className="font-semibold text-sm md:text-base">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">
                      {item.text}
                    </div>
                  </div>
                </div>
                {/* Mobile: All cards full width below dot */}
                <div className="md:hidden w-full mt-2">
                  <div className="bg-white rounded-lg shadow p-5 border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-blue-600 font-bold text-base">
                        {item.year}
                      </span>
                      <span className="font-semibold text-sm">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-gray-600 text-xs">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h3>
          <p className="text-center text-gray-600 mb-8">
            Healthcare professionals and technology experts committed to
            improving elderly care.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Priya Sharma", title: "Chief Executive Officer" },
              { name: "Rajesh Kumar", title: "Chief Technology Officer" },
              { name: "Dr. Meera Nair", title: "Head of Medical Affairs" },
              { name: "Arjun Patel", title: "Head of Operations" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded p-6 text-center shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 relative">
                  <Image
                    src="/about.png"
                    alt={p.name}
                    className="object-cover w-full h-full absolute inset-0"
                    fill
                  />
                </div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-500 mb-2">{p.title}</div>
                <a className="text-blue-600 text-sm">in</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Certifications & Compliance
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {/* HIPAA Compliant */}
          <div className="bg-white rounded p-6 text-center shadow flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded bg-green-50 flex items-center justify-center text-green-600">
              {/* Shield/lock icon for HIPAA */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12v-1a3 3 0 116 0v1"
                />
                <circle cx="12" cy="15" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="font-semibold text-sm">HIPAA Compliant</div>
          </div>
          {/* ISO 27001 */}
          <div className="bg-white rounded p-6 text-center shadow flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded bg-green-50 flex items-center justify-center text-green-600">
              {/* Globe icon for ISO 27001 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M3 12h18M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18"
                />
              </svg>
            </div>
            <div className="font-semibold text-sm">ISO 27001</div>
          </div>
          {/* NABH Standards */}
          <div className="bg-white rounded p-6 text-center shadow flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded bg-green-50 flex items-center justify-center text-green-600">
              {/* Hospital/medical cross icon for NABH */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <rect
                  x="6"
                  y="6"
                  width="12"
                  height="12"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 9v6M9 12h6"
                />
              </svg>
            </div>
            <div className="font-semibold text-sm">NABH Standards</div>
          </div>
          {/* CII Healthcare */}
          <div className="bg-white rounded p-6 text-center shadow flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded bg-green-50 flex items-center justify-center text-green-600">
              {/* Award/medal icon for CII Healthcare */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <circle
                  cx="12"
                  cy="10"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 15v5M9 21h6"
                />
              </svg>
            </div>
            <div className="font-semibold text-sm">CII Healthcare</div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="max-w-2xl mx-auto mb-6 text-white/90">
            Whether you’re a family seeking care or a professional caregiver,
            join us in creating a better future for elderly care in India.
          </p>
          <div className="flex justify-center gap-4">
            <a
              className="inline-block bg-white/10 text-white px-5 py-3 rounded-md"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
