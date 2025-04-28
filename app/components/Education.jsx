import React from "react";

function Education() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-green-400 mb-12">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-t-4 border-green-800">
            <p className="text-green-900 dark:text-green-300 font-semibold mb-1">
              2010 - 2011
            </p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              High School Degree
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Nalanda Vidhyalaya <br /> (Faridabad)
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-t-4 border-green-800">
            <p className="text-green-900 dark:text-green-300 font-semibold mb-1">
              2011 - 2015
            </p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              Diploma
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Computer Science and Engineering (G.P.W Sirsa)
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-t-4 border-green-800">
            <p className="text-green-900 dark:text-green-300 font-semibold mb-1">
              2015 - 2018
            </p>
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              Bachelor’s Degree
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Computer Science and Engineering (G.J.U Hisar)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
