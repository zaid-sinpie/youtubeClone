export default function Navbar() {
  return (
    <ul className="flex w-full justify-between items-center fixed top-0 left-0">
      <menu className="flex gap-4 p-4 items-center cursor-pointer">
        <i className="fa-solid fa-bars text-stone-200 cursor-pointer px-[10px] py-[5px] text-xl rounded-[50%] hover:bg-neutral-700"></i>
        <div className="flex items-center">
          <i className="fa-brands fa-youtube text-red-600 text-3xl"></i>
          <h1 className="text-stone-100 font-bold text-2xl">
            YouTube <sup className=" text-xs font-light text-stone-500">IN</sup>{" "}
          </h1>
        </div>
      </menu>
      <div className="flex justify-around w-auto gap-2">
        <div className="relative">
          <input
            id="ipt"
            type="text"
            placeholder="Search"
            className=" w-[40rem] outline-none rounded-full py-2 px-4 border border-stone-400 bg-[#0f0f0f] font-medium text-stone-50"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[0px] right-0 bg-neutral-700 border-stone-400 py-3 px-5 border-[1px] rounded-r-full text-stone-400 cursor-pointer"></i>
        </div>
        <button className="text-stone-100 px-4 bg-neutral-700 rounded-full hover:bg-neutral-600">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </div>
      <ul className="flex text-stone-50 text-2xl px-8 gap-2">
        <i className="fa-solid fa-video cursor-pointer p-[10px] rounded-[50%] hover:bg-neutral-700"></i>
        <i className="fa-regular fa-bell cursor-pointer p-[10px] rounded-[50%] hover:bg-neutral-700"></i>
        <i class="fa-solid fa-user cursor-pointer p-[10px] rounded-[50%] hover:bg-neutral-700"></i>
      </ul>
    </ul>
  );
}
