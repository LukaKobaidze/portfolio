import { useState } from "react";

export default function useScrollState() {
  const [sectionPositions, setSectionPositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<number>(0);


  return 
}