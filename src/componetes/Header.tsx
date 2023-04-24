import { Moon, Sparkle, Sun } from "phosphor-react";

import './Header.css';


interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
     {props.title}
      <Moon />
    </div>
  );
}