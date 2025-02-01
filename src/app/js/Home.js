"use client"
import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, delay = 100, deleteDelay = 500, pauseDelay = 3000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText === text) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseDelay);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setDisplayText(text.slice(0, displayText.length - 1));
        }
      }, isDeleting ? deleteDelay : delay);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, delay, deleteDelay, pauseDelay]);

  return (
    <span>
      {displayText}
      
    </span>
  );
};

export default function Home() {
  return (
    <section id="home" className="min-h-screen scroll-mt-16">
     <div className="flex flex-row items-center justify-between w-full max-w-6xl h-auto">
       <div className='w-1/2 mt-[10vh]'>
          <p className="relative left-[5vw] font-mono font-bold text-[500%] leading-[15vh]">
            {/* <TypewriterEffect text="Hello!" delay={100} deleteDelay={100} pauseDelay={1500} /><br /> */}
            Hello!<br/>
            <TypewriterEffect 
              text="I'm" 
              delay={100} 
              deleteDelay={100} 
              pauseDelay={1100} 
            /><br />
            

            <TypewriterEffect 
              text="Kate Huang" 
              delay={100} 
              deleteDelay={100} 
              pauseDelay={1100} 
            />
          </p>
      </div> 
      <div className="w-1/2 flex justify-end mt-[18vh]">
          <img 
            src="/images/self.png" 
            alt="Profile" 
            className="w-[400px] h-[400px] object-cover bg-white bg-opacity-30 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}