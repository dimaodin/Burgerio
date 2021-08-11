let beef_burgers = [
    {
        name: "Light my Fire",
        price: 9.50,
        description: "Burger topped with peanut butter, PorterHouse blackberry jam, candied bacon & melted cheddar. Served on grilled sourdough bread."
    },
    {
        name: "Highway to Hell",
        price: 9.50,
        description: "1/4 lb. Fire-grilled beef patty bbq sauce, smoked bacon, Frazzled onions, Smoked gouda cheese",
        isNew: true
    },
    {
        name: "Highway to Hell (Double)",
        price: 12.95,
        description: "1/4 lb. Pepper Jack Cheese, jalapeños, red onions, jalapeño cream cheese, and our blackberry jam.",
        isNew: true
    },
    {
        name: "Fear of Dark",
        price: 9.50,
        description: "1/4 lb. Burger topped with bleu cheese, bacon, roasted garlic aioli, grilled onions, and PorterHouse steak sauce."
    },
    {
        name: "Hey Ho Let's GO",
        price: 8.50,
        description: "1/2 lb. Burger with pepper jack cheese, PorterHouse chili, jalapeño coleslaw, red onions, honey mustard.",
        options: [
            {
                option_name: "Add Cheese",
                option_price: 1
            },
            {
                option_name: "Add Slab Bacon",
                option_price: 1
            }
        ]
    },
    {
        name: "Here comes the Sun",
        price: 9.50,
        description: "Burger topped with pepper jack cheese, jalapeno cream cheese, fried onion ring, jalapenos and our house-made chipotle sour cream."
    },
    {
        name: "Cheeseburger",
        price: 10.50,
        description: "Fire-grilled beef patty, Sauteed mushrooms, Evoo tossed organic arugula, Swiss cheese"
    },
]

let pork_burger = [
    {
        name: "War Pigs",
        price: 8.75,
        description: "Burger with cheddar cheese, bacon, caramelized balsamic onions and topped with our smoky BBQ mayo."
    },
    {
        name: "The Wall",
        price: 8.00,
        description: "Burger with Mac and Cheese, Monterey Jack, Cheddar , Bacon, fried onion ring, and topped with our BBQ Sauce."
    },
    {
        name: "Flamethrower",
        price: 9.00,
        description: "Burger with Swiss cheese, grilled onions, pickles, and 1000 Island dressing on grilled sourdough bread."
    },
    {
        name: "Sunrise",
        price: 8.15,
        description: "Monterrey Jack Cheese, avocado, fried egg, bacon, and roasted garlic aioli."
    },
    {
        name: "Danish",
        price: 7.79,
        description: "Burger topped with our slow smoked pulled pork, house-made BBQ sauce, PorterHouse Pimento Cheese, red onions and pickles."
    }
]

let vegan_burger = [
    {
        name: "Alive",
        price: 8.49,
        description: "Plant-based burger that has all the juicy, meaty deliciousness of a traditional burger. Topped with lettuce, tomato, red onion, pickles…Served on a pretzel bun.",
        isNew: true
    },
    {
        name: "The Meatless",
        price: 7.00,
        description: "Our house-made black bean veggie burger with Monterey Jack cheese, lettuce, tomato, onions, and our PorterHouse tomato jam."
    },
    {
        name: "Welcome to the vegan jungle",
        price: 9.50,
        description: "(*CALL FOR AVAILABILITY) Boca burger, Lettuce, Tomato"
    }
]

let specials = [
    {
        name: "M.C Burger",
        price: 12.50,
        description: "Fried chicken, Alabama white sauce"
    },
    {
        name: "Spicy Garlic",
        price: 8.50,
        description: "1/4 lb. Beef patty, Chili, Mustard, Cole slaw, Onions"
    },
    {
        name: "Krapow Burger",
        price: 9.00,
        description: "1/4 lb. Beef patty, Pickles, American cheese, Lettuce, Square Sauce"
    },
    {
        name: "The F**k Up",
        price: 8.25,
        description: "Burger topped with cheddar cheese, a fried egg, candied bacon, and bacon mayo. Served on Sourdough bread."
    },
    {
        name: "Grilled Cheese",
        price: 6.50,
        description: "Burger with American cheese, bacon, lettuce, tomato, pickles and bacon mayo."
    },
    {
        name: "Frisco Melt",
        price: 7.50,
        description: "Two single burger patties with American Cheese, shredded lettuce, chopped onions, pickles and thousand island."
    }
]

let sides = [
    {
        name: "Chili cheese fries",
        price: 5.00,
        description: "Fries smothered with PorterHouse Chili, Cheddar Jack cheese and jalapenos."
    },
    {
        name: "Cassava chips 381",
        price: 5.00,
        description: "Crispy potatoes with garlic and onion"
    },
    {
        name: "Traditional fries",
        price: 4.25
    },
    {
        name: "Chicken fingers",
        price: 4.25
    },
    {
        name: "Rustic Belgian Fries",
        price: 2.50,
        options: [
            {
                option_name: "Make It Large",
                option_price: 2.00
            }
        ]
    },
    {
        name: "Tater Tots",
        price: 3.50,
    },
    {
        name: "Sweet Potatos",
        price: 3.00,
        options: [
            {
                option_name: "Make It Large",
                option_price: 2.00
            }
        ]
    }
]

let bevs = [
    {
        name: "Bottled Water",
        price: 1.5
    },
    {
        name: "Coca Cola",
        price: 2.50
    },
    {
        name: "Sprite",
        price: 2.50
    },
    {
        name: "Fanta",
        price: 2.50
    },
    {
        name: "Lemonade",
        price: 2.50
    },
    {
        name: "Heineken",
        price: 2.50
    },
    {
        name: "Carlsberg",
        price: 2.50
    }
]

// let test = [
//     {
//         name: "Test Item",
//         price: 1.5
//     },
//     {
//         name: "Test Item 2",
//         price: 2.50
//     }
// ]

let menuObj = {
    beef_burgers: {
        header: "Beef Burger",
        note: "All burgers served with a fresh pickle on the side.",
        menuItems: beef_burgers,
        categoryID: "beef_burgers"
    },
    pork_burger: {
        header: "Pork Burger",
        menuItems: pork_burger,
        categoryID: "pork_burger"
    },
    vegan_burger: {
        header: "Vegan Burger",
        menuItems: vegan_burger,
        categoryID: "vegan_burger"
    },
    specials: {
        header: "Specials",
        menuItems: specials,
        categoryID: "specials"
    },
    // test: {
    //     header: "Test Category",
    //     menuItems: test,
    //     categoryID: "test"
    // },
    sides: {
        header: "Sides",
        menuItems: sides,
        categoryID: "sides"
    },
    bevs: {
        header: "Bevrage",
        menuItems: bevs,
        categoryID: "bevs"
    }
}

export default menuObj;