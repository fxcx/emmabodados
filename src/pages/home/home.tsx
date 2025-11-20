import { Hero } from "@/components/hero/hero";
import { Form } from "@/components"; // se puede importar directamente con components
import { Services } from "@/components/cards/Services";
import {About} from "@/components/about"

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <article>
        <Services />
      </article>
      <section>
        <About/>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}
