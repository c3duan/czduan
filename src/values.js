import { Home, About, Work, Contact } from './pages';

export const PAGES = [
  { text: "Home", path: "/", Component: Home },
  { text: "About", path: "/about", Component: About },
  { text: "Resume", path: "/work", Component: Work },
  { text: "Contact", path: "/contact", Component: Contact }
];

export const INFO = {
  Facebook: { icon: "faFacebook", link: "https://www.facebook.com/arnold.duan.1", alt: "Link to Chengzhu Duan's Facebook" },
  Linkedin: { icon: "faLinkedin", link: "https://www.linkedin.com/in/chengzhu-duan/", alt: "Link to Chengzhu Duan's LinkedIn" },
  Github: { icon: "faGithub", link: "https://github.com/c3duan", alt: "Link to Chengzhu Duan's GitHub" },
  Email: { link: "mailto:chengzhu.duan@gmail.com", text: "chengzhu.duan@gmail.com", alt: "Link to send an email to Chengzhu Duan" }
}

export const TRANSITION_DELAY = 500;

export const WORK = [
  {
    title: "Skills",
    data: [
      {
        header: "Languages",
        body: [
          "Golang",
          "Python",
          "Javascript/Typescript",
          "Java",
          "Ruby",
          "C",
          "C++",
        ]
      },
      {
        header: "DBMS",
        body: [
          "MySQL",
          "PostgreSQL",
          "SQLite",
          "MongoDB + Mongoose",
          "AWS DynamoDB",
          "Firebase",
        ]
      },
      {
        header: "Front-end",
        body: [
          "ReactJS",
          "Angular 2",
          "Rest Hooks",
          "SWR",
          "GraphQL",
          "Styled Components",
          "HTML5/CSS3"
        ]
      },
      {
        header: "Back-end",
        body: [
          "gRPC",
          "Ruby on Rails",
          "NodeJS with Express",
          "Spring Boot",
          "Django",
          "Flask",
          "AWS S3",
          "AWS Amplify",
          "Kafka",
          "Docker"
        ]
      },
      {
        header: "Mobile",
        body: [
          "React Native",
          "Android"
        ]
      },
      {
        header: "Machine Learning",
        body: [
          "Pytorch",
          "Numpy",
          "Pandas",
          "Scikit-Learn"
        ]
      },
      {
        header: "Others",
        body: [
          "Git",
          "Bash/Zsh",
          "CI/CD",
          "Unix/Linux",
        ]
      },
    ]
  },
  {
    title: "Education",
    data: [
      {
        header: "University of California, San Diego",
        subheader: "September 2017 - March 2021,  La Jolla|USA",
        body: "Bachelor of Science in Computer Science, Cum Laude"
      },
      {
        header: "Saint Joseph's Preparatory School",
        subheader: "September 2013 - June 2017,  Philadelphia|USA",
        body: "High School Diploma, National Honor Society, Magna Cum Laude"
      }
    ]
  },
  {
    title: "Experience",
    data: [
      {
        header: "Triton Software Engineering",
        sideheader: "Project Developer",
        date: "4/3/2018",
        subheader: "April 2018 - September 2019,  La Jolla|USA",
        body: "Worked in a team of 4 developers to provide pro-bono software services for local non-profit organizations.",
        href: "https://tse.ucsd.edu/"
      },
      {
        header: "Julian McAuley Lab",
        sideheader: "Early Research Scholar",
        date: "9/27/2018",
        subheader: "September 2018 - June 2019,  La Jolla|USA",
        body: [
          "Achieved 93% accuracy on predicting whether users will play purchased video games with Bayesian Personalized Ranking",
          "Utilized Scipy and Scikit-Learn to apply popular visualization and data-processing practices (e.g. t-SNE) on huge real world data and build custom machine learning pipeline (e.g. BPR with a sigmoid activation function)",
          "Optimized the model training with stochastic gradient descent through map-reduce and negative sampling"
        ],
        href: "https://github.com/c3duan/Steam-Engagement-Predictor"
      },
      {
        header: "Voyager Space Technologies",
        sideheader: "Software Engineer Intern",
        date: "1/7/2019",
        subheader: "January 2019 - April 2019,  La Jolla|USA",
        body: [
          "Avoided excessive database queries by implementing pre-fetching cache with Django Serializer to reduce 80% load time",
          "Built a custom app loading module with Angular to ensure browser compatibility and compile the appropriate CSS",
          "Streamlined an efficient satellite design process for 300+ aerospace engineers by conducting robust backend and frontend tests with Django testing framework and Jasmine/Karma"
        ]
      },
      {
        header: "Omniscience Corporation",
        sideheader: "Software Engineer Intern",
        date: "7/1/2019",
        subheader: "July 2019 - September 2019,  Palo Alto|USA",
        body: [
          "Expedited image resizing and uploading to S3 bucket by using Thumbnailator to reduce 30% thumbnail load time",
          "Constructed a scalable RESTful Flask app with Swagger Codegen and SQLAlchemy for reliable underwriting automation",
          "Designed an enterprise software user interface with Angular and Clarity to support customizable document note-taking",
          "Implemented document uploading, sharing, editing, and labeling across multiple online platforms with Angular, Spring Boot, and AWS S3 for thousands of underwriters from large insurance companies (e.g. RGA Insurance, AIA Group)"
        ],
        href: "https://omniscience.com/"
      },
      {
        header: "Triton Software Engineering",
        sideheader: "Project Manager",
        date: "9/27/2019",
        subheader: "September 2019 - Present,  La Jolla|USA",
        body: "Worked in a team of 4 developer to provide pro-bono software services for local non-profit organizations.",
        href: "https://tse.ucsd.edu/"
      },
      {
        header: "Coinbase",
        sideheader: "Software Engineer Intern",
        date: "6/15/2020",
        subheader: "June 2020 - September 2020, San Francisco|USA",
        body: [
          "Streamlined an in-app invoice workflow for Coinbase Custody that will save finance and operation team 40 hours of phone call per week, claim back $350K unpaid invoice, and provide 800+ Custody Organizations with timely invoices",
          "Built scalable backend automatic billing service, invoice service and email notification service with Ruby on Rails",
          "Ensured fast UI load time with proper frontend caching through Rest Hooks and SWR",
          "Automatized Custody invoice PDF generation and storage in AWS S3 with the use of Rails ERB template and Puppeteer"
        ],
        href: "https://www.coinbase.com/"
      },
      {
        header: "Coinbase",
        sideheader: "Software Engineer",
        date: "4/12/2021",
        subheader: "April 2021 - Present, San Francisco|USA",
        body: [
          "Integrated third party exchange APIs to increase liquidity options for institutional clients using Coinbase Prime, generated $87B+ in total trading volume",
          "Built scalable and fault-tolerant services to reliably place, track, and recover 10K+ orders per second with data sharding and failover redundancy",
          "Designed and scaled the market data service to deliver high fidelity price book for 500+ products within 30ms of latency",
          "Scoped and implemented reusable and extensible framework for novel work to increase developer productivity and code maintainability"
        ],
        href: "https://www.coinbase.com/"
      }
    ]
  },
  {
    title: "Projects",
    data: [
      {
        header: "Swag-Bot",
        sideheader: "Creator",
        date: "7/20/2018",
        subheader: "July 2019 - September 2019",
        body: [
          "Established a point/coin system for 15 Discord servers with 500+ users by combining usages of both MySQL and MongoDB",
          "Created 77 commands capable of manipulating texts and images and visualizing data and statistics through third-party APIs",
          "Designed a Music Task Scheduler on top of Discord’s audio stream in voice channels with YouTube API and Node.js",
          "Implemented an Anti-Spam Filter to prohibit members from spanning, cursing, and other inappropriate conducts in channels"
        ],
        href: "https://github.com/c3duan/Swag-Bot"
      },
      {
        header: "Personal Website V1",
        sideheader: "Creator",
        date: "8/23/2018",
        subheader: "August 2018 - September 2018",
        body: "Personal websites are created to consolidate and demonstrate my skills and growth. This is created using jQuery, Gulp, and SASS.",
        href: "https://c3duan.github.io"
      },
      {
        header: "Mental Wellness Mobile App",
        sideheader: "Project Developer",
        date: "2/24/2019",
        subheader: "February 2019 - June 2019,  Triton Software Engineering",
        body: "A mobile application that gamifies the development of good habits for mental health on iOS and Android. Helped create navigation, user profile, and garden page with React Native and Expo",
        href: "https://github.com/TritonSE/Expo-IHCWellness"
      },
      {
        header: "Celebrity Face Classifier",
        sideheader: "Developer",
        date: "10/25/2019",
        subheader: "October 2019 - November 2019",
        body: [
          "Optimized custom CNN architecture performance with Xavier Initialization, Batch Normalization,and K-Fold Cross-Validation to increase Balanced Classification Rate by 15%",
          "Performed Transfer Learning on ResNet18 which outperformed baseline model by 20% and significantly reduced training time",
          "Incorporated Data Augmentation into the pipeline to avoid over-fitting and achieve translational and rotational invariance"
        ]
      },
      {
        header: "UniLink Share",
        sideheader: "Mobile Developer",
        date: "1/7/2020",
        subheader: "January 2020 - March 2021,  AiLink Technology Corporation",
        body: [
          "Used AWS Amplify to build scalable mobile application with S3, DynamoDB, and Cognito",
          "Streamlined the process of finding housing and future roommates with React Native, Redux, and GraphQL",
          "Incorporated Google Geo-Location API for more reliable commute and housing info"
        ],
        href: "https://apps.apple.com/us/app/unilink-share/id1494763843"
      },
      {
        header: "Building Sensor Data Search Engine",
        sideheader: "Undergraduate Researcher",
        date: "1/23/2020",
        subheader: "January 2020 - November 2021,  UCSD Data Mining Lab",
        body: [
          "Coupled Angular components with Plotly to display interactive visualizations for terabytes of IoT time-series data",
          "Engineered query evaluation with Sliding Window Feature Extraction and Locality-Sensitive Hashing of metadata",
          "Implemented an efficient time-series query matching pipeline that utilizes a heuristic Dynamic Time Warping algorithm to search across 20 Million data points in less than 3 seconds"
        ],
        href: "https://dl.acm.org/doi/10.1145/3486611.3486647"
      },
      {
        header: "Your Clear Way Mobile App",
        sideheader: "Project Manager",
        date: "1/20/2021",
        subheader: "January 2021 - March 2022,  Triton Software Engineering",
        body: [
          "Led a team of 7 developers to mobile app that homeowners can use to show progress on making their home more eco-friendly and achieving different levels based on the significance and number of upgrades they make",
          "Architected the point and badge system with AWS Amplify stack that utilizes various AWS technologies for GraphQL data layer, user authentication, serverless backend logic, and persistent data storage",
          "Worked as a cross-functional Project Manager with non-profit stakeholders and UX designers to scope out the requirements and timeline of the project"
        ],
        href: "https://github.com/TritonSE/YCW-Green-Home-Application"
      }
    ]
  }
]