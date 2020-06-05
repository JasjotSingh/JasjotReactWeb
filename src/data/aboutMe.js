

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
                id: 1,
                Name: "Cadence Design System",
                Location:"San Jose, CA",
                Time: "(June 2015 - December 2019)",
                Position: "Software Engineer 2",
                Responsibility: 
                    [
                        {
                            id: 1,
                            item: "Responsible for learning, developing and debugging complex EDA (Electronic Design Automation) software and products for the Core R&D team (Back end and Database data structure)"
                        },
                        {
                            id:2,
                            item: "Working as the Lead developer for the back-end and Database for Symphony (new multiuser EDA software) contributed to the growth of the company and customer-base",
                        },
                        {
                            id:3,
                            item: "With a get-it-done attitude and hard work got complex and more functionality in before deadline for Symphony, thus increasing the customers for the product",
                        },
                        {
                            id:4,
                            item:"Contribute software engineering expertise in the development of multiuser product through the SDLC, from gathering customer requirements definition to designing, developing, debugging and testing",
                        
                        },
                        {
                            id:5,
                            item:"Develop and debug Allegro (pre-existing complex EDA software), in order to insure high quality product for the customers",
                        
                        },
                        {
                            id:6,
                            item: "Use JIRA in project tracking and estimation processes during the software development lifecycle ",
                        
                        },
                        {
                            id:7,
                            item:"Work both independently and with a cross-functional geographically diverse team",
                        },
                        {
                            id:8,
                            item:"Handling Customer requirements and issues to provide quality product to customers",
                        }
                    ]
            },
            {
                id: 2,
                Name: "Boston University",
                Location:"Boston, Ma",
                Time: "(September 2014 – March 2015)",
                Position: "Software Programmer",
                Responsibility: 
                    [
                        {
                            id:1,
                            item: "Worked as a Database developer on Blackbaud CRM application for Boston University Department of Alumni relation.",
                       
                        },
                        {
                            id:2,
                            item:"Analyzed the table component changes while upgrading Blackbaud to a higher version and prepared the Technical Specification document.",
                       
                        },
                        {
                            id:3,
                            item: "Applied the changes in the existing Stored Procedures and SQL functions (MSSQL Server).",
                       
                        },
                        {
                            id:4,
                            item:"Responsible for developing and unit testing the modules in order to ensure the smooth working of the system."
                    
                        }
                    ]
            },
            {
                id: 3,
                Name: "Gunnar Games",
                Location:"Miami, FL",
                Time: " (February 2013 – July 2013)",
                Position: "Software Developer",
                Responsibility: 
                    [
                        {
                            id:1,
                            item:"Worked on Existing Android game projects as well as helped develop new projects for Big Fish Games.",
                       
                        },
                        {
                            id:2,
                            item:"Worked in a Team with other Senior Developer and GUI Designers in order to insure Development, quality and smooth working of the Modules in the projects.",
                       
                        },
                        {
                            id:3,
                            item:"Directly responsible for Design, develop, testing and debug new Android Games, with an aim to create a product with quality, fun and smooth to use."
                  
                        }
                    ]
            }
        ],
        skill:[
                {
                    id:1,
                    Title: "Programmig Languages",
                    List:[
                        {id:1, item:"Java"}, 
                        {id:2,item:"JavaScript"}, 
                        {id:3,item:"Python"}, 
                        {id:4, item:"HTML"}, 
                        {id:5,item:"CSS"}
                    ]
                },
                {
                    id:2,
                    Title: "IDE's",
                    List:[
                        {id:1,item:"Android Studio"}, 
                        {id:2,item:"Eclipse"}, 
                        {id:3,item:"SpringToolSet4"}, 
                        {id:4, item:"IntelliJ"}, 
                        {id:5,item:"VSCode"}
                    ]
                },
                {
                    id:3,
                    Title:"Tools and FrameWorks",
                    List:[
                        {id:1,item:"Node.js"}, 
                        {id:2,item:"Express.js"}, 
                        {id:3,item:"React"}, 
                        {id:4,item: "Embedded js"}, 
                        {id:5,item:"JQuery"}, 
                        {id:6,item:"Spring MVC"}, 
                        {id:7, item:"Spring Boot"}, 
                        {id:8, item:"Jerey ( Jax-rs )"}, 
                        {id:9, item:"Maven"}, 
                        {id:10,item:"Spring Netflix Eureka service registry"}
                    ]
                },
                {
                    id:4,
                    Title:"Database",
                    List:[
                        {id:1,item:"Data Structures"}, 
                        {id:2,item:"MySQL"}, 
                        {id:3,item:"Mongo DB"}, 
                        {id:4, item:"SQLite"}, 
                        {id:5,item:"Hibernate (DB Technology)"}
                    ]
                },
                {
                    id:5,
                    Title:"Version Controll",
                    List:[
                        {id:1,item:"Perforce"}, 
                        {id:2,item:"Github"}
                    ]
                }
        ],
        projects:[
            {
                id:1,
                ProjectName: "Per-Tenant Open Stack Implementation", 
                Description :"Developed an interface as a proxy between cloud service users and service providers that can apply for different kind of cloud service from different service provider according to users’ requests. Used the Open Stack Swift and Cinder APIs to implement the interface of object storage and volume storage to allow users store/retrieve their files and volumes from any provider at the same time. Led the design of the modules.",
                LanguageUsed: "Python",
                link:""

            },
            {
                id:2,
                ProjectName: "EDUKid", 
                Description :"(Android application) to be used primarily on Tablet or mobile, supports a child to learn in an interactive manner with the environment, allows custom module creation, so that the parents can play an active role as to what the child learns.",
                LanguageUsed: "Java",
                link:""
            },
            {
                id:3,
                ProjectName: "Secrets Web Project", 
                Description : "Built a web app using Express js, Node js, ejs (for rendering HTML) and Mongoose for ODM with mongo db. Clients can sign up/ sign in on web site and start sharing their secrets online anomalously. Authentication is done using passport.js, which uses hashing and salting techniques. Also the secrets that are shared are kept in separate collections in mongodb, so that secrets cannot be traced back to the user. Hosted on cloud Heroku Cloud Application Platform.",
                LanguageUsed: "JavaSCript",
                link:""
            }

        ]

    }
export default profile;