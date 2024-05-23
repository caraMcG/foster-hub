import Image from "next/image";
import heroImage from "./assets/unsplash_catdog1.jpg";


export default function Home() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-y-12 mt-12">
      <div className="flex-1 flex flex-col ml-24 mt-20">
        <h1 className="text-7xl mb-6 text-left text-textdark">Foster<span className="text-textmuted">Tales</span></h1> 
        {/* text-indigo-600 */}
        <p className="text-xl public_paragraph text-h12dark">An online hub where you can track your foster journey with your chosen shelters.
        Want to get involved? Reccommend us to your local rescue and sign up to be a foster home!</p>
      </div>
      <div className="flex-1 flex flex-col items-center mr-24">      
              <Image 
                src = {heroImage} 
                width="700"
                height=""
                className="max-w-none aspect-auto rounded-full"
                quality={100}
                draggable = 'false'
                alt= "landing page Image"/>
      </div>
    </div>
  );
}
