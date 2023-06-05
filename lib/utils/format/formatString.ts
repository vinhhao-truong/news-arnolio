export const capitaliseFirst = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

export const truncate = (
  string?: string,
  isWordful: boolean = false,
  numberOfChar: number = 20
): string => {
  if (!string) {
    return "";
  }

  if (string.length <= numberOfChar) {
    return string;
  }

  const truncatedSentence = string.slice(0, numberOfChar);

  if (!isWordful) {
    return truncatedSentence + "...";
  }

  const words = string.split(" ");
  const truncatedWords = truncatedSentence.split(" ");

  if (words.includes(truncatedWords[truncatedWords.length - 1])) {
    return truncatedSentence + "...";
  }

  return truncatedWords.slice(0, truncatedWords.length - 1).join(" ") + "...";
};
