import { Hero } from "@/components/home/hero/hero"
import {Form} from "@/components" // se puede importar directamente con components

export default function Home () {
    return (
        <section>
            <div>
                <Hero/>
            </div>
            <section>
                <Form/>
            </section>
        </section>
    )
}