"use client";

import { useEffect } from "react";

export default function AttendanceToggle() {
  useEffect(() => {
    const selectAllBtn = document.getElementById("selectAllBtn");
    
    if (selectAllBtn) {
      const handleToggle = () => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>(".attendance-checkbox");
        
        // Determine if all are currently checked
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        
        checkboxes.forEach((cb) => {
          cb.checked = !allChecked;
        });
      };

      selectAllBtn.addEventListener("click", handleToggle);
      return () => selectAllBtn.removeEventListener("click", handleToggle);
    }
  }, []);

  return null;
}
