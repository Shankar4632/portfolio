import { MoonStar } from "lucide-react";

export default function Header() {
  return (
    <header className="w-[900px] border border-[#3b4b62] h-20 m-auto flex  items-center">
      <ul className="w-full">
        <li>Home</li>
      </ul>
      <ul className="text-end w-full border border-amber-200 flex justify-between text-[#a3bbfb] font-medium text-sm">
        <li className="font-medium text-sm ease-in transition-colors text-foreground duration-200 hover:text-foreground underline">
          Portfolio
        </li>
        <li>Project</li>
        <li>Blog</li>
        <li>
          <MoonStar size={24} color="#a3bbfb" className="" />
        </li>
      </ul>
    </header>
  );
}
