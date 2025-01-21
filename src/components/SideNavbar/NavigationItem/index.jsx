import React, {useState} from "react";
import {ChevronDown} from "lucide-react";

const NavigationItem = ({ icon: Icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center px-4 py-2 text-neutral-300 hover:bg-neutral-700 transition-colors duration-200"
      >
        <Icon className="w-5 h-5 mr-3" />
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-neutral-800">
          {children}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;