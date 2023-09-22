import ISR from "./components/ISR"
import SSG from "./components/SSG"
import SSR from "./components/SSR"
import CSR from "./components/CSR"
export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-8">
      <h2 className="m-2 text-5xl text-cyan-300 font-bold">Demonstration of Rendering Strategies in Next.js</h2>
      <p className="m-2">This is a preview of the article <q>Rendering Strategies in Next.js. </q> You can read the full article by clicking this <a className='text-cyan-300' href="">link.</a></p>
      <div style={{ maxWidth: "400px" }}>
      <div className="m-2">
        <CSR/>
      </div>
      <div className="m-2">
        <SSR/>
      </div>
      <div className="m-2">
        <SSG/>
      </div>
      <div className="m-2">
        <ISR/>
      </div>
      </div>

    </main>
  )
}
