import { Hero } from "@/components/home/hero/hero"
import { Form } from "@/components" // se puede importar directamente con components
// import { Services } from "@/components/cards/serviceCard" 

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <article>
        <h2>Componenete servicio</h2>
        {/* <Services/> */}
      </article>
      <section>
        <h2>Sobre nosotros</h2>
      </section>
      <section>
        <Form />
      </section>
    </main>
  )
}
