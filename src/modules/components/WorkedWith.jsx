import React from 'react';

function WorkedWith() {
  const companies = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/80bff1a4a40fa013f174c19d69d7ed8d7ab0c56d36835cf641549d4074321d3d?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b", alt: "Company 1 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4753832ee59f537451184e5b7c8a91831cd153615c1f3ad8b43a948d47c0fd22?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b", alt: "Company 2 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d73c2e05a163c18eee004d65b74018dbcb5b951151d897688a8b7952128e6793?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b", alt: "Company 3 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e51950a13892d6520bc90bb03f9f8537ca376fb3503336c4e02036e834ff84e7?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b", alt: "Company 4 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c1020e384924ed39b7e51fc9e43ecbea4aaa255371fa1406141b04319f31cdd?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b", alt: "Company 5 logo" }
  ];

  return (
    <section data-layername="workedWith" className="flex flex-col justify-center mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <h2 data-layername="headingWrapper" className="flex-1 shrink gap-2.5 self-stretch px-6 py-5 w-full text-sm font-medium tracking-tight leading-snug text-center border-b border-solid border-b-gray-200 text-zinc-500 max-md:px-5 max-md:max-w-full">Worked With</h2>
      <div data-layername="logosGrid" className="flex flex-wrap gap-8 justify-between items-center px-6 py-8 w-full max-md:px-5 max-md:max-w-full">
        {companies.map((company, index) => (
          <img key={index} loading="lazy" src={company.src} alt={company.alt} className="object-contain shrink-0 self-stretch my-auto aspect-[4.69] w-[108px]" />
        ))}
      </div>
    </section>
  );
}

export default WorkedWith;