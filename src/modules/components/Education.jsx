import React from 'react';

function Education() {
  const educations = [
    {
      university: "Princeton University",
      degree: "Master's degree",
      field: "Data Science",
      date: "Sep 2015 - Dec 2016"
    },
    {
      university: "Montclair State University",
      degree: "Bachelor's degree",
      field: "Artificial Intelligence",
      date: "Sep 2011 - Jun 2015"
    }
  ];

  return (
    <section data-layername="education" className="flex flex-col mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <div data-layername="headingWrapper" className="flex flex-col items-start px-6 pt-6 pb-8 w-full border-b border-solid border-b-gray-200 max-md:px-5 max-md:max-w-full">
        <div data-layername="iconWrapper" className="flex gap-2.5 items-center p-3.5 rounded-xl border border-gray-200 border-solid bg-neutral-100 h-[52px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6174b01146187ae4b993c134b45fa43ac6dbaf2d81a466b45fe178148f7d8695?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain w-6 aspect-square" />
        </div>
        <div data-layername="headingParagraph" className="flex flex-col mt-6 font-medium max-w-[400px] w-[400px]">
          <h2 data-layername="education" className="text-xl tracking-tighter leading-tight text-neutral-800">Education</h2>
          <p data-layername="degreesAndCertificationsInTheSpecializedFieldsOfDataScienceAndBusinessAnalytics" className="mt-3 text-sm tracking-tight leading-5 text-zinc-500">Degrees and certifications in the specialized fields of data science and business analytics.</p>
        </div>
      </div>
      <div data-layername="educationWrapper" className="flex flex-col px-6 pt-8 pb-10 w-full font-medium max-md:px-5 max-md:max-w-full">
        {educations.map((edu, index) => (
          <React.Fragment key={index}>
            <div data-layername="education" className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
              <div data-layername="universityInfo" className="flex flex-col flex-1 shrink basis-[22px] min-h-[42px] min-w-[240px] max-md:max-w-full">
                <h3 data-layername="princetonUniversity" className="text-base tracking-tight leading-tight text-neutral-800 max-md:max-w-full">{edu.university}</h3>
                <div data-layername="universityInfo" className="flex gap-1.5 items-center self-start mt-1.5 text-xs tracking-normal leading-snug text-zinc-500">
                  <span data-layername="mastersDegree">{edu.degree}</span>
                  <span data-layername="dataSci">{edu.field}</span>
                </div>
              </div>
              <div data-layername="chips" className="flex gap-1.5 items-center py-1.5 pr-2.5 pl-3 text-xs tracking-normal leading-snug bg-white rounded-lg border border-gray-200 border-solid text-neutral-700">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/799a7dad14d4d9732e063267889a1752ead2c13a8326280eb6d5c4928b9a9742?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                <span data-layername="jun2021Present">{edu.date}</span>
              </div>
            </div>
            {index < educations.length - 1 && <div data-layername="divider" className="flex mt-6 w-full bg-gray-200 min-h-[1px] max-md:max-w-full"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Education;