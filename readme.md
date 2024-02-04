# SMS Segment Counter

This is the candidate and proctor material used for the SMS Segment Counter interview.

## The Problem

SMS messages are limited to chunks of data called segments, with each segment containing a maximum of number of characters based on the encoding used. The goal of this task is to implement a function that can calculate the number of segments required to send a given message.

## Real Life Application

Messaging services like Twilio Messaging and AWS SNS charge _per segment_. So it's important to know how many segments a message will require in order to calculate the cost, **especially** when you are charging customers.

## Material

There are 3 directories in this repository:

- `candidate`: This is the material that you will provide to the candidate.
- `proctor`: This is the material that you will provide to the proctor.
- `solution`: This is the solution to the problem that the candidate will implement.
