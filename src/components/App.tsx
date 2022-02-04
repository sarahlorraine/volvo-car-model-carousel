import React from "react";
import { HomeScene } from "../scenes/HomeScene";

interface AppProps {
  onToggleTheme: (checked: boolean) => void;
}
export const App: React.FC<AppProps> = ({ onToggleTheme }: AppProps) => {
  return <HomeScene onToggleTheme={onToggleTheme} />;
};
