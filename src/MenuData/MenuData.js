let beef_burgers = [
    {
        name: "Light my Fire",
        price: 49.50,
        description: "בורגר עם חמאת בוטנים, ריבת אוכמניות, בייקון וצ'דר מומס. מוגש על לחם מחמצת בגריל."
    },
    {
        name: "Highway to Hell",
        price: 59.50,
        description: "1/4 קג רוטב מנגל בקר בקר בגריל אש, בייקון מעושן, בצל מרוסק, גבינת גאודה מעושנת.",
        isNew: true
    },
    {
        name: "Highway to Hell (Double)",
        price: 49.95,
        description: "1/4 קג גבינת פלפל ג'ק, ג'לפניו, בצל אדום, גבינת שמנת ג'לפניו וריבת אוכמניות שלנו.",
        isNew: true
    },
    {
        name: "Fear of Dark",
        price: 64.50,
        description: "1/4 קג בורגר עם גבינת בלו, בייקון, איולי שום קלוי, בצל על האש ורוטב סטייקים."
    },
    {
        name: "Hey Ho Let's GO",
        price: 54.50,
        description: "1/2 קג בורגר עם גבינת פלפל ג'ק, צ'ילי, קולסלא ג'לפניו, בצל אדום, חרדל דבש.",
        options: [
            {
                option_name: "תוספת גבינה",
                option_price: 1
            },
            {
                option_name: "תוספת בשר",
                option_price: 1
            }
        ]
    },
    {
        name: "Here comes the Sun",
        price: 74.50,
        description: "בורגר עם גבינת פלפל ג'ק, גבינת שמנת ג'לפנו, טבעת בצל מטוגנת, ג'לפנוס ושמנת חמוצה צ'יפוטלה תוצרת בית שלנו."
    },
    {
        name: "Cheeseburger",
        price: 44.50,
        description: "קציצת בקר על האש, פטריות מוקפצות, ארוגולה אורגנית מושלכת באווו, גבינה שוויצרית."
    },
]

let chicken_burger = [
    {
        name: "War Pigs",
        price: 44.75,
        description: "בורגר עם גבינת צ'דר, בייקון, בצל בלסמי מקורמל ומעליו מאיו מנגל מעושן שלנו."
    },
    {
        name: "The Wall",
        price: 54.00,
        description: "בורגר עם מק וגבינה, מונטריי ג'ק, צ'דר, בייקון, טבעת בצל מטוגנת ומעליו רוטב המנגל שלנו."
    },
    {
        name: "Flamethrower",
        price: 59.00,
        description: "בורגר עם גבינה שוויצרית, בצל על האש, מלפפון חמוץ, ו -1000 רוטב איילנד על לחם מחמצת בגריל."
    },
    {
        name: "Sunrise",
        price: 59.15,
        description: "גבינת מונטריי ג'ק, אבוקדו, ביצה מטוגנת, בייקון ואיולי שום קלוי."
    },
    {
        name: "Danish",
        price: 69.79,
        description: "בורגר עם בשר חזיר מעושן איטי שלנו, רוטב ברביקיו תוצרת בית, גבינת פימנטו, בצל אדום וחמוצים."
    }
]

let vegan_burger = [
    {
        name: "Alive",
        price: 49.49,
        description: "המבורגר צמחי שיש בו את כל הטעימות העסיסית והבשרנית של המבורגר מסורתי. עם חסה, עגבנייה, בצל אדום, חמוצים, מוגש על לחמנייה של בייגלה.",
        isNew: true
    },
    {
        name: "The Meatless",
        price: 54.95,
        description: "המבורגר ירקות של שעועית שחורה תוצרת בית שלנו עם גבינת מונטריי ג'ק, חסה, עגבנייה, בצל וריבת העגבניות שלנו."
    },
    {
        name: "Welcome to the vegan jungle",
        price: 64.50,
        description: "(*להתקשר כדי לוודא אם במלאי) המבורגר בוקה, חסה, עגבנייה"
    }
]

let specials = [
    {
        name: "M.C Burger",
        price: 44.50,
        description: "עוף מטוגן, רוטב לבן מאלבמה."
    },
    {
        name: "Spicy Garlic",
        price: 74.50,
        description: "1/4 קג קציצת בקר, צ'ילי, חרדל, סלט קול, בצל"
    },
    {
        name: "Krapow Burger",
        price: 69.00,
        description: "1/4 קג קציצת בקר, מלפפון חמוץ, גבינה אמריקאית, חסה, רוטב מרובע"
    },
    {
        name: "The F**k Up",
        price: 74.25,
        description: "בורגר ומעליו גבינת צ'דר, ביצה מטוגנת, בייקון מסוכר ומאיו בייקון. מוגש על לחם מחמצת."
    },
    {
        name: "Grilled Cheese",
        price: 44.50,
        description: "בורגר עם גבינה אמריקאית, בייקון, חסה, עגבנייה, מלפפון חמוץ ומאיון בייקון."
    },
    {
        name: "Frisco Melt",
        price: 54.50,
        description: "שתי קציצות בורגר בודדות עם גבינה אמריקאית, חסה מגורדת, בצל קצוץ, מלפפון חמוץ ואלף האיים."
    }
]

let sides = [
    {
        name: "Chili cheese fries",
        price: 20.00,
        description: "צ'יפס נחנק עם צ'ילי, גבינת צ'דר ג'ק וג'לפנוס."
    },
    {
        name: "Cassava chips 381",
        price: 25.00,
        description: "תפוחי אדמה פריכים עם שום ובצל"
    },
    {
        name: "Traditional fries",
        price: 19.25
    },
    {
        name: "Chicken fingers",
        price: 29.25
    },
    {
        name: "Rustic Belgian Fries",
        price: 24.50,
        options: [
            {
                option_name: "תגדילו לי",
                option_price: 3.00
            }
        ]
    },
    {
        name: "Tater Tots",
        price: 19.50,
    },
    {
        name: "Sweet Potatos",
        price: 29.00,
        options: [
            {
                option_name: "תגדילו לי",
                option_price: 3.00
            }
        ]
    }
]

let bevs = [
    {
        name: "Bottled Water",
        price: 7
    },
    {
        name: "Coca Cola",
        price: 12
    },
    {
        name: "Sprite",
        price: 12
    },
    {
        name: "Fanta",
        price: 12
    },
    {
        name: "Lemonade",
        price: 10
    },
    {
        name: "Heineken",
        price: 15
    },
    {
        name: "Carlsberg",
        price: 17
    }
]

let menuObj = {
    beef_burgers: {
        header: "המבורגר בקר",
        note: "כל ההמבורגרים מוגשים עם מלפפון חמוץ טרי בצד.",
        menuItems: beef_burgers,
        categoryID: "beef_burgers"
    },
    chicken_burger: {
        header: "המבורגר עוף",
        menuItems: chicken_burger,
        categoryID: "chicken_burger"
    },
    vegan_burger: {
        header: "המבורגר צמחוני",
        menuItems: vegan_burger,
        categoryID: "vegan_burger"
    },
    specials: {
        header: "מיוחדים",
        menuItems: specials,
        categoryID: "specials"
    },
    // test: {
    //     header: "Test Category",
    //     menuItems: test,
    //     categoryID: "test"
    // },
    sides: {
        header: "משהו בצד",
        menuItems: sides,
        categoryID: "sides"
    },
    bevs: {
        header: "משקאות",
        menuItems: bevs,
        categoryID: "bevs"
    }
}

export default menuObj;