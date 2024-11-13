import React from 'react';

function Languages() {
  const languages = [
    { flag: "🇬🇧", name: "English", proficiency: "Native or bilingual proficiency" },
    { flag: "🇫🇷", name: "French", proficiency: "Professional working proficiency" },
    { flag: "🇪🇸", name: "Spanish", proficiency: "Elementary proficiency" }
  ];

  return (
    <section data-layername="languages" className="flex flex-col mt-3 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:max-w-full">
      <div data-layername="headingWrapper" className="flex flex-col items-start px-6 pt-6 pb-8 w-full border-b border-solid border-b-gray-200 max-md:px-5 max-md:max-w-full">
        <div data-layername="iconWrapper" className="flex gap-2.5 items-center p-3.5 rounded-xl border border-gray-200 border-solid bg-neutral-100 h-[52px] w-[52px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a84781eef9c1171f81c52dfc69598d03d0d748394b68b4a80645474b3684c9b?placeholderIfAbsent=true&apiKey=319631a88b93443180d0c8a15d0f239b" alt="" className="object-contain w-6 aspect-square" />
        </div>
        <div data-layername="headingParagraph" className="flex flex-col mt-6 font-medium max-w-[400px] w-[400px]">
          <h2 data-layername="languages" className="text-xl tracking-tighter leading-tight text-neutral-800">Languages</h2>
          <p data-layername="proficientInMultipleLanguagesFacilitatingEffectiveCommunicationAndCollaborationInDiverseSettings" className="mt-3 text-sm tracking-tight leading-5 text-zinc-500">Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.</p>
        </div>
      </div>
      <div data-layername="languagesWrapper" className="flex flex-col px-6 pt-8 pb-10 w-full font-medium max-md:px-5 max-md:max-w-full">
        {languages.map((lang, index) => (
          <React.Fragment key={index}>
          <div data-layername="language" className="flex flex-col w-full max-md:max-w-full">
            <h3 data-layername="🇬🇧English" className="text-base tracking-tight leading-tight text-neutral-800 max-md:max-w-full">{lang.flag} {lang.name}</h3>
            <p data-layername="nativeOrBilingualProficiency" className="mt-1.5 text-sm tracking-tight leading-snug text-zinc-500 max-md:max-w-full">{lang.proficiency}</p>
          </div>
          {index < languages.length - 1 && <div data-layername="divider" className="flex mt-6 w-full bg-gray-200 min-h-[1px] max-md:max-w-full"></div>}
        </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Languages;