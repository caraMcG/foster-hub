import Image from "next/image";
// import heroImage from "../assets/unsplash_catdog1.jpg";


export default function Home() {
  
  return (
    // mt-12
    <div className="flex flex-row flex-wrap justify-center gap-y-12 gap-x-6 py-12 px-12">
      <div className="flex-1 flex flex-col ml-24 mt-20">
        <div className="flex flex-col mb-8">
          <h1 className="text-8xl mb-8 text-left text-textdark">Foster<span className="text-textmuted">Tales</span></h1> 
          <p className="text-xl public_paragraph text-textdark">An online hub where you can track your foster journey with your chosen shelters.
          Want to get involved? Reccommend us to your local rescue and sign up to be a foster home!</p>
        </div>
        <div className="flex flex-row justify-left gap-10">
          <div className="flex-2 text-left">
            <button className=" h-16 w-48 bg-btnprimary hover:bg-btnhoverp text-textwhite font-semibold rounded-lg">Register</button>
          </div>
          <div className="flex-1 text-left">
            {/* <button className="border border-2 border-btnprimary hover:border-btnhoverp hover:border-4 font-semibold text-links  py-4 px-16 rounded-lg">Contact</button> */}
            <button className="box-border h-16 w-48 border-2 border-btnprimary font-semibold text-links rounded-lg hover:border-btnhoverp hover:border-[3px]">Contact</button>
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex flex-col items-center">      
          <Image 
            src = "/assets/unsplash_catdog1.jpg" 
            width="700"
            height="300"
            // layout="responsive"
            className="max-w-none aspect-auto rounded-full"
            quality={100}
            draggable = 'false'
            alt= "landing page Image"/>
      </div>
    </div>
  );
}
