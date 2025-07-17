import React, { useState, useEffect } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/api.json")
      .then((response) => {
        if (!response.ok) throw new Error("خطأ في تحميل البيانات");
        return response.json();
      })
      .then((data) => setJobs(data))
      .catch((error) => console.error("خطأ في الاتصال:", error));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchTitle = job.title.toLowerCase().includes(search.toLowerCase());
    const matchLocation = filterLocation ? job.location === filterLocation : true;
    const matchType = filterType ? job.job_type === filterType : true;
    return matchTitle && matchLocation && matchType;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
  const uniqueTypes = [...new Set(jobs.map((job) => job.job_type))];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-600 inline-block pb-2">
          الوظائف المتاحة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="ابحث باسم الوظيفة..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="p-3 border border-gray-300 rounded-lg"
          />

          <select
            value={filterLocation}
            onChange={(e) => {
              setFilterLocation(e.target.value);
              setCurrentPage(1);
            }}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="">كل المدن</option>
            {uniqueLocations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setCurrentPage(1);
            }}
            className="p-3 border border-gray-300 rounded-lg"
          >
            <option value="">كل الأنواع</option>
            {uniqueTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setSearch("");
              setFilterLocation("");
              setFilterType("");
              setCurrentPage(1);
            }}
            className="bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition px-4"
          >
            إعادة تعيين
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">{job.title}</h3>
                <p className="text-gray-700">{job.company_name}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-green-700 font-medium mt-2">الراتب: {job.salary}</p>
                <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {job.job_type}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">لا توجد وظائف مطابقة.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10 flex-wrap">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              الأولى
            </button>

            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              السابقة
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              التالية
            </button>

            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              الأخيرة
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
