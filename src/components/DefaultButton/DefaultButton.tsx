import React from "react";
import "./DefaultButton.scss";

interface DefaultButtonProps {
  children: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ children }) => {
  return <button className="default-button">{children}</button>;
};

export default DefaultButton;
