import { games } from "../../../utils/content";
import GameList from "./GamesList";

const Games = () => {
  return (
    <section className="bg-gradient-to-bottom">
      <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-lg:gap-y-0 max-md:px-6">
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6 max-lg:mb-18">
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8 max-lg:mb-8">Games</p>
          <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:mb-4 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter max-sm:text-left">
            Featured Games You’ll Love
          </h2>
          <p className="text-primary-100 px-28 text-center text-xl/loose font-light max-lg:text-lg/8 max-md:px-4">
            Dive into our top picks designed to thrill. These games are packed with excitement, big wins, and nonstop action.
          </p>
        </div>
        <GameList games={games} />
      </div>
    </section>
  )
}

export default Games