"use client"; // مهم جداً لأن AOS تشتغل في المتصفح فقط

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الحركة بالملي ثانية
      once: false,   // اجعل الحركة تتكرر كل ما تعمل سكرول (أو true لمرة واحدة)
    });
  }, []);

  return <>{children}</>;
}