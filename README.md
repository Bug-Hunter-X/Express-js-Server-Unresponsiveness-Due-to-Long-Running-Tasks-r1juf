# Express.js Server Unresponsiveness

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive due to long-running tasks or unhandled exceptions within request handlers.  The example showcases a simple scenario where a 5-second delay is introduced, simulating a time-consuming operation.

## Problem
The provided `server.js` demonstrates a scenario where the Express.js server hangs for 5 seconds before sending a response. In a production environment, a long delay can cause timeouts or lead to unresponsive behavior.

## Solution
The `server-solution.js` provides a solution illustrating how to handle long-running operations asynchronously using promises or async/await to prevent blocking the event loop and ensuring server responsiveness.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the directory containing `server.js`.
3. Run `node server.js`.
4. Make a request to `http://localhost:3000/`. Observe the delay before the response is returned.

## How to run the solution
1. Navigate to the directory containing `server-solution.js`.
2. Run `node server-solution.js`.
3. Make a request to `http://localhost:3000/`. The response is sent immediately.
