export const restaurants = [
    {
      id: "the-ivy",
      name: "The Ivy Spinningfields",
      image: "img/restaurants/the-ivy.jpg",
      description: "A vibrant, modern restaurant offering an extensive menu of British classics.",
      location: "Byrom Street The Pavilion, Manchester M3 3HG England",
      hours: "Mon-Sun: 8:30 AM - 1:00 AM",
      menu: [
        { name: "Fish and Chips", description: "Classic fish and chips.", price: 15 },
        { name: "Beef Wellington", description: "Tender beef wrapped in pastry.", price: 25 }
      ]
    },
    {
      id: "dishoom",
      name: "Dishoom Manchester",
      image: "img/restaurants/dishoom.jpg",
      description: "An homage to the Irani cafes of Bombay, serving delicious Indian cuisine.",
      location: "32 Bridge Street, Manchester M3 3BT England",
      hours: "Mon-Sun: 9:00 AM - 11:00 PM",
      menu: [
        { name: "Chicken Ruby", description: "A rich chicken curry.", price: 10 },
        { name: "Gunpowder Potatoes", description: "Crispy and spicy potatoes.", price: 8 }
      ]
    },
    {
      id: "tattu",
      name: "Tattu Manchester",
      image: "img/restaurants/tattu.jpg",
      description: "A contemporary Chinese restaurant with stunning interiors and creative dishes.",
      location: "3 Hardman Square Gartside Street, Manchester M3 3EB England",
      hours: "Mon-Sun: 12:00 PM - 12:00 AM",
      menu: [
        { name: "Dim Sum Platter", description: "A variety of delicious dim sum.", price: 20 },
        { name: "Dragon Fruit Cheesecake", description: "A unique dessert with a vibrant flavor.", price: 10 }
      ]
    },
    {
      id: "20-stories",
      name: "20 Stories",
      image: "img/restaurants/20stories.jpg",
      description: "A rooftop restaurant offering modern British cuisine and panoramic views of Manchester.",
      location: "1 Hardman Square No.1 Spinningfields, Manchester M3 3EB England",
      hours: "Mon-Sun: 12:00 PM - 8:00 PM",
      menu: [
        { name: "Lamb Rump", description: "Succulent lamb served with seasonal vegetables.", price: 22 },
        { name: "Chocolate Fondant", description: "Rich and gooey chocolate dessert.", price: 9 }
      ]
    },
    {
      id: "hawksmoor",
      name: "Hawksmoor Manchester",
      image: "img/restaurants/hawksmoor.jpg",
      description: "A renowned steakhouse serving the finest steaks and seafood.",
      location: "184, 186 Deansgate, Manchester M3 3WB England",
      hours: "Mon-Sun: 12:00 PM - 9:00 PM",
      menu: [
        { name: "Rib-Eye Steak", description: "Juicy rib-eye steak cooked to perfection.", price: 30 },
        { name: "Seafood Platter", description: "A selection of fresh seafood.", price: 35 }
      ]
    },
    {
      id: "rosso",
      name: "Rosso Restaurant & Bar",
      image: "img/restaurants/rosso.jpg",
      description: "An elegant restaurant offering Italian cuisine in a historic building.",
      location: "43-45 Spring Gardens, Manchester M2 2BG England",
      hours: "Mon-Sun: 11:00 AM - 11:00 PM",
      menu: [
        { name: "Spaghetti Carbonara", description: "Classic Italian pasta dish.", price: 14 },
        { name: "Tiramisu", description: "Traditional Italian dessert.", price: 7 }
      ]
    },
    {
      id: "the-french",
      name: "The French by Simon Rogan",
      image: "img/restaurants/the-french.jpg",
      description: "A fine dining experience offering innovative British cuisine.",
      location: "The Midland Hotel Peter Street Manchester M60 2DS England",
      hours: "Mon-Sun: 11:00 AM - 11:00 PM",
      menu: [
        { name: "Roast Duck", description: "Succulent roast duck with a rich sauce.", price: 28 },
        { name: "Eton Mess", description: "Classic British dessert with strawberries and cream.", price: 8 }
      ]
    },
    {
      id: "el-gato-negro",
      name: "El Gato Negro",
      image: "img/restaurants/el-gato-negro.jpg",
      description: "A tapas restaurant serving a delicious selection of Spanish dishes.",
      location: "52 King Street, Manchester M2 4LY England",
      hours: "Mon-Sun: 12:00 PM - 11:59 PM",
      menu: [
        { name: "Patatas Bravas", description: "Spicy potatoes with a rich tomato sauce.", price: 6 },
        { name: "Churros", description: "Fried dough pastry with a chocolate dipping sauce.", price: 5 }
      ]
    }
  ];


  export const reviews = [
    {
      restaurant: "The Ivy Spinningfields",
      title: "Private Dining for our wedding reception",
      content: "We got married in the local registry office in Manchester followed by dinner at the Ivy. We just had immediate family and it was really special. The Dalton Room at the Ivy was perfect. Very opulent and unique. The staff were amazing. We had our own waiters for the entire evening and nothing was too much trouble. They really were fantastic. ❤️",
      image: "img/reviews/the-ivy-1.jpg",
      author: {
        name: "John Doe",
        image: "img/author/john.jpg",
        date: "3 hours ago"
      },
      rating: 5
    },
    {
      restaurant: "Dishoom Manchester",
      title: "Authentic Indian Flavors",
      content: "The queue to get in looked long but it moves very quickly and was so worth the wait. Everything we ate was delicious. Lovely atmosphere and environment. We had the chicken Ruby, gunpowder potatoes and some people on the next table recommended the bowl of greens which were really tasty. The service was excellent, we could not fault anything.",
      image: "img/reviews/dishoom-1.jpg",
      author: {
        name: "Jane Smith",
        image: "img/author/jane.jpg",
        date: "2024-05-31"
      },
      rating: 5
    },
    {
      restaurant: "Tattu Manchester",
      title: "Stunning Interiors",
      content: "Had a amazing time. Great ambience and excellent quality of food being served. One another feedback is that the Rice bowl which was served to us  i think was terracotta one had a few chips on the rim. Looking at your fine dining restaurant there should be no room for this kind of complacency. People do notice. We spent £200 between two of us and was blown away by the presentation and quality of food.",
      image: "img/reviews/tattu-1.jpg",
      author: {
        name: "Emily Brown",
        image: "img/author/emily.jpg",
        date: "2024-05-31"
      },
      rating: 5
    },
    {
      restaurant: "20 Stories",
      title: "Breathtaking Views",
      content: "Went for a meal. However, the food is not worth the amount you pay. I had the lamb shoulder, and there was a string inside the actual lamb and not tied around it. The atmosphere and ombiance of the restaurant was decent a solid 8/10 however the food was ridiculous and you could clearly tell it was left on the pass for 25 mins as the inside was loop warm and not hot at all. The lamb, which was meant to be tender.",
      image: "img/reviews/20stories-1.jpg",
      author: {
        name: "Michael Johnson",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-30"
      },
      rating: 2
    },
    {
      restaurant: "Hawksmoor Manchester",
      title: "Best Steaks in Town",
      content: "Hawksmoor serves the best steaks I have ever had. The atmosphere is cozy, and the staff are very knowledgeable about the menu. Highly recommended!",
      image: "img/reviews/hawksmoor-1.jpg",
      author: {
        name: "Sarah Williams",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-26"
      },
      rating: 5
    },
    {
      restaurant: "Rosso Restaurant & Bar",
      title: "Elegant and Delicious",
      content: "Rosso is a beautiful restaurant with elegant decor. The Italian food is delicious, and the service is impeccable. A wonderful dining experience.",
      image: "img/reviews/rosso-1.jpg",
      author: {
        name: "Laura Brown",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-25"
      },
      rating: 4
    },
    {
      restaurant: "The French by Simon Rogan",
      title: "Innovative Cuisine",
      content: "Dining at The French is an experience to remember. The innovative dishes are beautifully presented, and each bite is a burst of flavor. Exceptional service.",
      image: "img/reviews/the-french-1.jpg",
      author: {
        name: "David Smith",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-20"
      },
      rating: 4
    },
    {
      restaurant: "El Gato Negro",
      title: "Delicious Tapas",
      content: "El Gato Negro offers a fantastic selection of tapas. The dishes are flavorful and perfect for sharing. The ambiance is lively and welcoming.",
      image: "img/reviews/el-gato-negro-1.jpg",
      author: {
        name: "Emma White",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-19"
      },
      rating: 5
    },
    {
      restaurant: "The Ivy Spinningfields",
      title: "Wonderful Experience",
      content: "I had a wonderful dining experience at The Ivy. The food was superb, and the service was outstanding. The truffle arancini is a must-try!",
      image: "img/reviews/the-ivy-2.jpg",
      author: {
        name: "Oliver Brown",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-18"
      },
      rating: 5
    },
    {
      restaurant: "Dishoom Manchester",
      title: "Great Atmosphere",
      content: "Dishoom has a great atmosphere and amazing food. The black daal and the lamb chops are absolutely delicious. Highly recommend for a cozy dinner.",
      image: "img/reviews/dishoom-2.jpg",
      author: {
        name: "Sophia Johnson",
        image: "img/author/blankProfilePic.webp",
        date: "2024-05-10"
      },
      rating: 5
    }
  ];
