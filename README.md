# Portfolio

This is a personal portfolio website built using React and deployed using GitHub Pages. 
## Live Demo

You can view the live version of the portfolio [here](https://rounakraj.in).

## Features

- Responsive design for mobile and desktop
- Interactive sections for projects and skills
- Hosted on GitHub Pages for easy access
- Configurable sections for customization via JSON settings

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm are installed on your machine. You can download them [here](https://nodejs.org/).

## Getting Started

To clone and run this application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rounakraj8/portfolio.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd portfolio/website
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Configuration

You can customize the sections displayed on your portfolio by modifying the `website-setting.json` and `resume.json` files in the project.

### Enable or Disable Sections

1. **Locate the `website-setting.json` file:**

   The file is located in `website/src/website-setting.json`.

2. **Modify section visibility:**

   This file contains settings that control the visibility of various sections on your website. For example:

   ```json
   {
     "landingPageEnabled": true,
     "resumeEnabled": true,
     "resume": {
       "headerEnabled": true,
       "contactEnabled": true,
       "workExperienceEnabled": true,
       "projectsEnabled": true,
       "educationEnabled": true,
       "skillsEnabled": true,
       "languagesEnabled": true,
       "interestsEnabled": true
     }
   }
   ```

   - Set a value to `true` to enable a section or `false` to disable it.
   - For example, if you want to hide the `workExperience` section, set `"workExperienceEnabled"` to `false`.

3. **Locate the `resume.json` file:**

   The file is located in `website/src/assets/data/resume.json`.

4. **Modify personal and professional information:**

   This file contains your personal information, work experience, education, skills, and projects. You can customize it to reflect your own details:

    <details>
    
   ```json
   {
     "name": "Rounak Raj",
     "profession": "Software Engineer",
     "contact": {
       "mobileNo": "+91-8290689625",
       "emailId": "rounakraj8@gmail.com",
       "website": "https://rounakraj.in",
       "country": "India",
       "gitHub": "https://github.com/rounakraj8",
       "linkedInUrl": "https://www.linkedin.com/in/rounakraj/"
     },
     "education": [
       {
         "institutionName": "Amity University",
         "institutionLocation": "Jaipur",
         "fromYear": "2011",
         "toYear": "2015",
         "course": "B.Tech",
         "specialization": "CS&E"
       }
     ],
     "skills": [
       "Java",
       "Python",
       "AWS",
       "Docker",
       "Microservices",
       "Distributed Systems",
       "Apache Kafka",
       "Apache Airflow",
       "Redis"
     ],
     "technicalInterests": [
       "Distributed Systems",
       "Backend",
       "Data Platform"
     ],
     "languages": [
       {
         "name": "English",
         "fluency": "Professional"
       },
       {
         "name": "Hindi",
         "fluency": "Native"
       }
     ],
     "summary": "I'm a Software Engineer specializing in back-end development with Java and Spring Boot...",
     "workExperiences": [
       {
         "designation": "Senior Software Engineer 2",
         "company": "Sophos",
         "fromTimePeriod": "Jan 2021",
         "toTimePeriod": "Present",
         "jobSummary": [
           "Worked on data ingestion services...",
           "Contributed in creating a batch processing framework..."
         ]
       },
       {
         "designation": "Senior Development Engineer",
         "company": "Pramati",
         "fromTimePeriod": "Jul 2017",
         "toTimePeriod": "Dec 2020",
         "jobSummary": [
           "Led the design and development of scalable applications...",
           "Mentored team members..."
         ]
       }
     ],
     "projects": [
       {
         "name": "Central Data Platform",
         "organization": "Sophos",
         "summary": "As part of the Data platform team...",
         "skills": [
           "Java",
           "Spring Boot",
           "Apache Airflow",
           "Apache Kafka",
           "AWS"
         ]
       }
     ]
   }
   ```
    </details>
5. **Save changes:**

   After modifying the settings, save the changes. The development server will automatically reload to reflect the updates.

## Deployment

This project uses `gh-pages` to deploy to GitHub Pages. To deploy your own version, follow these steps:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

   This will automatically push the `build` folder to the `gh-pages` branch and update the live site.

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.