import "./App.css";
import ProjectsOverview from "./components/ProjectsOverview";

export default function App() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return <ProjectsOverview isDark={isDark} />;
}
