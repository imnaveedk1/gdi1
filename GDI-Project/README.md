# Data Governance Framework Web Portal

An interactive web portal for a Data Governance Framework with a visualized workflow and detailed step information.

## Features

- Interactive workflow visualization for data governance processes
- Detailed step information with interactive components
- Irish flag-inspired color scheme (green, white, and orange)
- Comment/feedback system for each workflow step
- PostgreSQL database integration

## Technology Stack

- **Frontend**: React, TailwindCSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: React Context API, TanStack Query

## Deployment Instructions for Render

1. **Push to GitHub**
   - Push this project to a GitHub repository

2. **Connect to Render**
   - Sign up or log in to [Render](https://render.com/)
   - Go to the Dashboard and select "New +"
   - Choose "Web Service" from the dropdown menu
   - Connect your GitHub repository

3. **Configure Deployment Settings**
   - Name: Choose a name for your service
   - Root Directory: Leave empty (use the root directory)
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Select the branch to deploy (usually `main` or `master`)

4. **Set Environment Variables**
   - Add the following environment variable:
     - `NODE_ENV`: `production`

5. **Configure Database**
   - In the Render dashboard, go to "New +" again
   - Select "PostgreSQL" to create a new PostgreSQL database
   - Choose an appropriate name and plan
   - Once created, copy the "Internal Database URL"
   - Go back to your web service settings
   - Add a new environment variable:
     - `DATABASE_URL`: Paste the Internal Database URL from the previous step

6. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

7. **Migrate Database Schema**
   - After deployment, you may need to run migrations
   - You can do this by adding a "Build Command" to the web service:
     - `npm install && npm run build && npm run db:push`

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file
4. Run the development server: `npm run dev`

## License

MIT