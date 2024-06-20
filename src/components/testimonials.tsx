import React, { useState, useEffect, useRef } from 'react';
import Testimonialcard from './cards/testimonialcard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sampleTestimonials = [
    {
      data: {
        studentName: 'sample User',
        proffession: "Programmer"
      },
      testimonial: {
        title: 'It was a very good experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
      }
    },
    {
      data: {
        studentName: 'sample User',
        proffession: "Programmer"
      },
      testimonial: {
        title: 'It was a very good experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
      }
    },
    {
      data: {
        studentName: 'sample User',
        proffession: "Programmer"
      },
      testimonial: {
        title: 'It was a very good experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
      }
    },
    {
      data: {
        studentName: 'sample User',
        proffession: "Programmer"
      },
      testimonial: {
        title: 'It was a very good experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
      }
    },
    {
      data: {
        studentName: 'sample User',
        proffession: "Programmer"
      },
      testimonial: {
        title: 'It was a very good experience',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
      }
    }
  ]

const TestimonialContainer = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateCenterItem = () => {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.offsetWidth;
        const firstChild = container.firstChild as HTMLElement | null;

        if (firstChild) {
          const itemWidth = firstChild.clientWidth;
          const middleIndex = Math.floor((container.scrollLeft + containerWidth / 2) / itemWidth);
          setSelectedItem(middleIndex);
        }
      }
    };

    calculateCenterItem(); // Calculate on initial load

    const handleScroll = () => {
      calculateCenterItem();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const nonselectedStyles = {
    imageSize: 60,
    headerSize: 18,
    fontSize: 12
  }
  const SelectedItemStyle = {
    imageSize: 66,
    headerSize: 20,
    fontSize: 16
  }

  const handleNext = async () => {
    const container = document.getElementsByClassName("testimonial-container")[0] as HTMLDivElement;
    container.style.marginRight = "350px"
  }

  return (
    <>
    <div ref={containerRef} className="testimonial-container transition flex items-center overflow-x-scroll scroll-snap w-full gap-6 no-scrollbar py-4">
      {sampleTestimonials.map((testimonial, index) => (
        <Testimonialcard
          key={index}
          imageSize={selectedItem === index ? SelectedItemStyle.imageSize : nonselectedStyles.imageSize}
          headerSize={selectedItem === index ? SelectedItemStyle.headerSize : nonselectedStyles.headerSize}
          fontSize={selectedItem === index ? SelectedItemStyle.fontSize : nonselectedStyles.fontSize}
          data={testimonial.data}
          testimonial={testimonial.testimonial}
          className={selectedItem !== index? 'max-h-[250px]': 'shadow-lg perspective'}
        />
      ))}
    </div>
    <div className="flex items-center gap-5 mx-auto max-w-min">
            <ChevronLeft className="h-8 w-8 text-gray-800"/>
            <div className="flex items-center gap-4">
              <span className="h-3 w-3 rounded-full shadow-inner bg-[#C5C5C5]" />
              <span className="h-3 w-3 rounded-full shadow-inner bg-[#C5C5C5]" />
              <span className="h-3 w-3 rounded-full shadow-inner bg-[#C5C5C5]" />
              <span className="h-3 w-3 rounded-full shadow-inner bg-[#C5C5C5]" />
              <span className="h-3 w-3 rounded-full shadow-inner bg-[#C5C5C5]" />
            </div>
            <button onClick={handleNext}><ChevronRight className="h-8 w-8 text-gray-800"/></button>
          </div>
    </>
  );
};

export default TestimonialContainer;
