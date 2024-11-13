import React from 'react';

function LicensesCertifications() {
  const certifications = [
    {
      name: "Data Analysis & Visualization",
      issuer: "NexusWorks",
      date: "Jan 2024"
    },
    {
      name: "Data Analysis Professional",
      issuer: "StellarWave",
      date: "Nov 2023"
    },
    {
      name: "Data Analytics Mastery",
      issuer: "BrightByte",
      date: "Aug 2023"
    },
    {
      name: "Strategic Business Consulting",
      issuer: "DataSpark",
      date: "Feb 2023"
    }
  ];

  return (
    <section data-layername="licensesCertification" className="flex flex-col mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <div data-layername="headingWrapper" className="flex flex-col items-start px-6 pt-6 pb-8 w-full border-b border-solid border-b-gray-200 max-md:px-5 max-md:max-w-full">
        <div data-layername="iconWrapper" className="flex gap-2.5 items-center p-3.5 rounded-xl border border-gray-200 border-solid bg-neutral-100 h-[52px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/584160db909dac2ba7901876544469d1ae63529e4718e21ad033fd89dc5d8cf6?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain w-6 aspect-square" />
        </div>
        <div data-layername="headingParagraph" className="flex flex-col mt-6 font-medium max-w-[400px] w-[400px]">
          <h2 data-layername="licensesCertifications" className="text-xl tracking-tighter leading-tight text-neutral-800">Licenses & Certifications</h2>
          <p data-layername="professionalAccreditationsAndCertificationsDemonstratingExpertiseAndComplianceWithIndustryStandards" className="mt-3 text-sm tracking-tight leading-5 text-zinc-500">Professional accreditations and certifications demonstrating expertise and compliance with industry standards.</p>
        </div>
      </div>
      <div data-layername="licensesWrapper" className="flex flex-col px-6 pt-8 pb-10 w-full font-medium max-md:px-5 max-md:max-w-full">
        <div data-layername="licensesRow" className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          {certifications.map((cert, index) => (
            <div key={index} data-layername="licenseInfo" className="flex flex-col flex-1 shrink basis-0 min-h-[98px] min-w-[240px]">
              <div data-layername="nameInfo" className="flex flex-col w-full">
                <h3 data-layername="dataAnalysisVisualization" className="text-base tracking-tight leading-tight text-neutral-800">{cert.name}</h3>
                <div data-layername="licenseInfo" className="flex gap-1.5 items-center self-start mt-1.5 text-xs tracking-normal leading-snug text-zinc-500">
                  <span data-layername="nexusWorks">{cert.issuer}</span>
                  <span data-layername="issuedJan2024">Issued {cert.date}</span>
                </div>
              </div>
              <button data-layername="button" className="flex gap-2 justify-center items-center self-start px-4 py-2.5 mt-4 text-sm tracking-tight leading-snug bg-gray-200 rounded-xl text-neutral-700">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2215ce403bfae5717ec45068b60d0db1bc12562ad2f888d678db617baa747d?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
                <span data-layername="contactMe" className="self-stretch my-auto">Show Credentials</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LicensesCertifications;