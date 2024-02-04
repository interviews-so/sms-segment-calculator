import calculateSegments from "./index";

describe("calculateSegments", () => {
  it("should correctly calculate segments for GSM-7 encoding", () => {
    const message = "Hello, World!";
    const result = calculateSegments(message);
    expect(result).toEqual({
      encoding: "GSM-7",
      characterLength: 13,
      segments: 1,
    });
  });

  it("should correctly calculate segments for UCS-2 encoding", () => {
    const message =
      "Surprisingly, ChatGPT did not write this message — a human did";
    const result = calculateSegments(message);
    expect(result).toEqual({
      encoding: "UCS-2",
      characterLength: 62,
      segments: 1,
    });
  });

  it("should correctly calculate segments for long UCS-2 messages with emoji", () => {
    const message =
      "This is a very long message that will require multiple segments when encoded in UCS-2 encoding. 💀";
    const result = calculateSegments(message);
    expect(result).toEqual({
      encoding: "UCS-2",
      characterLength: 98,
      segments: 2,
    });
  });

  it("should correctly calculate character length for multi-emoji", () => {
    const message = "👨‍👩‍👧‍👧";
    const result = calculateSegments(message);
    expect(result).toEqual({
      encoding: "UCS-2",
      characterLength: 11,
      segments: 1,
    });
  });

  it("should correctly calculate segment count for a very large family gathering", () => {
    const message = "👨‍👩‍👧‍👧👨‍👩‍👧‍👧👨‍👩‍👧‍👧👨‍👩‍👧‍👧👨‍👩‍👧‍👧👨‍👩‍👧‍👧👨‍👩‍👧‍👧";
    const result = calculateSegments(message);
    expect(result).toEqual({
      encoding: "UCS-2",
      characterLength: 77,
      segments: 2,
    });
  });
});
