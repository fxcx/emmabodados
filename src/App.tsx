import { useEffect } from "react";
import Home from "@/pages/home/home";
import { MainLayout } from "@/layouts";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 120,   // podés jugar entre 80–150
      once: false,   // 👈 que NO sea solo una vez
      mirror: true,  // 👈 anima también al salir y al volver a entrar
    });
  }, []);

  return (
    <MainLayout>
      <section>
        <Home />
      </section>
    </MainLayout>
  );
}

export default App;
