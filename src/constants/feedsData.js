const feedsData = [
  {
    id: 1,
    user: {
      username: "johndoe",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    imageUrl:
      "https://randompicturegenerator.com/img/flower-generator/gc9c31939ab7c116bf39bb2c78a7f06177e5273c95bc880a9962da65593f225e35265d5c10f19152083adedf88741a2c8_640.jpg",
    likes: [
      {
        username: "janedoe",
        imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        username: "marysmith",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        username: "peterparker",
        imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        username: "clarkkent",
        imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
    caption:
      "Enjoying a beautiful day out in the city! The weather was perfect, the sky was clear, and the atmosphere was lively with people enjoying their day. Sometimes, it's the simple moments like these that make life so special. I had a great time exploring new places and soaking in all the positive vibes!",
    comments: [
      {
        username: "janedoe",
        date: "2024-09-01T12:34:56Z",
        comment: "Looks amazing! 😊",
        imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        username: "marysmith",
        date: "2024-09-01T13:45:12Z",
        comment: "Wish I was there!",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        username: "alexjohnson",
        date: "2024-09-01T14:20:30Z",
        comment: "The city looks so vibrant!",
        imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        username: "sarahjames",
        date: "2024-09-01T15:10:25Z",
        comment: "Such a lovely day out!",
        imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    date: "2024-09-01T11:22:33Z",
  },
  {
    id: 2,
    user: {
      username: "sarasmith",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    imageUrl:
      "https://randompicturegenerator.com/img/flower-generator/g3ee8b6252b161614b027fd5bd40f20cc23e276001061997d3101bfd4d3144d7cfb774458ec36e77915e47fb8b207bcd1_640.jpg",
    likes: [
      {
        username: "johnsmith",
        imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        username: "lindajones",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        username: "michaeljohnson",
        imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
    caption:
      "Sunset vibes 🌅 I was lucky enough to catch this breathtaking sunset while taking a leisurely walk along the beach. The sky was painted with vibrant hues of orange, pink, and purple, creating a stunning contrast with the tranquil waters. Moments like these remind me of the beauty of nature and how important it is to take a moment to appreciate it.",
    comments: [
      {
        username: "johnsmith",
        date: "2024-09-02T14:25:30Z",
        comment: "Stunning view!",
        imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      {
        username: "lindajones",
        date: "2024-09-02T15:30:45Z",
        comment: "Absolutely beautiful!",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        username: "michaeljohnson",
        date: "2024-09-02T16:00:00Z",
        comment: "Such a peaceful scene!",
        imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        username: "emilywatson",
        date: "2024-09-02T16:45:20Z",
        comment: "Makes me want to go to the beach!",
        imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    date: "2024-09-02T13:15:20Z",
  },
  {
    id: 3,
    user: {
      username: "emilywatson",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    imageUrl:
      "https://randompicturegenerator.com/img/flower-generator/g304d881422dfbff94ef27fff844e6b449b829d5b16401608919f15a5ea2a1cba7c827ce484efdf29e285771a9a779738_640.jpg",
    likes: [
      {
        username: "alexjohnson",
        imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        username: "emilywatson",
        imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
    caption:
      "Coffee and books, my perfect morning! ☕📚 There's nothing better than starting the day with a hot cup of coffee and a good book. It's my little ritual to enjoy a peaceful morning before diving into the hustle and bustle of the day. Today's read was particularly engrossing, and I lost track of time while sipping on my favorite brew. These moments are my escape and recharge for the day ahead.",
    comments: [
      {
        username: "alexjohnson",
        date: "2024-09-03T09:18:45Z",
        comment: "That looks so cozy!",
        imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      },
      {
        username: "sarahjames",
        date: "2024-09-03T10:30:15Z",
        comment: "Perfect way to start the day!",
        imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        username: "lindajones",
        date: "2024-09-03T11:05:20Z",
        comment: "I need to try this!",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
    date: "2024-09-03T08:00:00Z",
  },
  {
    id: 4,
    user: {
      username: "michaelbrown",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    imageUrl:
      "https://randompicturegenerator.com/img/flower-generator/gc7b81ebb8f691b37bc0291e6e643b77a648847e5cdd0dbd464312717801dd382f0441a11639d949ba606a3b957a30e15_640.jpg",
    likes: [
      {
        username: "sarahjames",
        imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
    caption:
      "Exploring the mountains 🏞️ What a day! I spent the day hiking through the mountains, surrounded by stunning landscapes and fresh air. The trails were challenging but rewarding, and the panoramic views from the top were absolutely worth every step. Being in nature always helps me clear my mind and rejuvenate my spirit. Can't wait for the next adventure!",
    comments: [
      {
        username: "sarahjames",
        date: "2024-09-04T16:22:11Z",
        comment: "Incredible view!",
        imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        username: "janedoe",
        date: "2024-09-04T17:00:30Z",
        comment: "Wow, this looks so serene!",
        imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        username: "marysmith",
        date: "2024-09-04T18:15:45Z",
        comment: "I need to visit this place!",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
    date: "2024-09-04T15:30:00Z",
  },
  {
    id: 5,
    user: {
      username: "lucasjones",
      imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    imageUrl:
      "https://randompicturegenerator.com/img/flower-generator/gba0b6ace30c6bcac3304b8e5a48f9e26730c3cdf1c319173ba794b3f743b79dfae3583f203ca73426048da775eb44ce8_640.jpg",
    likes: [
      {
        username: "nataliegreen",
        imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        username: "robertmiller",
        imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
      },
    ],
    caption:
      "Just finished a great workout! 💪 Feeling pumped after a solid workout session at the gym. I pushed myself harder than usual today, and it's so rewarding to see the progress. Exercise is not just about physical strength, but also about mental resilience and perseverance. Here's to more days of crushing fitness goals and staying healthy!",
    comments: [
      {
        username: "nataliegreen",
        date: "2024-09-05T17:00:05Z",
        comment: "You're crushing it!",
        imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        username: "robertmiller",
        date: "2024-09-05T18:30:25Z",
        comment: "Keep up the great work!",
        imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        username: "janedoe",
        date: "2024-09-05T19:45:10Z",
        comment: "Amazing effort!",
        imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        username: "alexjohnson",
        date: "2024-09-05T20:20:00Z",
        comment: "You look so motivated!",
        imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
      },
    ],
    date: "2024-09-05T16:00:00Z",
  },
];

export default feedsData;
