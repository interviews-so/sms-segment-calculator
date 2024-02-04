# Proctor: SMS Segment Counter

This is the proctor material used for the SMS Segment Counter interview.

## The Problem

SMS messages are limited to chunks of data called segments, with each segment containing a maximum of number of characters based on the encoding used. The goal of this task is to implement a function that can calculate the number of segments required to send a given message.

The real world application for this problem is that messaging services like Twilio Messaging and AWS SNS charge _per segment_ — and therefore if you charge customers in any way based on the number of segments, **it better be correct**.

### Requirements from the Candidate

They can build a function that satisfies the following conditions:

- Given a string of characters representing a text message (`body`), perform the following calculations:
  - `segments`: Given a message string, the function should calculate the number of segments required to send the message.
  - `encoding`: Return the encoding used to send the message. The encoding can be either `GSM-7` or `UCS-2`.
  - `characterLength`: The total number of characters in the encoded message

If they finish early, they can also implement the following:

- `remainingCharacters`: The number of characters remaining in the last unfilled segment
- `unicodeScalarLength`: The total number of Unicode scalar values in the message. This one is a bit tricky to explain if the candidate is unfamiliar with Unicode, so it's not required.
- Turning the library into a dependency that can be published.

### Recommendations for the Interviewer

We recommend imposing the following rules on the candidate:

- Given that they have the algorithm and character set, they should not use any libraries to solve this problem.
- They should not use AI assistance to solve this problem.
- They should write tests for their solution.
- They should be allowed to access the internet to look up information.
- Impose a time limit of 30 minutes for the problem.
- They can use any language they want to solve the problem, or alternatively, you can provide a starter project in the language of your choice.

> Ultimately, it's up to you to decide what you want to test for and what you want to allow. We recommend that you consider the role and the team's needs when making this decision.

### Helpful Questions for the Interviewer

- What about emojis? How do they affect the segment count?
- What about non-English characters? How do they affect the segment count?
- What about emojis that are actually "4" characters long? 👨‍👩‍👧‍👧 = 👨👩👧👧
- Do we need to account for newlines and carriage returns? Does it affect the segment count?

### Grading the Interview

We use a point system of 10 points for 5 different categories. This means the maximum number of points a candidate can achieve is 50.

- **Problem Solving (10 points):** This is the most subjective part of the interview. We will provide a rubric for grading the problem solving portion of the interview.

- **Correctness (10 points):** This is the most important category. If the candidate doesn't pass all the tests, they don't pass the interview.

- **Performance (10 points):** If the candidate's solution is not the most optimal solution, they will not receive full points. We will provide the optimal solution after the interview.

- **Readability (10 points):** This is important for the maintainability of the code. If the code is hard to read, it's hard to maintain.

- **Testing (10 points):** We expect the candidate to write tests for their solution. This is important for the maintainability of the code.

### Rubric

These are the guidelines for grading the interview and should be considered a sliding scale. The candidate should receive partial credit if they are close to the next level.

#### Problem Solving

Given that the algorithm and character set are provided, the candidate should be able to solve the problem and clearly explain their reasoning for the solution they chose.

- **(10 points)** - The candidate is able to solve the problem and clearly explain their reasoning for the solution they chose.
- **(5 points)** - The candidate is able to solve the problem, but struggles to explain their reasoning for the solution they chose. OR The candidate is unable to solve the problem, but is able to explain their reasoning for the solution they chose.
- **(0 points)** - The candidate does not solve the problem or is unable to explain their reasoning for the solution they chose.

#### Correctness

The candidate's solution should work on (virtually) any input provided.

- **(10 points)** - The candidate's solution passes all input tests.
- **(5 points)** - The candidate's solution passes most input tests (1-2 edge cases not covered).
- **(0 points)** - The candidate's solution does not pass most input tests.

#### Performance

The candidate's solution should be _good enough for production_.

- **(10 points)** - The candidate's solution is the most optimal solution or good enough to ship in your current codebase.
- **(5 points)** - The candidate's solution is not the most optimal solution, but is good enough to ship in your current codebase. OR The candidate's solution is the most optimal solution, but is not good enough to ship in your current codebase due to readability.
- **(0 points)** - The candidate's solution is not the most optimal solution and is not good enough to ship in your current codebase.

#### Readability

The candidate's solution should be easy to read and maintain. This does not mean that the candidate documents every line of code, but that the code is easy to understand/self-documenting.

- **(10 points)** - The candidate's solution is easy to read and understand. You would approve this PR without any changes.
- **(5 points)** - The candidate's solution is mostly-easy to read and understand. You would approve this PR with some changes.
- **(0 points)** - The candidate's solution is not easy to read or understand. You would not approve this PR without significant changes.

#### Testing

The candidate's solution should have tests that cover most edge cases. Either through a testing framework or through manual testing.

- **(10 points)** - The candidate's implements a testing suite and covers all happy path cases and edge-cases.
- **(5 points)** - The candidate implements a testing suite, but does not cover all happy path cases and edge-cases OR the candidate does not implement a testing suite, but covers all happy path cases and edge-cases through manual testing.
- **(0 points)** - The candidate does not implement a testing suite or perform manual testing.

### Level Scale

We use a level scale to help us understand where the candidate is in their career. This is a sliding scale and should be considered a range and adapted to your company's expectations.

- **L1:** 0-20 points
- **L2:** 21-35 points
- **L3:** 45+ points

This problem is considered to be on the easier side so if the candidate is unable to solve it, they are likely not at the level you are looking for.
