import FreeSpins from '../../assets/graphics/FreeSpins.webp';

const WelcomeBonus = () => {
  return (
    <section className="bg-gradient-to-top overflow-hidden">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="bg-secondary-1300 absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]" />

        <h2 className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
          Welcome <span className="text-primary-500 primary-glow">Bonus</span> Offer!
        </h2>

        <div className="grid grid-cols-2 items-center mb-20 gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10">
          <figure>
            <img className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full" src={FreeSpins} alt="Free Spins graphic" />
          </figure>
          <div className="z-1 relative max-w-lg justify-self-end max-md:max-w-max">
            <h3 className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-sm:text-2xl/8 max-sm:tracking-tight">Unlock Your Crypto Power Play Today</h3>
            <p className="text-primary-100 mb-10 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
              Kick off your crypto casino journey with a 200% bonus up to $1,000 and 100 Free Spins. Deposit now and start winning big!
            </p>
            <button
              className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 rounded-full px-8 py-3.5 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
            >
              <p className="text-lg/8 max-xl:text-base/loose">Claim Bonus</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeBonus