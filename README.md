# Fight Ranking API

## Overview
This API manages fight results, fighter rankings, and event details. Users can create fighters, record fight outcomes, and update rankings accordingly.

## Features
- Create, retrieve, update, and delete fighters.
- Record fight results and update fighter rankings.
- Manage events and fight history.

## Tech Stack
- **Backend:** Node.js / Express (or Django if using Python)
- **Database:** PostgreSQL
- **ORM:** Sequelize / Prisma (if using Node.js)
- **Authentication:** JWT (if required)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/fight-ranking-api.git
   cd fight-ranking-api
   ```
2. Install dependencies:
   ```sh
   npm install  # for Node.js
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Edit `.env` and add database connection details.
4. Run database migrations:
   ```sh
   npx sequelize-cli db:migrate  # for Sequelize
   ```
5. Start the server:
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:3000`.

## API Endpoints

### Fighters
- **Create Fighter:**
  ```http
  POST /api/fighters
  ```
  ```json
  {
    "name": "John Doe",
    "ranking": 1200
  }
  ```
- **Get Fighter by ID:**
  ```http
  GET /api/fighters/{id}
  ```

### Events
- **Create Event:**
  ```http
  POST /api/events
  ```
  ```json
  {
    "name": "UFC 300",
    "date": "2025-06-10"
  }
  ```
- **Get Event by ID:**
  ```http
  GET /api/events/{id}
  ```

### Fights
- **Record Fight Result:**
  ```http
  POST /api/fights
  ```
  ```json
  {
    "fighter1Id": 1,
    "fighter2Id": 2,
    "eventId": 1,
    "result": "fighter1",
    "winType": "KO"
  }
  ```
- **Error Handling:** If a fighter or event does not exist, the API will return:
  ```json
  { "error": "One or both fighters do not exist." }
  ```

## Ranking System
The ranking system follows the Elo algorithm:
- Fighters gain/lose points based on the opponent’s ranking.
- A higher-ranked fighter losing results in a bigger point deduction.

## Contribution
1. Fork the repository.
2. Create a new branch.
3. Commit changes and push to your branch.
4. Open a pull request.

## License
This project is licensed under the MIT License.

