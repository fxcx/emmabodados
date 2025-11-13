import { Nav } from "@/components"
import { Logo } from "@/components"

export const Header = () => {
  return (
    <header className="bg-darkblue text-white p-4 shadow-md flex justify-center">
      <div className="" >
        <Logo />
      </div>
      <div className="text-center flex-1 flex justify-center">
        <Nav />
      </div>
    </header>
  )
}
