import React from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { FaArrowRight } from "react-icons/fa";
import * as Icons from "react-icons/fa";

export const NumberedCard = ({
  number,
  title,
  titleAr,
  description,
  linkTo,
  linkText = "View scope & details",
  iconName = "FaBuilding",
  highlight = false,
  className = "",
}) => {
  const IconComponent = Icons[iconName] || Icons.FaHardHat;

  return (
    <div
      className={clsx(
        "group relative bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 p-6 sm:p-8 rounded-xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1",
        highlight && "ring-1 ring-slate-300 bg-gradient-to-br from-white to-slate-50",
        className
      )}
    >
      {/* Top row: Mono numeral + Icon */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-slate-300 group-hover:text-primary-600 group-hover:scale-105 transition-all duration-300">
          {number}
        </span>
        <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Center content */}
      <div className="flex-1 mb-6">
        {titleAr && (
          <span className="block font-display text-xs text-slate-500 font-medium mb-1 tracking-wide">
            {titleAr}
          </span>
        )}
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors mb-3">
          {title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Bottom link with arrow micro-interaction */}
      {linkTo && (
        <div className="pt-4 border-t border-slate-100 group-hover:border-slate-300 transition-colors">
          <Link
            to={linkTo}
            className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary-600 transition-colors"
          >
            <span>{linkText}</span>
            <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NumberedCard;
