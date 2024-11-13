import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Data Science",
      skills: ["Data Analysis", "Machine Learning", "Statistical Modeling", "Data Visualization", "Big Data Analytics", "Predictive Modeling", "Deep Learning", "Data Mining", "Statistical Inference", "Hypothesis Testing", "Data Cleaning"]
    },
    {
      category: "Business Consultation",
      skills: ["Strategic Planning", "Business Analysis", "Market Research", "Financial Analysis", "Problem-Solving", "Project Management", "Risk Assessment", "Negotiation Skills"]
    }
  ];

  return (
    <section data-layername="skills" className="flex flex-col mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <div data-layername="headingWrapper" className="flex flex-col items-start px-6 pt-6 pb-8 w-full border-b border-solid border-b-gray-200 max-md:px-5 max-md:max-w-full">
        <div data-layername="iconWrapper" className="flex gap-2.5 items-center p-3.5 rounded-xl border border-gray-200 border-solid bg-neutral-100 h-[52px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a5d05e4afa6c1f08eddf37acee4529901b43403a3bf2514b9cd02c4eb0f7d?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain w-6 aspect-square" />
        </div>
        <div data-layername="headingParagraph" className="flex flex-col mt-6 font-medium max-w-[400px] w-[400px]">
          <h2 data-layername="professionalSkills" className="text-xl tracking-tighter leading-tight text-neutral-800">Professional Skills</h2>
          <p data-layername="keyCompetenciesEssentialForNavigatingAndExcellingInVariousProfessionalContexts" className="mt-3 text-sm tracking-tight leading-5 text-zinc-500">Key competencies essential for navigating and excelling in various professional contexts.</p>
        </div>
      </div>
      <div data-layername="skillsWrapper" className="flex flex-col px-6 pt-8 pb-10 w-full font-medium max-md:px-5 max-md:max-w-full">
        {skillCategories.map((category, index) => (
          <div key={index} data-layername="headingSkills" className="flex flex-col w-full max-md:max-w-full">
            <h3 data-layername="dataScience" className="text-base tracking-tight leading-tight text-neutral-800 max-md:max-w-full">{category.category}</h3>
            <div data-layername="skills" className="flex flex-wrap gap-2 items-start mt-4 w-full text-xs tracking-normal leading-snug text-neutral-700 max-md:max-w-full">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} data-layername="chips" className="flex gap-1.5 items-center py-1.5 pr-2.5 pl-3 bg-white rounded-lg border border-gray-200 border-solid">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3e20d2c7d48eddc099aa17e89fb273cc0cb1ea1bcb08216dfb87b52a831f16?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                  <span data-layername="jun2021Present">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;