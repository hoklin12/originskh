'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const FindUrJobSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { label: 'ALL', href: '' },
    { label: 'DESIGN', href: '' }, // Fixed typo from 'DESGING' to 'DESIGN'
    { label: 'STRATEGY', href: '' },
    { label: 'TECHNOLOGY', href: '' },
    { label: 'PRODUCTION', href: '' },
    { label: 'WRITING', href: '' },
    { label: 'OPERATIONS', href: '' }, // Fixed typo from 'OPERATINS' to 'OPERATIONS'
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="manifesto" className="pt-16 pb-8 bg-white relative overflow-hidden px-8">
      <div className="container relative z-10 px-4 mx-auto">

      <div className="text-center mb-4 px-12">
        <h2
          className="text-8xl font-serif mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}>
            Find Your Next Job
        </h2>
      </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col justify-between items-center text-sm space-y-4" />

        {/* Category Buttons */}
        <div className="flex items-center gap-4 mb-8">
          {!isMobile &&
            navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      active
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
        </div>

        {/* Message Display */}
        <div className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <p className="text-lg text-black">
            We’re not hiring at the moment. Check back later for new opportunities!
          </p>
        </div>


        <div className="container pt-16 relative z-10 px-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section */}
          <div className="w-full md:w-full text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4"> {/* Adjusted font-bold and reduced mb-6 to mb-4 */}
          Instrument is committed to equity.
          </h2>
              <div className="p-8 bg-light-green">
                <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-light font-inter">
                  We are committed to providing an inclusive and welcoming environment for all members of our community. Instrument does not and shall 
                  not discriminate on the basis of race, color, religion, gender, gender expression, age, national origin, disability, marital status, 
                  sexual orientation, or military status. Our pay bands ensure compensational equity and serve as an essential benchmark for measuring 
                  the velocity of performance against monetary growth.
                  <br /><br />
                  As an equal opportunity employer, Instrument LLC values the diversity of our work force and the knowledge of our personnel. Labor Condition 
                  Applications (LCAs) for specialty occupation petitions are displayed electronically in accordance with notice requirements pursuant to U.S. 
                  Department of Labor regulations, and public access files are available pursuant to regulation. See 20 CFR § 655.734, 655.760.
                </h3>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
});

FindUrJobSection.displayName = 'FindUrJobSection';

export default FindUrJobSection;

