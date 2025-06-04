import { motion } from "motion/react";

const Game = ({ game }) => {
  return (
    <motion.li
      className="bg-secondary-1300 rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "100%" }}
      transition={{ 
        opacity: { duration: 0.75, ease: "easeInOut" }
      }}
    >
      <figure><img src={game.src} alt="Game Icon"/></figure>
      <p className="text-primary-50 text-center py-6 text-xl/8 font-light max-sm:text-2xl/8 max-sm:tracking-tighter max-md:pb-12 max-sm:py-4">{game.title}</p>
    </motion.li>
  )
}

export default Game