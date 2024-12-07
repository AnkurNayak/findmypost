export const createStaggerContainer = (staggerAmount = 0.5) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmount,
    },
  },
});

export const createStaggerVariant = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration } },
});
