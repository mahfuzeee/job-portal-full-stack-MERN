const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Padma Jobs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are on a mission to connect talented individuals with innovative
          companies. Since 2023, Padma Jobs has helped thousands of job seekers
          find their dream roles.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-blue-600">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To simplify the job search process by providing a transparent,
            easy-to-use platform where job seekers can find authentic
            opportunities and companies can discover top talent effortlessly.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-blue-600">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become the global leader in career connections, empowering
            individuals to build fulfilling careers and helping organizations
            achieve their goals through great hires.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50 py-12 rounded-lg mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">10k+</h3>
            <p className="text-gray-700 mt-2">Active Job Listings</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">5k+</h3>
            <p className="text-gray-700 mt-2">Partner Companies</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-700 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We maintain transparency in every connection.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Constantly improving our platform for better matches.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="text-gray-600">
              Making a real difference in people's lives and businesses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
