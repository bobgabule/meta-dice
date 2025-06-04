const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "Games",
    href: "#",
  },
  {
    id: 3,
    link: "Leaderboard",
    href: "#",
  },
  {
    id: 4,
    link: "Community",
    href: "#",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Games",
    links: ["Free to Play", "Pay to Win", "Free Trial", "Leaderboards"],
  },
  {
    id: 3,
    category: "About",
    links: ["Services", "Contact", "Terms", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const games = [
  {
    id: 1,
    src: new URL("../assets/games/LightningRoulette.webp", import.meta.url),
    title: "Lightning Roulette",
  },
  {
    id: 2,
    src: new URL("../assets/games/MoneyTrain.webp", import.meta.url),
    title: "Money Train",
  },
  {
    id: 3,
    src: new URL("../assets/games/BonanzaBillion.webp", import.meta.url),
    title: "Bonanza Billion",
  }
];

export {
  navigationLinks,
  footerCols,
  games,
};
