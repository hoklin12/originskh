'use client';
import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

type ValueId = '1' | '2' | '3';

interface ValueData {
  id: ValueId;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const OurServiceHiringSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [expandedValue, setExpandedValue] = useState<ValueId | null>(null);

  const valuesData: ValueData[] = [
    {
      id: '1',
      title: 'lorem ipsum dolor sit amet,',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      imageAlt: 'O’riginality.',
    },
    {
      id: '2',
      title: 'lorem ipsum dolor sit amet,.',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      imageAlt: 'O’thenticity.',
    },
    {
      id: '3',
      title: 'lorem ipsum dolor sit amet,',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      imageAlt: 'O’wesomeness.',
    },
  ];

  const toggleExpanded = (valueId: ValueId) => {
    setExpandedValue(expandedValue === valueId ? null : valueId);
  };

  const getCurrentImage = () => {
    if (expandedValue) {
      const expandedItem = valuesData.find((item) => item.id === expandedValue);
      return expandedItem ? expandedItem.image : valuesData[0].image;
    }
    return valuesData[0].image;
  };

  const getCurrentImageAlt = () => {
    if (expandedValue) {
      const expandedItem = valuesData.find((item) => item.id === expandedValue);
      return expandedItem ? expandedItem.imageAlt : valuesData[0].imageAlt;
    }
    return valuesData[0].imageAlt;
  };

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="container relative z-10 px-4 mx-auto">

        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-12">
          <p className="text-gray-600 font-medium">OUR SERVICES</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-24">
          {/* Left side - Values list */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight">
            We’re invested in your health and happiness.
            </h2>

            <div className="space-y-0">
              {valuesData.map((value) => (
                <div key={value.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleExpanded(value.id)}
                    className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <span
                      className={`text-xl lg:text-2xl transition-colors duration-200 ${
                        expandedValue === value.id
                          ? 'text-black font-medium'
                          : 'text-gray-600 group-hover:text-black'
                      }`}
                    >
                      {value.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        expandedValue === value.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-400 text-gray-400 group-hover:border-black group-hover:text-black'
                      }`}
                    >
                      {expandedValue === value.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedValue === value.id ? 'max-h-40 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Dynamic image */}
          <div className="lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-purple-800 aspect-square">
              <img
                src={getCurrentImage()}
                alt={getCurrentImageAlt()}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
        </div>

  

      <div className="container pt-16 relative z-10 px-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section */}
          <div className="w-full md:w-full text-left">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-4"> {/* Adjusted font-bold and reduced mb-6 to mb-4 */}
            Our Compensation Philosophy
          </h2>
            <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-light font-inter">
            Transparency is central to how we operate our business. We hold ourselves to the 
            highest standard of integrity, and believe that open communication and understanding 
            is in our collective best interest. Our pay bands ensure compensational equity and serve 
            as an essential benchmark for measuring the velocity of performance against monetary growth.

            </h3>
          </div>
        </div>
          <button className="flex items-center py-3 px-6 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
            Learn More <ArrowRight size={18} className="ml-2" />
          </button>
      </div>


      
    </section>
  );
});

export default OurServiceHiringSection;