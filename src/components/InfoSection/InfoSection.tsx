import { ReactElement } from "react";
import "./InfoSection.css";

interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const InfoSection = ({ children, className }: Props) => {
  return (
    <div className={`info-section ${className}`}>
      <img src="/images/about_us_home.jpg" alt="" />
      <div>{children}</div>
    </div>
  );
};
