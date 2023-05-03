// Constructor function
function Product(productName, image, price, featured, description) {
    this.productName = productName;
    this.image = image;
    this.price = price;
    this.featured = featured;
    this.description = description;
    this.displayProductListing = function () {
        let product_html = '<div class="col">';
        product_html += '<a href="product.html">';
        product_html += '<img src="' + this.image + '" alt="Feature 1"  title="' + this.productName + '">';
        product_html += '</a>';
        product_html += '<h4>' + this.description + '</h4>';
        product_html += '<h5>' + 'Price: $' + this.price + '</h5>';
        product_html += '</div>';
        return product_html;
    }
};

// Declaring an empty array named allProducts
var allProducts = [];

// Pushing 12 new Products to the array
/*
 * Source: https://vkornacheva.com/Photographer_in_Lavender_Fields
 * Author: Kornacheva.com
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Offshoulder dress", "assets/imgs/feature_1.jpeg", 100, true, "Beautiful white mini dress"));
/*
 * Source: https://vkornacheva.com/Photographer_in_Lavender_Fields
 * Author: Kornacheva.com
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Gowns", "assets/imgs/feature_2.jpeg", 200, true, "Charming Violet Gown"));
/*
 * Source: https://www.boredpanda.com/lavender-field-2/?utm_source=google&utm_medium=organic&utm_campaign=organic
 * Author: Bored Panda
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/feature_3.jpeg", 300, true, "Short pink dress"));
/*
 * Source: https://1freewallpapers.com/cute-girl-is-standing-in-lavender-field-wearing-white-dress-in-purple-background-cute
 * Author: 1FreeWallpapers
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_1.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://www.peakpx.com/en/hd-wallpaper-desktop-opccq
 * Author: Peakpx
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_2.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://www.peakpx.com/en/hd-wallpaper-desktop-avlwr
 * Author: Peakpx
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_3.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://www.mihaigonguta.com/photoshoot-in-lavender/
 * Author: Mihai Gonguta
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_4.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://www.wallpaperflare.com/beautiful-woman-dress-and-lavender-field-beauty-blonde-dancing-wallpaper-azkvt
 * Author: Wallpaper Flare
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_5.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://www.wallpaperflare.com/woman-walking-on-lavender-field-standing-woman-surrounded-by-lavender-flower-during-daytime-wallpaper-zpaec
 * Author: Wallpaper Flare
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_6.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://best-wallpaper.net/Purple-skirt-girl-lavender-flowers-field-butterfly_wallpapers.html
 * Author: Best Wallpaper
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_7.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://nature.desktopnexus.com/wallpaper/2325098/
 * Author: Desktop Nexus
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_8.jpeg", 250, false, "Short pink dress"));
/*
 * Source: https://vkornacheva.com/Photographer_in_Lavender_Fields
 * Author: Kornacheva.com
 * Date Retrieved: 2022-11-20
 */
allProducts.push(new Product("Short dresses", "assets/imgs/product_9.jpeg", 250, false, "Short pink dress"));

// Declaring a function in the global context named isFeaturedProduct
function isFeaturedProduct(prod) {
    return prod.featured;
}

// Declaring a function named getFeaturedProduct which returns 
// filtered products from all products, where featured = true
function getFeaturedProducts() {
    return allProducts.filter(isFeaturedProduct);
}

// Declaring a function named displayProducts
function displayProducts(featured) {
    let products_html = "";
    let productsToDisplay = [];
    if (featured == true) {
        productsToDisplay = getFeaturedProducts();
    }
    else {
        productsToDisplay = allProducts;
    }
    for (let i of productsToDisplay) {
        products_html += i.displayProductListing();
    }
    return products_html;
}

// Declaring a variable named featuredProducts to get HTML element
let featuredProducts = $("#features_div");
if (featuredProducts) {
    featuredProducts.html(displayProducts(true));
}

// Declaring a variable named products to get  an HTML element
let products = $("#products_div");
if (products) {
    products.html(displayProducts(false));
}

// Declare an object Form
function Form(firstName, lastName, phoneNumber, email, comments, consent) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.comments = comments;
    this.consent = consent;
}

// Creating a reference to contact us form
const contactForm = $("#contact-form")[0];

// Creating an event on submit
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        // Preventing the form from redirecting to other page
        e.preventDefault();

        const firstName = $("#first-name");
        const lastName = $("#last-name");
        const phoneNumber = $("#phone-number");
        const email = $("#email");
        const comments = $("#comments");
        const consent = $("#consent");

        // forms array to hold Form objects
        var forms = new Array();

        // creating a new instance of the form type
        let newForm = new Form(firstName.value, lastName.value, phoneNumber.value, email.value, comments.value, consent.value);

        // Adding a new form to the forms
        forms.push(newForm);

        // clearing the form entries
        $("#contact-form").trigger("reset");

        // displaying a message for the successful form submission
        $(".modal-message > p").text("Thank you! We will get back to you soon! ");
        $("#modalStyle").modal('show');

    });
}
