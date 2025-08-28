import { ReactNode } from "react";

export interface ActionType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  button: string;
  icon: ReactNode;
}
