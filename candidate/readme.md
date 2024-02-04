# SMS Segment Counter

This is the material used for the SMS Segment Counter interview.

## The Problem

SMS messages are limited to chunks of data called segments, with each segment containing a maximum of number of characters based on the encoding used. The goal of this task is to implement a function that can calculate the number of segments required to send a given message.

> Why does this matter?
>
> Messaging services like Twilio Messaging and AWS SNS charge \_per segment, not per text, so it's important to know how many segments a message will require in order to calculate the cost.

### Requirements

Your task is to build a function that satisfies the following conditions.

Given a string of characters representing a text message (`body`), perform the following calculations:

- `segments`: Given a message string, the function should calculate the number of segments required to send the message.
- `encoding`: Return the encoding used to send the message. The encoding can be either `GSM-7` or `UCS-2`.
- `characterLength`: The total number of characters in the encoded message

### Algorithm

There are 2 encodings that can be used to send an SMS message:

- GSM-7
- UCS-2

> Although not required to read for this task, more information about GSM-7 can be found [here](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding) and information about USC-2 can be found [here](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding)

#### When to use GSM-7

- If the message contains only characters from the GSM-7 character set, then the message can be encoded using GSM-7.

The GSM-7 character set contains the following characters (there are 128 total characters in the GSM 7-bit default alphabet, including 27 escape characters and 1 unused character):

```txt
@£$¥èéùìòÇ\nØø\n\rÅåΔ_ΦΓΛΩΠΨΣΘΞ\x1BÆæßÉ !"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà
```

#### When to use UCS-2

- If the message contains any characters that are not in the GSM-7 character set, then the message must be encoded using UCS-2.

#### Segment Calculation

When there is only one message segment:

- Using GSM-7, then each segment can contain 160 characters
- Using UCS-2, then each segment can contain 70 characters.

When there are multiple segments, we need to include data that tells the recipient how many segments are in the message. This data is called the User Data Header (UDH). The UDH is 6 bytes long and is used to tell the recipient how many segments are in the message.

This means that the maximum number of characters in a single segment is 153 when using GSM-7 and 67 when using UCS-2.

- Using GSM-7, then each segment can contain 153 characters when there are multiple segments
- Using UCS-2, then each segment can contain 67 characters when there are multiple segments.

### Examples

GMS-7

```txt
Hello, World!
```

The function should return the following:

```json
{
  "encoding": "GSM-7",
  "characterLength": 13,
  "segments": 1
}
```

UCS-2

```txt
Surprisingly, ChatGPT did not write this message — a human did
```

The function should return the following:

```json
{
  "encoding": "USC-2",
  "characterLength": 62,
  "segments": 1
}
```

UCS-2

```txt
Surprisingly, ChatGPT did not write this message — a human did
```

The function should return the following:

```json
{
  "encoding": "USC-2",
  "characterLength": 62,
  "segments": 1
}
```
