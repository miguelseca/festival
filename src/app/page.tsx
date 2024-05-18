import Navbar from "@/components/NavigationBar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        className="flex flex-col bg-cover bg-center bg-fixed items-center justify-center bg-zinc-300 h-[calc(100vh-200px)] min-h-[400px]"
      >
        <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
          <div className="relative">
            <img src="/images/logo.png" width={175}></img>




            <div className="item-center flex justify-center mt-[-70px] mb-5">
              <div className="h-14 w-14 bg-pink-500 rounded-full flex items-center justify-center gap-1">
                <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
                <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey"></div>
                <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey"></div>
                <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey"></div>
                <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey"></div>
              </div>
            </div>
          </div>
          <div className="text-5xl font-bold">
            tw:<span className="text-sky-900">mf</span>
          </div>
        </div>

        <div className="font-bold mt-3 text-sm">
          Keep me updated with news and promotions
        </div>

        <form className="flex gap-2 mt-3">
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500 focus:outline"
          ></input>

          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
          >
            
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
