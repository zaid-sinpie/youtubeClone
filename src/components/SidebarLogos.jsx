const iconClasses =
  "flex w-full h-[3rem] justify-start items-center py-1 h-[2.5rem] px-6 font-light text-stone-50 gap-5 text-center text-x rounded-md hover:bg-neutral-600";
const active = `${iconClasses} bg-neutral-700`;
const listClasses = "w-[13rem]  flex flex-col justify-start items-center ml-1";

export default function SidebarLogos() {
  return (
    <menu className="fixed top-[4.4rem] left-0 flex flex-col h-screen items-center justify-start">
      <ul className={listClasses}>
        <a href="#" className={active}>
          <i class="fa-solid fa-house"></i>
          <h2 className="tracking-wider">Home</h2>
        </a>
        <a href="#" className={iconClasses}>
          <i class="fa-solid fa-video"></i>
          <h2 className="tracking-wider">Shorts</h2>
        </a>
        <a href="#" className={iconClasses}>
          <i class="fa-solid fa-clapperboard"></i>
          <h2 className="tracking-wider">Subscription</h2>
        </a>
      </ul>
      <hr className="w-[90%] h-1 my-3" />
      <ul className={listClasses}>
        <a href="#" className={iconClasses}>
        <i class="fa-regular fa-user"></i>
          <h2 className="tracking-wider">Your channel</h2>
        </a>
        <a href="#" className={iconClasses}>
        <i class="fa-solid fa-clock-rotate-left"></i>
          <h2 className="tracking-wider">History</h2>
        </a>
        <a href="#" className={iconClasses}>
        <i class="fa-solid fa-play"></i>
          <h2 className="tracking-wider">Your videos</h2>
        </a>
        <a href="#" className={iconClasses}>
        <i class="fa-regular fa-clock"></i>
          <h2 className="tracking-wider">Watch later</h2>
        </a>
        <a href="#" className={iconClasses}>
        <i class="fa-regular fa-thumbs-up"></i>
          <h2 className="tracking-wider">Liked videos</h2>
        </a>
      </ul>
      <hr className="w-[90%] h-1 my-3" />
    </menu>
  );
}
