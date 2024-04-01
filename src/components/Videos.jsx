export default function Videos({}) {
  return (
    <article className="h-[15rem] w-[22rem] flex flex-col gap-2 cursor-pointer mb-6">
      <div className="h-[70%] w-full bg-stone-600 rounded-md"></div>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2">
          <div className="flex justify-start items-start">
            <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-bold text-stone-50 tracking-wider">Title of the Video</h1>
            <p className="text-stone-400 text-[0.9rem] text-start font-semibold">
              User Name
            </p>
            <p className="text-stone-400 text-[0.9rem] text-start font-semibold">
              views Date of post
            </p>
          </div>
        </div>
        <div className="">
          <i class="fa-solid fa-ellipsis-vertical text-stone-50"></i>
        </div>
      </div>
    </article>
  );
}
