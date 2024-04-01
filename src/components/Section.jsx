const active = 'font-medium bg-neutral-700 px-5 py-1 rounded-md bg-stone-50';
import NavBtn from "./NavBtn.jsx";

export default function Section({ children }) {
  return (
    <section className="fixed top-[4.4rem] right-0 w-[70rem] h-screen flex flex-col justify-start items-start">
        <wrapper className=" w-full h-full gap-[3rem] overflow-auto relative">
        <ul className="w-full py-2 flex justify-start gap-3 fixed bg-[#1f1f1f]">
            <button className={active}>All</button>
            <NavBtn>Music</NavBtn>
            <NavBtn>Gaming</NavBtn>
            <NavBtn>Genshin Impact</NavBtn>
            <NavBtn>JavaScript</NavBtn>
            <NavBtn>Mixes</NavBtn>
            <NavBtn>Comedy</NavBtn>
            <NavBtn>Drawing</NavBtn>
            <NavBtn>Anime</NavBtn>
            <NavBtn>New to You</NavBtn>
        </ul>
        <div className="flex flex-wrap gap-2 mt-14">
        {children} 
        </div>
        </wrapper>
    </section>
  );
}
