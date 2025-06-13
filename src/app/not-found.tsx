
import Link from 'next/link';
import { headers } from 'next/headers';


export default async function NotFound() {

  const headersList = await headers(); 

  const referrer = headersList.get('referer') || 'URL desconhecida';

  return (
    <div className='flex flex-col items-center justify-center bg-[#0000AA] h-screen w-full text-gray-50'>
      <h1 className='bg-gray-300 text-[#0000AA] text-2xl font-bold px-4 pb-0.5 mb-5'>404 PAGE NOT FOUND</h1>
      <p>A fatal exception 0E error occurred at 0028:C0011B8F in VxD VFAT(01)+00000000 {referrer}</p>
      <p>Please check that you have entered the address correctly or try browsing again from the beginning.</p>
      <Link href="/">
        Back to Home.
      </Link>
    </div>
  );
}