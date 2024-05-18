"use client";

export default function ThemeToggleButton() {
  function toggleTheme() {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  return (
    <div
      id="theme-toggle-button"
      className="z-10 fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 p-2 text-3xl"
    >
      <img onClick={toggleTheme} src="/icons/sun.svg" className="w-10 text-zinc-200"></img>
      <img onClick={toggleTheme} src="/icons/moon.svg" className="w-10 text-zinc-200"></img>
    
      
    </div>
  );
}
