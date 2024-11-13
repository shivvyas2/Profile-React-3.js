import React from 'react';

function ProfileInfo() {
  return (
    <section data-layername="headingButtons" className="flex flex-col mt-20 w-full font-medium leading-snug max-md:mt-10 max-md:max-w-full">
      <div data-layername="namePosition" className="flex flex-col items-center w-full max-md:max-w-full">
        <div data-layername="chips" className="flex gap-2 items-center py-1.5 pr-2.5 pl-3 text-xs tracking-normal bg-white rounded-lg border border-gray-200 border-solid text-neutral-700">
          <div data-layername="ellipse" className="flex gap-2.5 self-stretch py-0.5 my-auto w-2 h-2 bg-emerald-100 min-h-[8px] rounded-[100px]" aria-hidden="true"></div>
          <span data-layername="availableForWork">Available for Work</span>
        </div>
        <h1 data-layername="thomasScott" className="self-stretch mt-2 text-5xl tracking-tighter leading-tight text-center text-neutral-800 max-md:max-w-full max-md:text-4xl">Thomas Scott</h1>
        <p data-layername="seniorDataScientistBusinessConsultant" className="mt-2 text-lg tracking-tight text-center max-w-[424px] text-zinc-500 max-md:max-w-full">Senior Data Scientist & Business Consultant</p>
      </div>
      <div data-layername="buttons" className="flex flex-wrap gap-2 justify-center items-start mt-6 w-full text-sm tracking-tight max-md:max-w-full">
        <button data-layername="button" className="flex gap-2 justify-center items-center px-4 py-2.5 text-white rounded-xl bg-neutral-800">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71c34a95e6e0a4755d18fe749bda05fc4d453ff2e395e2f264c63c2cebfc932?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <span data-layername="contactMe" className="self-stretch my-auto">Send Email</span>
        </button>
        <button data-layername="button" className="flex gap-2 justify-center items-center px-4 py-2.5 rounded-xl bg-neutral-200 text-neutral-700">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9363d090164a770ba3d49c4ce4b3ed78d8a8318ee54986b4da00e292b40fb21d?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          <span data-layername="contactMe" className="self-stretch my-auto">Download CV</span>
        </button>
      </div>
    </section>
  );
}

export default ProfileInfo;