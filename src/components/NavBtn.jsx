const btn = 'font-medium text-stone-50 bg-neutral-700 px-5 py-1 rounded-md hover:bg-neutral-600';

export default function NavBtn({children}){
    return (
        <button className={btn}>{children}</button>
    )
}