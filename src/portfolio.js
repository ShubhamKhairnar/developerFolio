/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shubham Khairnar",
  title: "Hi all, I'm Shubham",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 having an experience of automating deployments with Jenkins / Docker / Kubernetes / Cloud and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tw1S4dybHkBIGVPCpY2DfLPwCuLyeuDH/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShubhamKhairnar",
  linkedin: "https://www.linkedin.com/in/shubham-khairnar-091996/",
  gmail: "shubhamkhairnar123@gmail.com",
  facebook: "https://www.facebook.com/shubham.khairnar3",
  medium: "https://medium.com/@shubhamkhairnar",
  instagram: "https://www.instagram.com/i_m_shk__",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly effective CI / CD pipelines for your applications"
    ),
    emoji("⚡ Manage and secure cloud activities"),
    emoji(
      "⚡ Containerisation and orchestration of applications "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-autoprefixer"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-male"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "prometheus",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "python scripting",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "bash scripting",
      fontAwesomeClassname: "fas fa-scroll"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/college.png"),
      subHeader: "Bachelor of Engineering in Computers",
      duration: "June 2014 - May 2018",
      desc:
        "Ranked 2nd in the college. Took courses about Software Engineering, Web Security, Operating Systems, machine learning",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD",
      progressPercentage: "80%"
    },
    {
      Stack: "Containerization & Kubernetes deployments",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "CitiusTech",
      companylogo: require("./assets/images/ct-logo.png"),
      date: "July 2018 – April 2021",
      desc:
        "CitiusTech works at the edge of digital transformation. It focuses on multiple areas of digital technology, such as Business Intelligence, mobility & IoT, Big Data, Cloud Computing, Predictive Analytics & Data Science..",
      descBullets: [
        "Worked as DevOps Engineer and developed continuous integration and deployment pipeline",
        "Implemented Prometheus-Grafana Implementation Single Handedly"
      ]
    },
    {
      role: "Senior Executive",
      company: "Shaadi.com",
      companylogo: require("./assets/images/shaadi.png"),
      date: "April 2021 – Present",
      desc:
        "Shaadi.com is an online wedding service which has become the world's leading matrimonial website for Asians and have more than twenty million users"
      descBullets: [
        "Working as DevOps Engineer and responsible for continuous integration and deployment pipeline",
        "Involved in automation of activities over the cloud"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ShubhamKhairnar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS I WAS PART OF TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/danaher-logo.png"),
      projectName: "MLOps",
      projectDesc: " A subset of ModelOps is a practice for collaboration and communication between data scientists and operations professionals to help manage production ML lifecycle.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.danaher.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ct-logo.png"),
      projectName: "Core Resource Monitoring Dashboard (CRDe)",
      projectDesc: "CRDe enables project teams to monitor key metrics spread across application, infrastructure, network etc. in real time and invoke custom alerts in case any metric threshold is breached.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.citiustech.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "This demonstrates proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline.",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/12whFiO4TXVtcQ9_vhVHBVn8AVJhFTHyw/view"
        },
        {
          name: "Medium Blog",
          url:
            "https://shubhamkhairnar.medium.com/how-to-pass-aws-certified-developer-associate-exam-3b2f41244379"
        }
      ]
    },
    {
      title: "Smart India Hackathon 2020 - Mentor",
      subtitle:
        "It is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives.",
      image: require("./assets/images/SIH.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://micds.aicte-india.org/cert-module/templates/mentors/mentor_certificate_generator.php?email=shubhamkhairnar123@gmail.com%20&&mid=2"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://shubhamkhairnar.medium.com/dependabot-keep-your-dependencies-up-to-date-ec4699e63486",
      title: "Dependabot - keep your dependencies up to date",
      description:
        "To keep the software you build secure, keeping your dependency packages up-to-date is the easiest way. keeping your dependencies regularly updated , it’s a tedious task."
    },
    {
      url: "https://shubhamkhairnar.medium.com/data-at-rest-encryption-in-mysql-a8abd3a864de",
      title: "Data-at-Rest encryption in MySQL",
      description:
        "The encryption of data at rest should only include strong encryption methods such as AES or RSA. Encrypted data should remain encrypted when access controls such as usernames and password fail. Increasing encryption on multiple levels is recommended."
    },
    {
      url: "https://shubhamkhairnar.medium.com/cloudcraft-create-your-infrastructure-in-a-snap-339980375baa",
      title: "Cloudcraft: create your infrastructure in a snap",
      description:
        "Create a professional architecture diagram in minutes with the Cloudcraft visual designer, optimized for AWS with smart components."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9764342364",
  email_address: "shubhamkhairnar123@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
