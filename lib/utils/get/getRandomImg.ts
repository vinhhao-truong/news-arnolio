import toHex from "to-hex";

const imgList: string[] = [
  "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg",
  "https://images.pond5.com/breaking-news-background-footage-099072863_prevstill.jpeg",
  "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=",
  "https://cdn.pixabay.com/photo/2014/08/25/05/55/news-426895_960_720.jpg",
];

export default function getRandomImg(key: string): string {
  const hex = toHex(key, { size: 1 });
  const hexedString = parseInt(hex[hex.length - 5]);

  if (isNaN(hexedString)) {
    return imgList[0];
  }

  if (hexedString <= 4) {
    return imgList[hexedString];
  }

  const reducedNum = (number: number): number => {
    if (number <= 4) {
      return number;
    }

    return reducedNum(number - 4);
  };

  return imgList[reducedNum(hexedString)];
}
