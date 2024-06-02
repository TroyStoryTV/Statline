import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Stats {
  PPG: number;
  APG: number;
  REB: number;
  SPG: number;
}

interface Build {
  id: number;
  name: string;
  stats: Stats;
}

interface BuildsContextProps {
  builds: Build[];
  currentBuild: Build | null;
  setCurrentBuild: (build: Build) => void;
}

const BuildsContext = createContext<BuildsContextProps | undefined>(undefined);

const BuildsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [builds] = useState<Build[]>([
    { id: 1, name: 'Build 1', stats: { PPG: 10, APG: 5, REB: 7, SPG: 2 } },
    { id: 2, name: 'Build 2', stats: { PPG: 15, APG: 7, REB: 8, SPG: 3 } },
    // Add more builds as needed
  ]);
  const [currentBuild, setCurrentBuild] = useState<Build | null>(null);

  return (
    <BuildsContext.Provider value={{ builds, currentBuild, setCurrentBuild }}>
      {children}
    </BuildsContext.Provider>
  );
};

const useBuildsContext = () => {
  const context = useContext(BuildsContext);
  if (!context) {
    throw new Error('useBuildsContext must be used within a BuildsProvider');
  }
  return context;
};

export { BuildsProvider, useBuildsContext };


