import Image from "next/image";

export default function Home() {
  return (
      <div className="mx-auto max-w-screen-2xl border-red-500 border-2 w-full">
        <header className="flex flex-row items-center justify-between w-full px-4 py-4">
          <div className="bg-gray-300 px-1 py-0.5 rounded-md">
            <Image
              src="/elemes-long-light.png"
              alt="logo"
              width={200}
              height={0}
            />
          </div>
          <div className="flex flex-row">
            <a href="#" className="font-semibold text-gray-700 dark:text-gray-200">Home</a>
          </div>
        </header>
      </div>
  );
}
