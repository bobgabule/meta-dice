import Game from "./Game"

const GamesList = ({ games }) => {
  return (
    <ul className="mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4 max-lg:mb-18 max-sm:grid-cols-1 max-sm:gap-y-6">
      {games.map( ( game ) => (
        <Game key={game.id} game={game} />
      ))}
    </ul>
  )
}

export default GamesList