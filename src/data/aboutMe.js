

const profile = 
    {
        info :{
            Name: "Jasjot Singh",
            Linkedin :"https://www.linkedin.com/in/jasjot-singh-08238466/",
            Github: "https://github.com/JasjotSingh",
            Description: "Hi , My name is Jasjot Singh, i am a Software Engineer. I am aspiring to be a fullstack and distributed systems expert",
            Location: "Bay Area, CA",
            Love : "Coding, Gamming, Pizza"
        },
        education :{
            Time :"Aug 2013 - July 2015",
            Degree : "Masters of Science Computer Science",
            School : "Boston University",
            Location : "Boston, MA"
            
        },
        exp: [
            {
                Name: "Cadence Design System",
                Location:"San Jose, CA",
                Time: "(June 2015 - December 2019)",
                Position: "Software Engineer 2",
                Responsibility: 
                    [
                        "Responsible for learning, developing and debugging complex EDA (Electronic Design Automation) software and products for the Core R&D team (Back end and Database data structure)",
                        "Working as the Lead developer for the back-end and Database for Symphony (new multiuser EDA software) contributed to the growth of the company and customer-base",
                        "With a get-it-done attitude and hard work got complex and more functionality in before deadline for Symphony, thus increasing the customers for the product",
                        "Contribute software engineering expertise in the development of multiuser product through the SDLC, from gathering customer requirements definition to designing, developing, debugging and testing",
                        "Develop and debug Allegro (pre-existing complex EDA software), in order to insure high quality product for the customers",
                        "Use JIRA in project tracking and estimation processes during the software development lifecycle ",
                        "Work both independently and with a cross-functional geographically diverse team",
                        "Handling Customer requirements and issues to provide quality product to customers"
                    ]
            },
            {
                Name: "Boston University",
                Location:"Boston, Ma",
                Time: "(September 2014 – March 2015)",
                Position: "Software Programmer",
                Responsibility: 
                    [
                       "Worked as a Database developer on Blackbaud CRM application for Boston University Department of Alumni relation.",
                       "Analyzed the table component changes while upgrading Blackbaud to a higher version and prepared the Technical Specification document.",
                       "Applied the changes in the existing Stored Procedures and SQL functions (MSSQL Server).",
                       "Responsible for developing and unit testing the modules in order to ensure the smooth working of the system."
                    ]
            },
            {
                Name: "Gunnar Games",
                Location:"Miami, FL",
                Time: " (February 2013 – July 2013)",
                Position: "Software Developer",
                Responsibility: 
                    [
                       "Worked on Existing Android game projects as well as helped develop new projects for Big Fish Games.",
                       "Worked in a Team with other Senior Developer and GUI Designers in order to insure Development, quality and smooth working of the Modules in the projects.",
                       "Directly responsible for Design, develop, testing and debug new Android Games, with an aim to create a product with quality, fun and smooth to use."
                    ]
            }
        ],
        skill:[
                {
                    Title: "Programmig Languages",
                    List:["Java", "JavaScript", "Python", "HTML", "CSS"]
                },
                {
                    Title: "Ide's",
                    List:["Android Studio", "Eclipse", "SpringToolSet4", "IntelliJ", "VSCode"]
                },
                {
                    Title:"Tools and FrameWorks",
                    List:["Node.js", "Express.js", "React", "Embedded js", "JQuery", "Spring MVC", "Spring Boot", "Jerey ( Jax-rs )", "Maven", "Spring Netflix Eureka service registry"]
                },
                {
                    Title:"Database",
                    List:["Data Structures", "MySQL", "Mongo DB", "SQLite", "Hibernate (DB Technology)"]
                },
                {
                    Title:"Version Controll",
                    List:["Perforce", "Github"]
                }
        ],
        projects:[
            {
                ProjectNAme: "Per-Tenant Open Stack Implementation", 
                Description :"Developed an interface as a proxy between cloud service users and service providers that can apply for different kind of cloud service from different service provider according to users’ requests. Used the Open Stack Swift and Cinder APIs to implement the interface of object storage and volume storage to allow users store/retrieve their files and volumes from any provider at the same time. Led the design of the modules.",
                LanguageUsed: "Python"

            },
            {
                ProjectNAme: "EDUKid", 
                Description :"(Android application) to be used primarily on Tablet or mobile, supports a child to learn in an interactive manner with the environment, allows custom module creation, so that the parents can play an active role as to what the child learns.",
                LanguageUsed: "Java"
            }

        ]

    }
export default profile;