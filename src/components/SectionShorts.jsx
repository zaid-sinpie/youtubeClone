export default function SectionShorts({ children }) {
  return (
    <section className="fixed top-[4.4rem] right-0 w-[70rem] h-screen flex flex-col justify-start items-center overflow-x-auto gap-10 pb-[10rem]">
      {children}
    </section>
  );
}
