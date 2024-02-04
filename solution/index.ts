interface SmsSegmentInfo {
  encoding: string;
  characterLength: number;
  segments: number;
}

export default function calculateSegments(body: string): SmsSegmentInfo {
  const GSM_7_CHARACTERS =
    "@£$¥èéùìòÇ\nØø\n\rÅåΔ_ΦΓΛΩΠΨΣΘΞ\x1BÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà";

  let encoding: string = "GSM-7";
  let characterLength: number = 0;
  let segments: number = 1;

  [...body].forEach((char) => {
    if (!GSM_7_CHARACTERS.includes(char)) {
      encoding = "UCS-2";
    }
    characterLength += char.length;

    if (encoding === "GSM-7") {
      if (characterLength > 160) {
        segments = Math.ceil(characterLength / 153);
      } else {
        segments = Math.ceil(characterLength / 160);
      }
    } else {
      if (characterLength > 70) {
        segments = Math.ceil(characterLength / 67);
      } else {
        segments = Math.ceil(characterLength / 70);
      }
    }
  });

  return {
    encoding,
    characterLength,
    segments,
  };
}
