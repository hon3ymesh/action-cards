import VisibilityIcon from "@mui/icons-material/Visibility";
import ScienceIcon from "@mui/icons-material/Science";
import SecurityIcon from "@mui/icons-material/Security";
import { ActionType } from "../types/ActionType";

export const actions: ActionType[] = [
  {
    id: 1,
    title: "Observe",
    subtitle: "Real-time Monitoring",
    description:
      "Monitor your models and data pipelines for performance, drift, and anomalies. Get insights and alerts to ensure reliability.",
    points: ["Real-time monitoring", "Performance tracking", "Anomaly detection"],
    button: "Explore Observe",
    icon: <VisibilityIcon fontSize="large" sx={{ color: "white" }} />,
  },
  {
    id: 2,
    title: "Simulate",
    subtitle: "Advanced Testing",
    description:
      "Test your models under simulated scenarios. Identify weaknesses and improve robustness with comprehensive testing.",
    points: ["Scenario testing", "Weakness detection", "Robustness analysis"],
    button: "Explore Simulate",
    icon: <ScienceIcon fontSize="large" sx={{ color: "white" }} />,
  },
  {
    id: 3,
    title: "Prevent",
    subtitle: "Proactive Security",
    description:
      "Enforce policies and controls to prevent failures and security risks. Automate actions to keep your data and models safe.",
    points: ["Policy enforcement", "Risk prevention", "Automated controls"],
    button: "Explore Prevent",
    icon: <SecurityIcon fontSize="large" sx={{ color: "white" }} />,
  },
];
