export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-gray-50" dir="rtl">

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          مشاريعنا
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          مجموعة من أبرز أعمالنا التي تعكس التزامنا بالجودة والابتكار والتميز المعماري.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project 1 */}
        <img
          src="./assets/pro1.jpg"
          alt="مشروع 1"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />

        {/* Project 2 */}
        <img
          src="./assets/pro2.jpg"
          alt="مشروع 2"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />

        {/* Project 3 */}
        <img
          src="./assets/pro3.jpg"
          alt="مشروع 3"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />

        {/* Project 4 */}
        <img
          src="./assets/pro4.jpg"
          alt="مشروع 4"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />

        {/* Project 5 */}
        <img
          src="./assets/pro5.jpg"
          alt="مشروع 5"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />

        {/* Project 6 */}
        <img
          src="./assets/pro6.jpg"
          alt="مشروع 6"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
        />
      </div>

    </section>
  );
}
