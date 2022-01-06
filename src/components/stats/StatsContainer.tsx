import React from "react";

interface Props {
  children: React.ReactNode;
}

export const StatsContainer = ({ children }: Props) => {
  return (
    <div>
      StatsContainer
      {children}
    </div>
  );
};
