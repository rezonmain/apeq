import LocaleSelect from "../LocaleSelect/LocaleSelect";

export default function Nav() {
  return (
    <header className="bg-black text-white px-8">
      <div className="flex flex-row flex-nowrap items-center justify-between">
        <span></span>
        <div className=" w-9">
          <LocaleSelect />
        </div>
      </div>
    </header>
  );
}
