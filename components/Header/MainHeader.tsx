import Link from "next/link";
import Image from "next/image";
import { ReactElement, useContext } from "react";
import { Context } from "@/providers/MainContext";

export default function MainHeader() {
  const { user, isLoggedIn } = useContext(Context);
  return (
    <div>
    <div className="hidden md:block">
      <header className="w-full fixed bg-white dark:bg-zinc-800 text-zinc-200 px-16 py-2 cursor-default font-[dana]">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-x-5">
              <Link href="/">
                <Image src="/favicon.png" alt="logo" width={40} height={40} />
              </Link>
              <span className="font-[morabba] text-zinc-700 dark:text-zinc-100">لوگو سایت</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <span onClick={() => document.documentElement.classList.toggle("dark")}>
                <svg
                  className="dark:text-zinc-300 dark:hover:text-zinc-50 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentcolor"
                >
                  <path d="M396-396q-32-32-58.5-67T289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396Zm85 196q-56 0-107-21t-91-61q-40-40-61-91t-21-107q0-51 17-97.5t50-84.5q13-14 32-9.5t27 24.5q21 55 52.5 104t73.5 91q42 42 91 73.5T648-326q20 8 24.5 27t-9.5 32q-38 33-84.5 50T481-200Zm223-192q-16-5-23-20.5t-4-32.5q9-48-6-94.5T621-621q-35-35-80.5-49.5T448-677q-17 3-32-4t-21-23q-6-16 1.5-31t23.5-19q69-15 138 4.5T679-678q51 51 71 120t5 138q-4 17-19 25t-32 3ZM480-840q-17 0-28.5-11.5T440-880v-40q0-17 11.5-28.5T480-960q17 0 28.5 11.5T520-920v40q0 17-11.5 28.5T480-840Zm0 840q-17 0-28.5-11.5T440-40v-40q0-17 11.5-28.5T480-120q17 0 28.5 11.5T520-80v40q0 17-11.5 28.5T480 0Zm255-734q-12-12-12-28.5t12-28.5l28-28q11-11 27.5-11t28.5 11q12 12 12 28.5T819-762l-28 28q-12 12-28 12t-28-12ZM141-141q-12-12-12-28.5t12-28.5l28-28q12-12 28-12t28 12q12 12 12 28.5T225-169l-28 28q-11 11-27.5 11T141-141Zm739-299q-17 0-28.5-11.5T840-480q0-17 11.5-28.5T880-520h40q17 0 28.5 11.5T960-480q0 17-11.5 28.5T920-440h-40Zm-840 0q-17 0-28.5-11.5T0-480q0-17 11.5-28.5T40-520h40q17 0 28.5 11.5T120-480q0 17-11.5 28.5T80-440H40Zm779 299q-12 12-28.5 12T762-141l-28-28q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l28 28q11 11 11 27.5T819-141ZM226-735q-12 12-28.5 12T169-735l-28-28q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l28 28q12 12 12 28t-12 28Zm170 339Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center gap-x-2 dark:bg-blue-700/20 dark:hover:bg-blue-700 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-1 rounded-md cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#e8eaed"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68-39.5t-2-78.5l54-98-144-304H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h65q11 0 21 6t15 17l27 57Zm134 280h280-280Z" />
              </svg>
              <span>
                سبدخرید
              </span>
            </div>
            {isLoggedIn ? (
              <div>
                <Link href="/dashbord">
                  <div className="flex items-center gap-x-2 text-zinc-100 font-[morabba] dark:bg-green-700/30 dark:hover:bg-green-600 bg-green-500 hover:bg-green-600 transition-colors px-4 py-1 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                    <span>
                      {user.name} {/* : {user.email}{" "} */}
                    </span>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <Link href="/auth/login">
                  <div className="dark:bg-green-700/30 dark:hover:bg-green-600 bg-green-500 hover:bg-green-600 transition-colors px-4 py-1 rounded-md">
                    <span>ورود / ثبت نام</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
    <div className="invisible h-14 hidden md:block"></div>
    </div>
  );
}
