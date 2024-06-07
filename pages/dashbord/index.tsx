import Link from "next/link";

export default function index() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div>
        <span className="bg-fuchsia-700 block text-zinc-50 p-6 font-[morabba] text-[14px]">داشبورد</span>
      </div>
      <div>
        <Link href="/api/auth/loguot">
          <div className="bg-red-500 inline-block text-zinc-50 p-2 rounded-[8px] font-[morabba] text-[13px] fixed top-4 left-4 shadow-lg">
            <span>خروج</span>
          </div>
        </Link>
        <Link href="/">
                  <div className="bg-zinc-800 hover:bg-zinc-700 p-2 inline-block rounded-[8px] transition-colors fixed top-3.5 right-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
                    </svg>
                  </div>
                </Link>
      </div>
    </div>
  );
}
