import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex w-full p-2">
      <div className="max-w-[1024px] mx-auto flex-1">
        <Image
          src="/transfeera-logo.svg"
          alt="Transfeera"
          width={211}
          height={41}
        />
      </div>
    </header>
  );
};
