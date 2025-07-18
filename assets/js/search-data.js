// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-started-my-ms-phd-at-uw-madison",
          title: 'I started my MS/PhD at UW-Madison!',
          description: "",
          section: "News",},{id: "news-our-lab-attended-the-midwest-security-workshop-at-purdue",
          title: 'Our lab attended the Midwest Security Workshop at Purdue.',
          description: "",
          section: "News",},{id: "news-our-paper-about-identifying-tech-abuse-in-gdpr-data-exports-got-accepted-to-acm-ccs-2025",
          title: 'Our paper about identifying tech abuse in GDPR data exports got accepted to...',
          description: "",
          section: "News",},];
