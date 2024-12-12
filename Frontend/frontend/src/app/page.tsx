import axios from "axios";
import Image from "next/image";
import { title } from "node:process";

const getStrapiData = async(api: string) => {
  console.log("getStrapiData active");
  try{
    const response = await axios.get('http://localhost:1337'+api).then((resp) => {
      const {id, title, description} = resp.data.data
      return {id, title, description}
    })
    return response
  }catch(error){
    console.log(error); 
  } 
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page")
  
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-5xl font-bold text-center py-6">{strapiData?.title}</h1>
        <div className="text-xl font-thin font-mono text-center py-4">{strapiData?.description}</div>
      </div>
    </div>
  );
}
