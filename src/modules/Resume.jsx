import React from 'react';
import { Navbar } from '../components';
import ProfileInfo from '../modules/components/ProfileInfo';
import WorkedWith from '../modules/components/WorkedWith';
import WorkExperience from '../modules/components/WorkExperience';
import Education from '../modules/components/Education';
import LicensesCertifications from '../modules/components/LicensesCertifications';
import Skills from '../modules/components/Skills';
import Languages from '../modules/components/Languages';

import Footer from '../modules/components/Footer';


function ProfilePage() {
  return (
    <main data-layername="home" className="flex overflow-hidden flex-wrap gap-10 py-6 pr-8 pl-20 bg-stone-50 max-md:px-5">
      <div className="flex flex-col max-md:max-w-full">
        <Navbar />
        <ProfileInfo />
        <WorkedWith />
        <WorkExperience />
        <Education />
        <LicensesCertifications />
        <Skills />
        <Languages />
       
        <Footer />
      </div>
 
    </main>
  );
}

export default ProfilePage;