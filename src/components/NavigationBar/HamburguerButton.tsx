type HamburguerButtonProps = {
  isMenuOpen: boolean;
  handleOpenFunction: () => void;
};

export default function HamburguerButton({
  isMenuOpen,
  handleOpenFunction,
}: HamburguerButtonProps) {
  return (
    <button
      onClick={handleOpenFunction}
      className="group block md:hidden ml-auto pr-4 my-auto h-14 cursor-pointer"
    >
      <div
        className={
          isMenuOpen
            ? "w-8 rounded-full bg-zinc-200 h-1 rotate-45 top-2 relative transition-all"
            : "top-0 w-8 rounded-full bg-zinc-200 h-1 transition-all"
        }
      ></div>
      <div
        className={
          isMenuOpen
            ? "opacity-0 w-8 rounded-full bg-zinc-200 h-1 mt-1 transition-all"
            : "opacity-100 w-8 rounded-full bg-zinc-200 h-1 mt-1 transition-all"
        }
      ></div>
      <div
        className={
          isMenuOpen
            ? "w-8 rounded-full bg-zinc-200 h-1 mt-1 -rotate-45 bottom-2 relative transition-all"
            : "top-0 w-8 rounded-full bg-zinc-200 h-1 mt-1 transition-all"
        }
      ></div>
    </button>
  );
}
