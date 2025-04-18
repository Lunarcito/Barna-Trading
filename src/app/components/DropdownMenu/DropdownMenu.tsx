'use client';

import { useState } from 'react';
import { DropdownMenuType } from './DropdownMenuType';
import { TradingPairType } from '../../Models/TradingPairType';

const DropdownMenu: React.FC<DropdownMenuType> = ({ options, action }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (item: TradingPairType) => {
    action(item);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <svg
              className="-mr-1 h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-auto min-w-max max-w-[16rem]  origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <a
                  key={option.pairCode}
                  className="block px-4 py-2 text-xs text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={() => handleClick(option)}
                >
                  {option.baseCurrency + '/' + option.exchangeCurrency}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
