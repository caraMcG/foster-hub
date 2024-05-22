import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center p-32">
      <div className="flex-1">
        <h1 className="py-5 text-7xl">Foster<span className="text-indigo-600">Tales</span></h1>
      </div>
      <div className="flex-1 mt-10">      
        <p className="text-xl public_paragraph">An online hub where fosters can track their journeys with their chosen shelters<br/>Want to get involved? Sign up to foster a cat, dog or critter!</p>
      </div>
    </div>
  );
}
