interface Props {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: Props) => {
  return <p className="text-red-500 font-bold">{children}</p>;
};
