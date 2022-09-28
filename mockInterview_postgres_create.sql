SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
	"_id" serial NOT NULL,
  "username" varchar NOT NULL,
	"password" varchar, -- Not NOT NULL if implementing OAUTH
  CONSTRAINT "user_pk" PRIMARY KEY ("_id"),
	CONSTRAINT "username_unique" UNIQUE ("username") 
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.algorithm_questions(
	"_id" serial NOT NULL,
  "title" varchar NOT NULL,
  "prompt" varchar NOT NULL,
  CONSTRAINT "algorithm_questions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.design_questions(
	"_id" serial NOT NULL,
  "prompt" varchar NOT NULL,
  CONSTRAINT "design_questions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.behavioral_questions(
	"_id" serial NOT NULL,
  "prompt" varchar NOT NULL,
  CONSTRAINT "behavioral_questions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.users_algorithm_questions(
	"user_id" int NOT NULL,
  "algorithm_question_id" int NOT NULL,
  CONSTRAINT "users_fk" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "algorithms_fk" FOREIGN KEY ("algorithm_question_id") REFERENCES public.algorithm_questions("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.users_design_questions(
	"user_id" int NOT NULL,
  "design_question_id" int NOT NULL,
  CONSTRAINT "users_fk" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "design_questions_fk" FOREIGN KEY ("design_question_id") REFERENCES public.design_questions("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.users_behavioral_questions (
	"user_id" serial NOT NULL,
  "behavioral_question_id" int NOT NULL,
  CONSTRAINT "users_fk" FOREIGN KEY ("user_id") REFERENCES public.users("_id"),
  CONSTRAINT "behavioral_questions_fk" FOREIGN KEY ("behavioral_question_id") REFERENCES public.behavioral_questions("_id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.behavioral_questions ("prompt") VALUES ('Tell me about yourself.');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('Where do you see yourself in 6 months?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('Describe your dream team, best working environment.');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('What is your current or most recent place of employment?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('What is your most recent job title?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('How do you like working with others?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('What are you looking for in terms of compensation?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('If you were a manager how would you establish trust between engineers?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('How would you ask questions/help other engineers if you are stuck on a problem?');
INSERT INTO public.behavioral_questions ("prompt") VALUES ('What would you do if you feel uncomfortable working with your team?');

INSERT INTO public.algorithm_questions ("title", "prompt") VALUES ('Two Sum', 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.');

INSERT INTO public.algorithm_questions  ("title", "prompt") VALUES ('Add Two Numbers', 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.');

INSERT INTO public.algorithm_questions  ("title", "prompt") VALUES ('Longest Substring Without Repeating Characters', 'Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.');

INSERT INTO public.algorithm_questions  ("title", "prompt") VALUES ('Median of Two Sorted Arrays', 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106');

INSERT INTO public.algorithm_questions  ("title", "prompt") VALUES ('Longest Palindromic Substring', 'Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.');

INSERT INTO public.algorithm_questions ("title", "prompt") VALUES ('Zigzag Conversion', 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), , and .
1 <= numRows <= 1000');

INSERT INTO public.algorithm_questions ("title", "prompt") VALUES ('Reverse Integer', 'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1');

INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Twitter?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Instagram?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Amazon.com?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Netflix?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design TikTok?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design a web crawler?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Dropbox?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design a URL shortening service?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Facebook Messenger?');
INSERT INTO public.design_questions ("prompt") VALUES ('How would you design Yelp?');

