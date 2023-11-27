export function formatAccountNumber(input: string | null): string {
  if (!input) return "";

  if (input.length < 2) {
    return input;
  }

  const firstPart = input.slice(0, -1);
  const lastChar = input.slice(-1);

  const formattedNumber = `${firstPart}-${lastChar}`;

  return formattedNumber;
}
