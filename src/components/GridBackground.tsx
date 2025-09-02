const GridBackground = () => {
  return (
    <div className="grid-bg">
      <div className="absolute inset-0 h-full w-full bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
      <div className="flex">
        {Array.from({ length: 6 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col items-start justify-center w-60">
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div key={rowIndex}>
                <div className="flex items-center justify-center">
                  <div className="h-6 w-6 bg-neutral-900 flex items-center justify-center rounded-full">
                    <div className="h-2 w-2 bg-neutral-700 rounded-full"></div>
                  </div>
                  <svg width="300" height="1" viewBox="0 0 300 1" fill="none" className="text-neutral-800">
                    <path d="M0.5 0.5H479" stroke="currentColor" />
                  </svg>
                </div>
                <svg width="1" height="140" viewBox="0 0 1 140" fill="none" className="text-neutral-800 ml-3">
                  <path d="M0.5 0.5V479" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBackground;