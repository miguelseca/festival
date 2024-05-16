export default function NavButton({ label, subItems }: { label: string, subItems: string[] }) {
  return (
    <div className="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out group">
      <span>{label}</span>
      <div className="hidden group-hover:block absolute top-full bg-pink-500 whitespace-nowrap right-0 rounded-b-md">
        <div className="p-4 font-bold text-pink-200 hover:bg-white/5 cursor:pointer hover:text-zinc-200 transition-colors ease-in-out">
          <span>{subItems[0]}</span>
        </div>

        <div className="p-4 font-bold text-pink-200 hover:bg-white/5 cursor:pointer hover:text-zinc-200 transition-colors ease-in-out">
          <span>{subItems[1]}</span>
        </div>
      </div>
    </div>
  );
}
