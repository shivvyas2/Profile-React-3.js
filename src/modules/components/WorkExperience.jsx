import React from 'react';

function WorkExperience() {
  const experiences = [
    {
      position: "Data Scientist & Business Consultant",
      company: "TechNova",
      type: "Full-Time",
      date: "Jun 2021 - Present",
      location: "Phoenix, Arizona, USA",
      description: "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making."
    },
    {
      position: "Data Analyst & Business Strategist",
      company: "SwiftEdge",
      type: "Contract",
      date: "Oct 2017 - May 2021",
      location: "Dallas, Texas, USA",
      description: "Skillfully combining data analysis proficiency with strategic business acumen, adeptly navigating complex datasets to inform strategic decision-making and drive organizational growth initiatives."
    },
    {
      position: "Analytics Specialist & Business Advisor",
      company: "NexusWorks",
      type: "Full-Time",
      date: "Jan 2016 - Sep 2017",
      location: "Houston, Texas, USA",
      description: "Leveraging specialized analytics expertise alongside strategic business advisory skills, providing actionable insights and guidance to optimize business performance and achieve strategic objectives."
    },
    {
      position: "Business Consultant & Analytics Expert",
      company: "ProActive",
      type: "Internship",
      date: "Aug 2014 - Jan 2016",
      location: "Newark, New Jersey, USA",
      description: "Seamlessly integrating business consulting prowess with advanced analytics expertise, delivering tailored solutions and actionable insights to drive organizational success and enhance strategic decision-making processes."
    }
  ];

  return (
    <section data-layername="workExperience" className="flex flex-col mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <div data-layername="headingWrapper" className="flex flex-col items-start px-6 pt-6 pb-8 w-full border-b border-solid border-b-gray-200 max-md:px-5 max-md:max-w-full">
        <div data-layername="iconWrapper" className="flex gap-2.5 items-center p-3.5 rounded-xl border border-gray-200 border-solid bg-neutral-100 h-[52px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f6a894a1de1eb2f266d9f3e3933dcdf10408365b5740bd866744a490600b648?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain w-6 aspect-square" />
        </div>
        <div data-layername="headingParagraph" className="flex flex-col mt-6 font-medium max-w-[400px] w-[400px]">
          <h2 data-layername="workExperience" className="text-xl tracking-tighter leading-tight text-neutral-800">Work Experience</h2>
          <p data-layername="provenTrackRecordInDataScienceAndBusinessConsultingDeliveringImpactfulInsightsAndResultsAcrossIndustries" className="mt-3 text-sm tracking-tight leading-5 text-zinc-500">Proven track record in data science and business consulting, delivering impactful insights and results across industries.</p>
        </div>
      </div>
      <div data-layername="experienceWrapper" className="flex relative flex-col pt-8 pr-6 pb-10 pl-8 w-full max-md:px-5 max-md:max-w-full">
        <div data-layername="line" className="flex absolute top-9 left-9 bottom-10 z-0 w-0.5 bg-neutral-100 min-h-[718px]"></div>
        {experiences.map((exp, index) => (
          <div key={index} data-layername="experience" className="flex z-0 flex-wrap gap-6 items-start w-full max-md:max-w-full">
            <div className="flex gap-2.5 items-start py-1 w-2.5">
              <div data-layername="ellipse" className="flex w-2.5 h-2.5 border-2 border-white border-solid bg-neutral-400 min-h-[10px] rounded-[100px]"></div>
            </div>
            <div data-layername="experience" className="flex flex-col flex-1 shrink font-medium basis-0 min-w-[240px] max-md:max-w-full">
              <div data-layername="positionInfoDuration" className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
                <div data-layername="positionInfo" className="flex flex-col flex-1 shrink basis-[22px] min-w-[240px] max-md:max-w-full">
                  <h3 data-layername="dataScientistBusinessConsultant" className="text-base tracking-tight leading-tight text-neutral-800 max-md:max-w-full">{exp.position}</h3>
                  <div data-layername="experienceInfo" className="flex gap-1.5 items-center self-start mt-1.5 text-xs tracking-normal leading-snug whitespace-nowrap text-zinc-500">
                    <span data-layername="techNova">{exp.company}</span>
                    <span data-layername="fullTime">{exp.type}</span>
                  </div>
                </div>
                <div data-layername="chips" className="flex gap-1.5 items-center py-1.5 pr-2.5 pl-3 text-xs tracking-normal leading-snug bg-white rounded-lg border border-gray-200 border-solid text-neutral-700">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/799a7dad14d4d9732e063267889a1752ead2c13a8326280eb6d5c4928b9a9742?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                  <span data-layername="jun2021Present">{exp.date}</span>
                </div>
              </div>
              <div data-layername="location" className="flex gap-1.5 items-center self-start mt-4 text-xs tracking-normal leading-snug text-zinc-500">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b627f455c59c5a94ae8f27beb6276255b7fc88ff6fb862a87de9db023bdffd1b?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
                <span data-layername="phoenixArizonaUsa">{exp.location}</span>
              </div>
              Continuing from where we left off:

              <p data-layername="demonstratingASeamlessIntegrationOfDataScienceAcumenAndBusinessConsultingProficiencyEffectivelyDrivingTransformativeInitiativesAndDeliveringStrategicInsightsToOptimizeOrganizationalPerformanceAndFacilitateInformedDecisionMaking" className="mt-4 text-xs tracking-normal leading-4 max-w-[400px] text-zinc-500">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;