const cssClassesMenu =
  "text-stone-200 cursor-pointer px-[11px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700";

export default function Shorts({}) {
  return (
      <div className="flex w-full rounded-md h-[30rem] justify-center items-center">
      <div className="bg-slate-500 w-[30%] rounded-md h-[30rem] flex flex-col items-center justify-between relative">
        <ul className="absolute flex justify-between w-[90%] text-xl text-stone-50 top-4">
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-volume-high"></i>
        </ul>
        <article className="absolute flex flex-col bottom-4 left-4 w-[90%] gap-1">
          <ul className="flex justify-start items-center gap-3">
            <div className="h-10 w-10 bg-slate-900 rounded-full cursor-pointer"></div>
            <h2 className="font-bold text-stone-50 cursor-pointer">name</h2>
            <button className="bg-stone-50 font-semibold text-[0.8rem] py-2 px-5 rounded-3xl hover:bg-stone-200 tracking-wider">
              Subscribe
            </button>
          </ul>
          <p className="font-semibold text-stone-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            voluptatum.
          </p>
        </article>
      </div>
      <menu className="flex flex-col justify-around items-center w-[10%] h-[30rem]">
        <ul className="flex flex-col">
          <li>
            <i class="fa-solid fa-thumbs-up text-stone-200 cursor-pointer px-[11px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700"></i>
          </li>
          <h2 className="text-stone-50 font-semibold text-center">Likes</h2>
        </ul>
        <ul className="flex flex-col">
          <li>
            <i class="fa-solid fa-thumbs-up text-stone-200 cursor-pointer px-[11px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700 rotate-180"></i>
          </li>
          <h2 className="text-stone-50 font-semibold text-center">Dislike</h2>
        </ul>
        <ul className="flex flex-col items-center">
          <li>
            <i class="fa-solid fa-comment text-stone-200 cursor-pointer px-[11px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700"></i>
          </li>
          <h2 className="text-stone-50 font-semibold text-center">Comments</h2>
        </ul>
        <ul className="flex flex-col items-center">
          <li>
            <i class="fa-solid fa-share text-stone-200 cursor-pointer px-[11px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700"></i>
          </li>
          <h2 className="text-stone-50 font-semibold text-center">Share</h2>
        </ul>
        <ul className="flex flex-col items-center">
          <li className="text-stone-200 cursor-pointer px-[20px] py-[6px] text-2xl rounded-[50%] bg-neutral-800 hover:bg-neutral-700 rotate-180">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
        </ul>
        <div className="bg-slate-500 h-10 w-10 rounded-md cursor-pointer"></div>
      </menu>
      </div>
  );
}
