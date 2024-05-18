import './_component_styles.css'

export default function AnimatedLogo() {
  return (
    <div className="item-center flex justify-center mt-[-70px] mb-5">
      <div className="h-14 w-14 bg-pink-500 rounded-full flex items-center justify-center gap-1">
        <div className="animated-element-1 h-2 w-1 bg-pink-300 rounded-full"></div>
        <div className="animated-element-2 h-3 w-1 bg-pink-200 rounded-full"></div>
        <div className="animated-element-3 h-4 w-1 bg-pink-100 rounded-full"></div>
        <div className="animated-element-4 h-3 w-1 bg-pink-200 rounded-full"></div>
        <div className="animated-element-5 h-2 w-1 bg-pink-300 rounded-full"></div>
      </div>
    </div>
  );
}
