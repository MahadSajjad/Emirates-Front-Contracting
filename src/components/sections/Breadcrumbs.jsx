import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

export const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 bg-slate-100/60 border-b border-slate-200 text-xs font-mono"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-600 overflow-x-auto whitespace-nowrap">
        <Link
          to="/"
          className="hover:text-primary-600 transition-colors flex items-center gap-1 shrink-0"
        >
          <FaHome className="w-3 h-3" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <FaChevronRight className="w-2.5 h-2.5 text-slate-400 shrink-0" />
              {isLast || !item.url ? (
                <span className="text-slate-900 font-bold truncate max-w-xs sm:max-w-md">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-primary-600 transition-colors truncate max-w-xs"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
