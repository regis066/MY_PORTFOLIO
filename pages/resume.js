import Head from "next/head";
import Image from "next/image";
import deved from '../public/head.png'
import stopwatch from '../public/stopwatch.png'
import todo from '../public/todollist.png'
import calc from '../public/calc.png'


export default function resume () {
    return(
        <div>
        <Head>
        <title>Resume</title>
        </Head>
        <main>
        <div className="flex items-center justify-start">
        <div className='bg-blue-900 w-1/8 h-auto p-8'>
        <div className="flex items-center justify-center">
        <Image src={deved}  className="rounded-full w-32 border-2"/>
        </div>
        <div className="mt-10">
        <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">Contacts</h1>
        <hr className="mb-5 w-1/6"></hr>
        <h2 className="text-gray-400 text-sm">mugisharegis72@gmail.com</h2>
        <h3 className="text-gray-400 text-sm">Kigali , Rwanda</h3>
        <h4 className="text-gray-400 text-sm">Tel: 0739943020</h4>
        <hr className="my-5"></hr>
        <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">EDUCATION</h1>
        <hr className="mb-5 w-1/6"></hr>
        <h1 className="text-gray-400 text-sm font-semibold tracking-widest">Student at Rwanda Coding Academy</h1>
        <h2 className="text-gray-500 text-sm">RCA , Rwanda / 2023</h2>
        <h3 className="text-gray-500 italic">Learning Software Engineering && Embedded Systems</h3>
        <hr className="my-5"></hr>
        <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">SKILLS</h1>
        <hr className="mb-5 w-1/6"></hr>
        <h1 className="text-teal-600 text-xl">Frontend</h1>
        <ul className="list-disc">
        <li className="text-gray-200 ">HTML</li>
        <li className="text-gray-200">CSS</li>
        <li className="text-gray-200">Tailwind CSS</li>
        <li className="text-gray-200">Bootstrap 5</li>
        <li className="text-gray-200">REACT JS</li>
        <li className="text-gray-200">NEXTJS</li>
        <li className="text-gray-200">JS</li>
        </ul>
        <h2 className="text-teal-600 text-xl">Backend</h2>
        <ul className="list-disc">
        <li className="text-gray-200">NODE JS</li>
        <li className="text-gray-200">PHP</li>
        <li className="text-gray-200">MySQL && Mongo DB</li>
        <li className="text-gray-200">Postman</li>
        </ul>
        <h3 className="text-teal-600 text-xl">Design</h3>
        <ul className="list-disc">
        <li className="text-gray-200">Figma</li>
        <li className="text-gray-200">Adobe Photoshop</li>
        <li className="text-gray-200">Adobe Illustrator</li>
        <h4 className="text-teal-600 text-xl">Social Skills && Activities</h4>
        <li className="text-gray-200">Leadership Skils</li>
        <li className="text-gray-200">Arts && Design Club</li>
        </ul>
        </div>
   
        </div>
        <div className="relative shadow-lg p-20 mx-6">
        <h1 className="text-3xl">EXPERIENCE</h1>
        <p className="text-gray-600 text-justify">I have 2 years of experience in Software Engineering from 2021 up to now. And in those 2 years of my experience , I acquired many skills suchs REACT JS, NODE JS, NEXT JS ...</p>
        <p className="text-gray-600 text-justify">In the skills I listed in the leftside, now I am a Fullstack Developer so I would like to be Enrolled in order to help in your work activities.</p>
       
        <h1 className="text-teal-600">Small Projects I worked On:</h1>
        <div className="flex justify-between">
        <li>To Do List</li>
        <Image src={todo} width={300} className="rounded-2xl shadow-md"/>
        </div>
       <div className="flex justify-between mt-10">
        <li>Simple JS Calculator</li>
       <Image src={calc} width={300} className="rounded-2xl shadow-2xl"/>
       </div>
       <div className="flex justify-between mt-10">
       <li>JS Stop Watch</li>
       <Image src={stopwatch} width={300} className="rounded-2xl shadow-2xl"/>
       </div>
        </div>
        </div>
        
        </main>
        </div>
    )
}