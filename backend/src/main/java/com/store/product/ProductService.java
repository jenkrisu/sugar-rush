package com.store.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jenni on 7.4.2017.
 */

@Service
public class ProductService {

    /**
     * Gets instance of ProductRepository.
     */
    @Autowired
    private ProductRepository productRepository;

    /**
     * Populates database.
     */
    public void populateDatabase() {

        // Chocolate Bars
        productRepository.save(new Product("Dark Nut Chocolate", "bar",
                "Blend of the finest chocolate with delicate almond pieces, cashew, hazelnut, and walnut.",
                "Sugar, cocoa mass, almond, cashew, hazelnut, walnut, cocoa butter.",
                100, 15.99, 5,
                "https://dl.dropboxusercontent.com/s/egeec0vzyv5qw83/dark-chocolate-nut.jpg"));

        productRepository.save(new Product("Dark Fruit Chocolate", "bar",
                "Tangy orange, pineapple, and strawberry notes mix with deep intense cocoa flavours" +
                        " to strike a refreshing chord.",
                "Sugar, cocoa mass, orange pieces, pineapple pieces, strawberry peaces, cocoa butter.",
                100, 15.99, 3,
                "https://dl.dropboxusercontent.com/s/m0563cilw7zp00h/dark-chocolate-fruit.jpg"));

        productRepository.save(new Product("Dark Marshmallow Chocolate", "bar",
                "Brilliantly blended ultra-light chocolate with delicious marshmallow pieces.",
                "Sugar, cocoa mass, vegetable fat, cocoa butter.",
                150, 19.99, 5,
                "https://dl.dropboxusercontent.com/s/9bjndzqgifwfbil/dark-chocolate-marshmallow.jpg"));

        // Chocolate Truffles
        productRepository.save(new Product("Cappuccino Truffle", "truffle",
                "Espresso and creamy notes in dark chocolate ganache. "
                        + "4 Chocolate Truffles per box.",
                "Dark chocolate, cream, espresso, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/us2kt4xxgbbafnk/cappuccino-truffle.jpg"));

        productRepository.save(new Product("Vanilla Mousse Truffle", "truffle",
                "Vanilla mousse ganache in a dark chocolate shell. "
                        + "4 Chocolate Truffles per box.",
                "Cream, vanilla flavour, dark chocolate, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/d1cch1ck7lajasg/vanilla-mousse-truffle.jpg"));

        productRepository.save(new Product("Double Chocolate Raspberry Truffle", "truffle",
                "Red and black raspberry puree combined with chocolate ganache, covered in dark chocolate. "
                        + "4 Chocolate Truffles per box.",
                "Dark chocolate, cream, sugar, red raspberry bits, black raspberry bits",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/w8jl4lm9ya8upvk/double-chocolate-raspberry-truffle.jpg"));

        productRepository.save(new Product("Maple Walnut Truffle", "truffle",
                "Exquisite maple flavour that lengthens the taste experience. "
                        + "4 Chocolate Truffles per box.",
                "Cream, cocoa, vanilla extract, maple syrup, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/2hcrgt9g7fkc4z1/maple-walnut.jpg"));

        productRepository.save(new Product("Strawberry Truffle", "truffle",
                "Strawberry and white chocolate ganache center surrounded by a white chocolate shell. "
                        + "4 Chocolate Truffles per box.",
                "Cream, strawberry bits, cocoa, vanilla extract, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/ue3qv458ri8yd70/strawberry-truffle.jpg"));

        productRepository.save(new Product("Tiramisu Truffle", "truffle",
                "Espresso and mascarpone ganache in a white chocolate shell with chocolate shavings on top. "
                        + "4 Chocolate Truffles per box.",
                "Cream, mascarpone cheece, cocoa, vanilla extract, espresso extract",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/krzkyv01ersl09w/tiramisu-truffle.jpg"));

        productRepository.save(new Product("Pecan Caramell Truffle", "truffle",
                "Vanilla paired with caramel in a milk chocolate shell, topped with pecan bits. "
                        + "4 Chocolate Truffles per box.",
                "Cream, milk, pecan bits, cocoa vanilla extract, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/hexj2islm4axjtj/pecan-caramel-truffle.jpg"));

        productRepository.save(new Product("Belgian Praline Truffle", "truffle",
                "Traditional Belgian praline truffle in milk chocolate, decorated with toffee-coated "
                        + "hazelnut pieces. 4 Chocolate Truffles per box.",
                "Milk, cream, cocoa, hazelnut bits, toffee, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/xv2xnyh8ku12ws5/hazelnut-praline-truffle.jpg"));

        productRepository.save(new Product("Cheesecake Truffle", "truffle",
                "Cheesecake ganache inside a milk chocolate shell with a crust-like topping. "
                        + "4 Chocolate Truffles per box.",
                "Milk, cream, cocoa, mascarpone cheese, sugar",
                100, 24.99, 20,
                "https://dl.dropboxusercontent.com/s/xzlel91ovzubl8h/cheesecake-truffle.jpg"));

        // Chocolate Rounds
        productRepository.save(new Product("Dark Ginger Chocolate", "round",
                "Dark chocolate sprinkled with crystallized ginger. Sweet with a hint of spice. "
                        + "5 Chocolate Rounds per box.",
                "Dark chocolate, ginger, salt, sugar",
                85, 29.99, 30,
                "https://dl.dropboxusercontent.com/s/t0fqsuc55vnmsv0/dark-ginger.gif"));

        productRepository.save(new Product("Dark Cranberry Walnut Chocolate", "round",
                "Dark chocolate topped with dried cranberries and walnuts.  5 Chocolate Rounds per box.",
                "Dark chocolate, cranberries, walnuts, sugar",
                85, 29.99, 30,
                "https://dl.dropboxusercontent.com/s/s7cmiiaap31r7y8/dark-cranberry-walnut.gif"));

        productRepository.save(new Product("Banana Peanut Chocolate", "round",
                "Milk chocolate topped with honey roasted peanuts and all natural banana chips. " +
                        "5 Chocolate Rounds per box.",
                "Milk, cream, cocoa, peanuts, honey, sugar",
                85, 29.99, 30,
                "https://dl.dropboxusercontent.com/s/oamqggj0sg8ljrb/banana-peanut.gif"));

        productRepository.save(new Product("Milk Raspberry Chocolate", "round",
                "Milk chocolate topped with freeze dried raspberries. 5 Chocolate Rounds per box.",
                "Milk, cream, cocoa, raspberries, sugar.",
                85, 29.99, 30,
                "https://dl.dropboxusercontent.com/s/3cm9sf0yd6lqkr4/milk-raspberry.gif"));

        productRepository.save(new Product("Cookies N' Cream", "round",
                "Pure white chocolate studded with crushed chocolate sandwich cookies. " +
                        "5 Chocolate Rounds per box.",
                "Cream, vanilla extract, cookie bits, cocoa, sugar",
                85, 29.99, 30,
                "https://dl.dropboxusercontent.com/s/n7w3aewlhhfjnqv/cookies-and-cream.gif"));

    }
}