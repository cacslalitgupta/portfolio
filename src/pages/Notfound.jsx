// src/pages/Notfound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <span className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
          Error
        </span>

        <h1 className="mt-4 bg-gradient-to-b from-brand to-brand/30 bg-clip-text text-8xl font-black leading-none tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
          Page Not Found
        </h2>

        <p className="mt-3 text-sm text-muted sm:text-base">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}