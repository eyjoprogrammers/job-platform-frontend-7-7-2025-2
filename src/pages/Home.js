import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  // ✅ جلب الوظائف من API وترتيبها حسب ID تنازليًا (الأحدث أولاً)
  useEffect(() => {
    // استخدام مسار نسبي للوصول إلى api.json داخل public
    axios.get("/api.json")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error("خطأ في جلب الوظائف:", err);
      });
  }, []);

  return (
    <div className="rtl text-right font-sans ">
      {/* Hero Section */}
      <section className="bg-secondary text-dark py-20 px-4 text-center mt-5">
        <h1 className="text-4xl font-bold mb-4 underline">منصتك الأفضل للوظائف في العراق والخليج</h1>
        <p className="text-lg mb-6 text-secondary">
          اكتشف آلاف الفرص من أفضل الشركات. انطلق في رحلتك المهنية الآن!
        </p>
        <Link to="/jobs">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-red-700 transition">
            تصفح الوظائف
          </button>
        </Link>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-dark mb-10 underline">لماذا تختار منصتنا؟</h2>
        <div className="grid md:grid-cols-3 gap-6 text-dark text-center">
          <div className="bg-secondary rounded-2xl shadow-md p-6 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">سهولة التقديم</h3>
            <p>من خلال واجهة سهلة الاستخدام يمكنك تقديم سيرتك في دقائق.</p>
          </div>
          <div className="bg-secondary rounded-2xl shadow-md p-6 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">شركات موثوقة</h3>
            <p>نتعامل فقط مع جهات توظيف موثوقة ومعروفة في السوق.</p>
          </div>
          <div className="bg-secondary rounded-2xl shadow-md p-6 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">فرص متنوعة</h3>
            <p>الوظائف تغطي مختلف القطاعات والمجالات في العراق والخليج.</p>
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-dark mb-10 underline">أحدث الوظائف</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-secondary rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">{job.title}</h3>
                <p className="text-gray-700">{job.company_name}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-green-700 font-medium mt-2">
                  الراتب: {job.salary}$
                </p>
                <span className="inline-block mt-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {job.job_type}
                </span>
                <Link to="/jobs">
                  <button className="mt-4 block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-2 rounded-lg font-semibold">
                    تفاصيل
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">جاري تحميل الوظائف...</p>
          )}
        </div>

        {/* زر عرض كل الوظائف */}
        <div className="text-center mt-8">
          <Link to="/jobs">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold">
              عرض كل الوظائف
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
