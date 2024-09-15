# API Testing Guide

This guide provides instructions on how to test the API endpoints for the Quiz and Question services using Postman and cURL.

## Prerequisites

- Ensure the server is running on `http://localhost:3000`.
- Install Postman or have cURL available in your terminal.

## Table of Contents

1. [Testing with Postman](#testing-with-postman)
   - [Get All Quizzes](#get-all-quizzes)
   - [Get Quiz by ID](#get-quiz-by-id)
   - [Create a Quiz](#create-a-quiz)
   - [Update a Quiz](#update-a-quiz)
   - [Delete a Quiz](#delete-a-quiz)
   - [Get All Questions](#get-all-questions)
   - [Get Question by ID](#get-question-by-id)
   - [Create a Question](#create-a-question)
   - [Update a Question](#update-a-question)
   - [Delete a Question](#delete-a-question)
2. [Testing with cURL](#testing-with-curl)
   - [Get All Quizzes](#get-all-quizzes-curl)
   - [Get Quiz by ID](#get-quiz-by-id-curl)
   - [Create a Quiz](#create-a-quiz-curl)
   - [Update a Quiz](#update-a-quiz-curl)
   - [Delete a Quiz](#delete-a-quiz-curl)
   - [Get All Questions](#get-all-questions-curl)
   - [Get Question by ID](#get-question-by-id-curl)
   - [Create a Question](#create-a-question-curl)
   - [Update a Question](#update-a-question-curl)
   - [Delete a Question](#delete-a-question-curl)

## Testing with Postman

### Get All Quizzes

1. Open Postman.
2. Create a new GET request.
3. Set the URL to `http://localhost:3000/quizzes`.
4. Click "Send".

### Get Quiz by ID

1. Open Postman.
2. Create a new GET request.
3. Set the URL to `http://localhost:3000/quizzes/{quizId}`.
4. Replace `{quizId}` with the actual quiz ID.
5. Click "Send".

### Create a Quiz

1. Open Postman.
2. Create a new POST request.
3. Set the URL to `http://localhost:3000/quizzes`.
4. Go to the "Body" tab and select "raw" and "JSON".
5. Enter the following JSON:
   ```json
   {
     "title": "New Quiz",
     "description": "A new quiz description",
     "questions": ["questionId1", "questionId2"]
   }
   ```
6. Click "Send".

### Update a Quiz

1. Open Postman.
2. Create a new PUT request.
3. Set the URL to `http://localhost:3000/quizzes/{quizId}`.
4. Replace `{quizId}` with the actual quiz ID.
5. Go to the "Body" tab and select "raw" and "JSON".
6. Enter the following JSON:
   ```json
   {
     "title": "Updated Quiz Title",
     "description": "Updated quiz description"
   }
   ```
7. Click "Send".

### Delete a Quiz

1. Open Postman.
2. Create a new DELETE request.
3. Set the URL to `http://localhost:3000/quizzes/{quizId}`.
4. Replace `{quizId}` with the actual quiz ID.
5. Click "Send".

### Get All Questions

1. Open Postman.
2. Create a new GET request.
3. Set the URL to `http://localhost:3000/questions`.
4. Click "Send".

### Get Question by ID

1. Open Postman.
2. Create a new GET request.
3. Set the URL to `http://localhost:3000/questions/{questionId}`.
4. Replace `{questionId}` with the actual question ID.
5. Click "Send".

### Create a Question

1. Open Postman.
2. Create a new POST request.
3. Set the URL to `http://localhost:3000/questions`.
4. Go to the "Body" tab and select "raw" and "JSON".
5. Enter the following JSON:
   ```json
   {
     "text": "What is the capital of France?",
     "options": ["Paris", "London", "Berlin", "Madrid"],
     "keywords": ["capital", "France"],
     "correctAnswerIndex": 0
   }
   ```
6. Click "Send".

### Update a Question

1. Open Postman.
2. Create a new PUT request.
3. Set the URL to `http://localhost:3000/questions/{questionId}`.
4. Replace `{questionId}` with the actual question ID.
5. Go to the "Body" tab and select "raw" and "JSON".
6. Enter the following JSON:
   ```json
   {
     "text": "Updated question text",
     "options": ["Option1", "Option2", "Option3", "Option4"],
     "keywords": ["updated", "question"],
     "correctAnswerIndex": 1
   }
   ```
7. Click "Send".

### Delete a Question

1. Open Postman.
2. Create a new DELETE request.
3. Set the URL to `http://localhost:3000/questions/{questionId}`.
4. Replace `{questionId}` with the actual question ID.
5. Click "Send".

## Testing with cURL

### Get All Quizzes (cURL)

```sh
curl -X GET http://localhost:3000/quizzes
```
