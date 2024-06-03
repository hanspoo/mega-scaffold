'use client';
import React from 'react';

export type DropdownOption = {
  value: string | number;
  label: string;
};
type DropdownProps = {
  options: Array<DropdownOption>;
  onSelect: (value: string | number) => void;
  selected?: string | number;
  disabled?: boolean;
};
export function Dropdown({
  options = [],
  onSelect,
  selected,
  disabled = false,
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const x = () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const searchInput = document.getElementById('search-input');
    let isOpen = false; // Set to true to open the dropdown by default

    // Function to toggle the dropdown state
    function toggleDropdown() {
      isOpen = !isOpen;
      dropdownMenu.classList.toggle('hidden', !isOpen);
    }

    // Set initial state
    toggleDropdown();

    dropdownButton.addEventListener('click', () => {
      toggleDropdown();
    });

    // Add event listener to filter items based on input
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const items = dropdownMenu.querySelectorAll('a');

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  };

  const seleccionar = (value: string | number) => {
    onSelect(value);
    setOpen(false);
  };
  return (
    <>
      {/* component */}
      <div className="flex   w-full">
        <div className="relative group  w-full">
          <button
            disabled={disabled}
            onClick={() => setOpen(!open)}
            id="dropdown-button"
            className={`${
              disabled ? 'bg-slate-100' : ''
            } w-full inline-flex justify-end px-4 py-2 text-sm font-medium text-gray-700  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500`}
          >
            <span className="mr-2">{selected || ''}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="dropdown-menu"
            className={`${
              open ? '' : 'hidden'
            } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
          >
            {/* Search input */}
            <input
              id="search-input"
              className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
              type="text"
              placeholder="Search items"
              autoComplete="off"
            />
            {/* Dropdown content goes here */}
            {options.map((o) => (
              <a
                onClick={() => seleccionar(o.value)}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
              >
                {o.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
