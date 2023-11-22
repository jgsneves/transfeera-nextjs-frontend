import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex w-full p-2">
      <Image
        src="./transfeera-logo.svg"
        alt="Transfeera"
        width={211}
        height={41}
      />
    </header>
  );
};
