const products = [
    {
        name: "Hafsa Gold Urgent Facial Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Gold Urgent Facial Sachet.jpg",
    },
    {
        name: "Hamme Coconut Oil 200ml",
        description: "",
        price: "283.80",
        image: "images/Hamme Coconut Oil 200ml.jpg",
    },
    {
        name: "Hamme Intensive Cleansing Black Facewash",
        description: "",
        price: "264.00",
        image: "images/Hamme Intensive Cleansing Black Facewash.jpg",
    },
    {
        name: "Alvina Moonligh Talcum Small",
        description: "",
        price: "136.50",
        image: "images/Alvina Moonligh Talcum Small.jpg",
    },
    {
        name: "Alvina MoonLight Talcum Large",
        description: "",
        price: "248.80",
        image: "images/Alvina MoonLight Talcum Large.jpg",
    },
    {
        name: "Alvina Red Kiss Talcum Large",
        description: "",
        price: "248.80",
        image: "images/Alvina Red Kiss Talcum Large.jpg",
    },
    {
        name: "Codeman Dark Brown Perfume 17ml",
        description: "",
        price: "325.92",
        image: "images/Codeman Dark Brown Perfume 17ml.jpg",
    },
    {
        name: "Sandal Refreshing Fruity Ultimate Bleach Cream",
        description: "",
        price: "38.50",
        image: "images/Sandal Refreshing Fruity Ultimate Bleach Cream.jpg",
    },
    {
        name: "Sandal Pomegranate Ultimate Bleach Cream",
        description: "",
        price: "38.50",
        image: "images/Sandal Pomegranate Ultimate Bleach Cream.jpg",
    },
    {
        name: "Sepal Hair Removal Spray",
        description: "",
        price: "145.00",
        image: "images/Sepal Hair Removal Spray.jpg",
    },
    {
        name: "Sepal Hair Removal Spray",
        description: "",
        price: "145.00",
        image: "images/Sepal Hair Removal Spray - 2.jpg",
    },
    {
        name: "Saeed Ghani Onion Oil 150ml",
        description: "",
        price: "350.07",
        image: "images/Saeed Ghani Onion Oil 150ml.jpg",
    },
    {
        name: "Lavender Essentials Oil 30ml",
        description: "",
        price: "217.00",
        image: "images/Lavender Essentials Oil 30ml.jpg",
    },
    {
        name: "Saeed Ghani Tea Tree & Aloevera Shampoo 200ml",
        description: "",
        price: "268.20",
        image: "images/Saeed Ghani Tea Tree & Aloevera Shampoo 200ml.jpg",
    },
    {
        name: "Sesame Oil 60ML",
        description: "",
        price: "181.00",
        image: "images/Sesame Oil 60ML.jpg",
    },
    {
        name: "Saeed Ghani Rose Facewash 60ml",
        description: "",
        price: "189.62",
        image: "images/Saeed Ghani Rose Facewash 60ml.jpg",
    },
    {
        name: "Saeed Ghani Ubtan FaceWash 60ml",
        description: "",
        price: "189.62",
        image: "images/Saeed Ghani Ubtan FaceWash 60ml.jpg",
    },
    {
        name: "Saeed Ghani Sun Block 60ml",
        description: "",
        price: "377.53",
        image: "images/Saeed Ghani Sun Block 60ml.jpg",
    },
    {
        name: "Saeed Ghani Goat Milk Facewash 100ml",
        description: "",
        price: "329.00",
        image: "images/Saeed Ghani Goat Milk Facewash 100ml.jpg",
    },
    {
        name: "Saeed Ghani Tea Tree & Neem Facewash 100ml",
        description: "",
        price: "329.91",
        image: "images/Saeed Ghani Tea Tree & Neem Facewash 100ml.jpg",
    },
    {
        name: "Saeed Ghani Moisturizing Cream 60ml",
        description: "",
        price: "264.27",
        image: "images/Saeed Ghani Moisturizing Cream 60ml.jpg",
    },
    {
        name: "Saeed Ghani Sandal FaceWash 60ml",
        description: "",
        price: "189.64",
        image: "images/Saeed Ghani Sandal FaceWash 60ml.jpg",
    },
    {
        name: "Saeed Ghani Vitamin C Facewash 100ml",
        description: "",
        price: "291.73",
        image: "images/Saeed Ghani Vitamin C Facewash 100ml.jpg",
    },
    {
        name: "Saaed Ghani Rose Water With Glycerine 120ml",
        description: "",
        price: "276.06",
        image: "images/Saaed Ghani Rose Water With Glycerine 120ml.jpg",
    },
    {
        name: "Saeed Ghani Vitamin C Face Cream 60ml",
        description: "",
        price: "302.03",
        image: "images/Saeed Ghani Vitamin C Face Cream 60ml.jpg",
    },
    {
        name: "Hamme Diamond Glow Skin Whitening Beauty Cream",
        description: "",
        price: "214.28",
        image: "images/Hamme Diamond Glow Skin Whitening Beauty Cream.jpg",
    },
    {
        name: "Black Seed Oil 60ml",
        description: "",
        price: "253.00",
        image: "images/Black Seed Oil 60ml.jpg",
    },
    {
        name: "Saeed Ghani Hair Growth Water",
        description: "",
        price: "254.00",
        image: "images/Saeed Ghani Hair Growth Water.jpg",
    },
    {
        name: "Green Valley Rose Water 120ml",
        description: "",
        price: "145.00",
        image: "images/Green Valley Rose Water 120ml.jpg",
    },
    {
        name: "Hamme Hyaluronic Skin Serum",
        description: "",
        price: "577.04",
        image: "images/Hamme Hyaluronic Skin Serum.jpg",
    },
    {
        name: "Saeed Ghani Goat Milk Facewash 60ml",
        description: "",
        price: "189.00",
        image: "images/Saeed Ghani Goat Milk Facewash 60ml.jpg",
    },
    {
        name: "Saeed Ghani Argan Oil Shampoo 200ml",
        description: "",
        price: "300.00",
        image: "images/Saeed Ghani Argan Oil Shampoo 200ml.jpg",
    },
    {
        name: "Saeed Ghani Alovera Face Wash 60ml",
        description: "",
        price: "189.00",
        image: "images/Saeed Ghani Alovera Face Wash 60ml.jpg",
    },
    {
        name: "Luvvel Light Brown Hair Darkening Shampoo 200ml",
        description: "",
        price: "712.00",
        image: "images/Luvvel Light Brown Hair Darkening Shampoo 200ml.jpg",
    },
    {
        name: "Saeed Ghani Foot & Hand Cream Pet Jar 180ml",
        description: "",
        price: "291.00",
        image: "images/Saeed Ghani Foot & Hand Cream Pet Jar 180ml.jpg",
    },
    {
        name: "Saaed Ghani Rose Water With Alovera 120ml",
        description: "",
        price: "189.63",
        image: "images/Saaed Ghani Rose Water With Alovera 120ml.jpg",
    },
    {
        name: "Saeed Ghani Honey & Almond Lotion 200ml",
        description: "",
        price: "308.00",
        image: "images/Saeed Ghani Honey & Almond Lotion 200ml.jpg",
    },
    {
        name: "Green Valley Black Seed Moisturizing Cream 90g",
        description: "",
        price: "217.00",
        image: "images/Green Valley Black Seed Moisturizing Cream 90g.jpg",
    },
    {
        name: "Beard Oil 30ml",
        description: "",
        price: "420.00",
        image: "images/Beard Oil 30ml.jpg",
    },
    {
        name: "Green Valley Peppermint Essentials Oil 30ml",
        description: "",
        price: "217.00",
        image: "images/Green Valley Peppermint Essentials Oil 30ml.jpg",
    },
    {
        name: "Green Valley Onion Essentials Oil 30ml",
        description: "",
        price: "145.00",
        image: "images/Green Valley Onion Essentials Oil 30ml.jpg",
    },
    {
        name: "Rose Water 120ml",
        description: "",
        price: "145.00",
        image: "images/Rose Water 120ml.jpg",
    },
    {
        name: "Green Valley Sweet Almond Essentials Oil 30ml",
        description: "",
        price: "217.00",
        image: "images/Green Valley Sweet Almond Essentials Oil 30ml.jpg",
    },
    {
        name: "Sepal Glycrine 60ml",
        description: "",
        price: "85.00",
        image: "images/Sepal Glycrine 60ml.jpg",
    },
    {
        name: "Sepal Glycrine 100ml",
        description: "",
        price: "140.00",
        image: "images/Sepal Glycrine 100ml.jpg",
    },
    {
        name: "Luvvel Honey & Almonds Body Lotion 300ml",
        description: "",
        price: "384.48",
        image: "images/Luvvel Honey & Almonds Body Lotion 300ml.jpg",
    },
    {
        name: "Luvvel Natural Black Hair Darkening Shampoo 200ml",
        description: "",
        price: "712.00",
        image: "images/Luvvel Natural Black Hair Darkening Shampoo 200ml.jpg",
    },
    {
        name: "Baba Apple Whitening Cream Bleach",
        description: "",
        price: "21.60",
        image: "images/Baba Apple Whitening Cream Bleach.jpg",
    },
    {
        name: "Luvvel Instant Fairness Facial Kit",
        description: "",
        price: "53.40",
        image: "images/Luvvel Instant Fairness Facial Kit.jpg",
    },
    {
        name: "Hamme Diamond Glow Bleach Cream",
        description: "",
        price: "35.00",
        image: "images/Hamme Diamond Glow Bleach Cream.jpg",
    },
    {
        name: "Nabhiha Urgent Facial Rose Extract",
        description: "",
        price: "20.00",
        image: "images/Nabhiha Urgent Facial Rose Extract.jpg",
    },
    {
        name: "Baba Apple 24K Gold Urgent Facial",
        description: "",
        price: "50.00",
        image: "images/Baba Apple 24K Gold Urgent Facial.jpg",
    },
    {
        name: "Baba Apple 24K Gold Creme Bleach",
        description: "",
        price: "35.62",
        image: "images/Baba Apple 24K Gold Creme Bleach.jpg",
    },
    {
        name: "Fairy Tale Perfume 30ml",
        description: "",
        price: "525.90",
        image: "images/Fairy Tale Perfume 30ml.jpg",
    },
    {
        name: "Hamme Lemon Face Wash",
        description: "",
        price: "264.00",
        image: "images/Hamme Lemon Face Wash.jpg",
    },
    {
        name: "Hamme Acne Fight Neem Face Wash",
        description: "",
        price: "231.00",
        image: "images/Hamme Acne Fight Neem Face Wash.jpg",
    },
    {
        name: "Hamme Extreme Clean Blue Face Wash",
        description: "",
        price: "264.00",
        image: "images/Hamme Extreme Clean Blue Face Wash.jpg",
    },
    {
        name: "Dr-Med Argan Hair Mask",
        description: "",
        price: "600.00",
        image: "images/Dr-Med Argan Hair Mask.jpg",
    },
    {
        name: "Hamme Gold Lighten & Glow Skin Color Beauty Cream",
        description: "",
        price: "212.96",
        image: "images/Hamme Gold Lighten & Glow Skin Color Beauty Cream.jpg",
    },
    {
        name: "Hamme Almond Oil",
        description: "",
        price: "283.00",
        image: "images/Hamme Almond Oil.jpg",
    },
    {
        name: "Hamme Argan Oil 200ml",
        description: "",
        price: "283.00",
        image: "images/Hamme Argan Oil 200ml.jpg",
    },
    {
        name: "Hafsa Gold Mask (Peel-off-Mask) Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Gold Mask Peel-off-Mask Sachet.jpg",
    },
    {
        name: "Hafsa Multani Mitti Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Multani Mitti Sachet.jpg",
    },
    {
        name: "Hafsa Liquid Multani Mitti Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Liquid Multani Mitti Sachet.jpg",
    },
    {
        name: "Hafsa Cleansing Milk Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Cleansing Milk Sachet.jpg",
    },
    {
        name: "Hafsa Silver Mask (Peel-off-Mask) Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Silver Mask Peel-off-Mask Sachet.jpg",
    },
    {
        name: "Hafsa Aleo Vera Mask (Peel-off-Mask) Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Aleo Vera Mask Peel-off-Mask Sachet.jpg",
    },
    {
        name: "Hafsa Soothing Lotion Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Soothing Lotion Sachet.jpg",
    },
    {
        name: "Hafsa Whitening Urgent Facial Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Whitening Urgent Facial Sachet.jpg",
    },
    {
        name: "Hafsa Guava Glow Scrub Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Guava Glow Scrub Sachet.jpg",
    },
    {
        name: "Hafsa Skin Polisher Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Skin Polisher Sachet.jpg",
    },
    {
        name: "Hafsa Hand & Foot Cleanser Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Hand & Foot Cleanser Sachet.jpg",
    },
    {
        name: "Hafsa Whitening Massage Cream Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Whitening Massage Cream Sachet.jpg",
    },
    {
        name: "Hafsa Whitening Mask Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Whitening Mask Sachet.jpg",
    },
    {
        name: "Hafsa Whitening Double Action Cleanser Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Whitening Double Action Cleanser Sachet.jpg",
    },
    {
        name: "Hafsa Triple Action Cleanser Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Triple Action Cleanser Sachet.jpg",
    },
    {
        name: "Hafsa Whitening Apricot Scrub Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Whitening Apricot Scrub Sachet.jpg",
    },
    {
        name: "Hafsa Hand & Foot Scrub Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Hand & Foot Scrub Sachet.jpg",
    },
    {
        name: "Hafsa Fruity Scrub + Mask Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Fruity Scrub + Mask Sachet.jpg",
    },
    {
        name: "Hafsa Hand & Foot Cream Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Hand & Foot Cream Sachet.jpg",
    },
    {
        name: "Hafsa Black Mask (Peel-off-Mask) Sachet",
        description: "",
        price: "29.75",
        image: "images/Hafsa Black Mask Peel-off-Mask Sachet.jpg",
    },
    {
        name: "Hamme Daily Moisturising Alovera & Cucumber Facewash",
        description: "",
        price: "264.00",
        image: "images/Hamme Daily Moisturising Alovera & Cucumber Facewash.jpg",
    },
    {
        name: "Outlandish Premium Soap Alovera Enigma 120gm",
        description: "",
        price: "80.00",
        image: "images/Outlandish Premium Soap Alovera Enigma 120gm.jpg",
    },
    {
        name: "Outlandish Premium Soap Floral Enigma 120gm",
        description: "",
        price: "80.00",
        image: "images/Outlandish Premium Soap Floral Enigma 120gm.jpg",
    },
    {
        name: "Outlandish Premium Soap Lavender Enigma 120gm",
        description: "",
        price: "80.00",
        image: "images/Outlandish Premium Soap Lavender Enigma 120gm.jpg",
    },
    {
        name: "Hamme Hygiene Active White Intimate Cream",
        description: "",
        price: "214.28",
        image: "images/Hamme Hygiene Active White Intimate Cream.jpg",
    },
    {
        name: "Hamme Papaya Moisturizing Cream",
        description: "",
        price: "198.00",
        image: "images/Hamme Papaya Moisturizing Cream.jpg",
    },
    {
        name: "Hamme Fairness Cream For Men 30gm",
        description: "",
        price: "145.20",
        image: "images/Hamme Fairness Cream For Men 30gm.jpg",
    },
    {
        name: "Hamme Fairness Cream For Women 50gm",
        description: "",
        price: "214.28",
        image: "images/Hamme Fairness Cream For Women 50gm.jpg",
    },
    {
        name: "Baby Feeder",
        description: "",
        price: "100.00",
        image: "images/Baby Feeder.jpg",
    },
];
