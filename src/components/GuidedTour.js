import React, { useState } from 'react';
import { X } from 'lucide-react';

const GuidedTour = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(true);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsTourActive(false);
      onComplete();
    }
  };

  const handleSkip = () => {
    setIsTourActive(false);
    onComplete();
  };

  if (!isTourActive) return null;

  const { target, content, position } = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative">
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg max-w-sm"
          style={{
            [position]: '100%',
            transform: `translate(${position === 'left' ? '-100%' : '0'}, ${position === 'top' ? '-100%' : '0'})`,
          }}
        >
          <button onClick={handleSkip} className="absolute top-2 right-2">
            <X className="w-5 h-5" />
          </button>
          <p className="mb-4">{content}</p>
          <div className="flex justify-between">
            <button
              onClick={handleSkip}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
        <div
          className="absolute border-2 border-orange-500 rounded-lg"
          style={{
            top: target.top,
            left: target.left,
            width: target.width,
            height: target.height,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GuidedTour;
