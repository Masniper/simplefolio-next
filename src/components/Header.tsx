import React, { FC, useState } from "react";

interface HeaderProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
}

interface ThemePalette {
  Pallet: string;
  pColor: string;
  sColor: string;
  id: string;
}

const themePalettes: ThemePalette[] = [
  {
    Pallet: "Default",
    pColor: "#02aab0",
    sColor: "#00cdac",
    id: "default",
  },
  {
    Pallet: "Pastel Blue",
    pColor: "#aec6cf",
    sColor: "#ffb3ba",
    id: "pastel-blue",
  },
  {
    Pallet: "Pastel Green",
    pColor: "#b2f2bb",
    sColor: "#ffdfba",
    id: "pastel-green",
  },
  {
    Pallet: "Pastel Purple",
    pColor: "#d4a5f9",
    sColor: "#a3d8f4",
    id: "pastel-purple",
  },
  {
    Pallet: "Pastel Yellow",
    pColor: "#fef6b4",
    sColor: "#fcd5ce",
    id: "pastel-yellow",
  },
  {
    Pallet: "Pastel Orange",
    pColor: "#ffd1a9",
    sColor: "#ffb7c5",
    id: "pastel-orange",
  },
  {
    Pallet: "Pastel Pink",
    pColor: "#ffcbc1",
    sColor: "#d4a6c8",
    id: "pastel-pink",
  },
  {
    Pallet: "Pastel Mint",
    pColor: "#b8e2dc",
    sColor: "#e8d5b7",
    id: "pastel-mint",
  },
  {
    Pallet: "Pastel Lavender",
    pColor: "#e6e6fa",
    sColor: "#ffc8dd",
    id: "pastel-lavender",
  },
  {
    Pallet: "Pastel Red",
    pColor: "#ffaaa5",
    sColor: "#ffefba",
    id: "pastel-red",
  },
  {
    Pallet: "Pastel Aqua",
    pColor: "#a2d2ff",
    sColor: "#cdb4db",
    id: "pastel-aqua",
  },
  {
    Pallet: "Pastel Gray",
    pColor: "#d9d9d9",
    sColor: "#b4cde6",
    id: "pastel-gray",
  },
  {
    Pallet: "Pastel Sunset",
    pColor: "#ffadad",
    sColor: "#ffd6a5",
    id: "pastel-sunset",
  },
  {
    Pallet: "Vintage Pastel",
    pColor: "#e3c9c9",
    sColor: "#a4c5c6",
    id: "vintage-pastel",
  },
  {
    Pallet: "Soft Tropical",
    pColor: "#f4d1ae",
    sColor: "#7fc9d9",
    id: "soft-tropical",
  },
  {
    Pallet: "Earthy Pastel",
    pColor: "#c4a484",
    sColor: "#9daaa1",
    id: "earthy-pastel",
  },
  {
    Pallet: "Modern Neutral",
    pColor: "#e8eae6",
    sColor: "#a8a6a5",
    id: "modern-neutral",
  },
  {
    Pallet: "Romantic Pastel",
    pColor: "#f7e7ce",
    sColor: "#f4a7a7",
    id: "romantic-pastel",
  },
  {
    Pallet: "Calming Sea",
    pColor: "#b8d8d8",
    sColor: "#e8d7f1",
    id: "calming-sea",
  },
  {
    Pallet: "Peachy Pastel",
    pColor: "#ffd5c2",
    sColor: "#fae1dd",
    id: "peachy-pastel",
  },
];

const Header: FC<HeaderProps> = ({ selectedTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedThemeData = themePalettes.find((t) => t.id === selectedTheme);
  return (
    <header className="d-flex justify-content-end p-3 w-100">
      <img
        alt="theme"
        className=""
        height="auto"
        width="22px"
        src={'assets/theme.png'}
      />
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle d-flex align-items-center justify-content-between"
          type="button"
          id="themeDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            background: selectedThemeData
              ? `linear-gradient(45deg, ${selectedThemeData.pColor}, ${selectedThemeData.sColor})`
              : "white",
            color: "#000",
            border: "1px solid #ddd",
            minWidth: "220px",
            fontWeight: "500",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedThemeData?.Pallet || "Select Theme"}</span>
          <i className={`bi bi-chevron-${isOpen ? "up" : "down"} ms-2`}></i>
        </button>

        <ul
          className={`dropdown-menu ${isOpen ? "show" : ""}`}
          aria-labelledby="themeDropdown"
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            minWidth: "220px",
            padding: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {themePalettes.map((theme) => (
            <li key={theme.id}>
              <button
                className="dropdown-item d-flex align-items-center py-2 px-3"
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                style={{
                  background: `linear-gradient(45deg, ${theme.pColor}, ${theme.sColor})`,
                  color: "#000",
                  margin: "4px 0",
                  borderRadius: "6px",
                  border:
                    selectedTheme === theme.id ? "2px solid #000" : "none",
                  fontWeight: selectedTheme === theme.id ? "600" : "400",
                  transition: "all 0.2s ease",
                }}
              >
                {theme.Pallet}
                {selectedTheme === theme.id && (
                  <i className="bi bi-check2 ms-2"></i>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;