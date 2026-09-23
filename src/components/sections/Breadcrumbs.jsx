import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

export const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 bg-alabaster/40 border-b border-primary/10 text-xs font-mono"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-muted-dark overflow-x-auto whitespace-nowrap">
        <Link
          to="/"
          className="hover:text-cta transition-colors flex items-center gap-1 shrink-0"
        >
          <FaHome className="w-3 h-3" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <FaChevronRight className="w-2.5 h-2.5 text-primary/30 shrink-0" />
              {isLast || !item.url ? (
                <span className="text-primary font-bold truncate max-w-xs sm:max-w-md">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-cta transition-colors truncate max-w-xs"
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
