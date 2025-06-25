import HoverAnimation from "~/hover-animation/HoverAnimation";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto bg-[#F7F7F7]">
      <div className="h-dvh w-full flex items-center justify-center">
        <HoverAnimation />
      </div>
    </div>
  );
}
