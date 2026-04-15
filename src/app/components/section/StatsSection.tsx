'use client'

import { useTranslation } from "../hooks/useTranslation"

const StatsSection = () => {
  const t = useTranslation()
  
  const stats = [
    { 
      count: 300, 
      label: t.stats?.item1 || 'Experience Teacher' 
    },
    { 
      count: 1000, 
      label: t.stats?.item2 || 'Successful Students' 
    },
    { 
      count: 600, 
      label: t.stats?.item3 || 'Expert Learners' 
    },
    { 
      count: 800, 
      label: t.stats?.item4 || 'Happy Students' 
    },
  ];

  return (
    <section className="flex flex-col justify-center py-16 md:py-24 bg-white">
      <div className="w-full max-w-[80%] mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[#060735]">
          {t.stats?.title || "Why Choose ADI?"}
        </h1>
        <p className="text-gray-700 mt-2">
          {t.stats?.description || "We provide more than just technical training — we prepare you for career success."}
        </p>
      </div>

      <div className="w-full max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="overflow-hidden rounded-xl w-fit shadow-lg">
            <img
              src="/images/graduation.jpg"
              alt="Happy African graduate student in cap and gown smiling and holding diploma"
              width={500}
              height={700}
              className="rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-95"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#060735] leading-tight">
            {t.stats?.accessTitle || "Access learning"} <span className="text-[#FFB600]">{t.stats?.accessWord1 || "anytime"}</span> {t.stats?.accessAnd || "and"}{' '}
            <span className="text-[#FFB600]">{t.stats?.accessWord2 || "anywhere"}</span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            {t.stats?.accessDescription || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting."}
          </p>

          <div className="grid grid-cols-2 gap-y-6 border-t border-b border-gray-300 py-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col pr-4">
                <div className="text-3xl font-bold text-black">{stat.count}+ </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="/apply" className="w-fit">
            <button
              className="px-8 py-3 border border-gray-400 text-base font-medium rounded-md text-black 
              hover:bg-gray-100 transition cursor-pointer"
            >
              {t.stats?.getStartedButton || "Get Started"} →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;