const siteContent = {
	"nav": {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	"cta": {
		"h1": "DOM Is Awesome",
		"button": "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	"contact": {
		"contact-h4": "Contact",
		"address": "123 Way 456 Street Somewhere, USA",
		"phone": "1 (888) 888-8888",
		"email": "sales@greatidea.io",
	},
	"footer": {
		"copyright": "Copyright Great Idea! 2018"
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.getElementById("logo-img").src = siteContent["cta"]["img-src"];


document.querySelector("nav a").text = siteContent["nav"]["nav-item-1"];
document.querySelector("nav a:nth-of-type(2)").text = siteContent["nav"]["nav-item-2"];
document.querySelector("nav a:nth-of-type(3)").text = siteContent["nav"]["nav-item-3"];
document.querySelector("nav a:nth-of-type(4)").text = siteContent["nav"]["nav-item-4"];
document.querySelector("nav a:nth-of-type(5)").text = siteContent["nav"]["nav-item-5"];
document.querySelector("nav a:nth-of-type(6)").text = siteContent["nav"]["nav-item-6"];
document.querySelector("#logo-img").src = siteContent["nav"]["img-src"]

document.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
document.querySelector("button").innerHTML = siteContent["cta"]["button"];
document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];



const firstH4 = document.querySelector(".top-content .text-content h4");
firstH4.textContent = siteContent["main-content"]["features-h4"];

const featuresP = document.querySelector(".top-content .text-content p"); featuresP.textContent = siteContent["main-content"]["features-content"];

const secondH4 = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
secondH4.textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelector(".top-content .text-content:nth-of-type(2) p"); aboutP.textContent = siteContent["main-content"]["about-content"];

document.querySelector(".middle-img").src = siteContent["main-content"]["middle-img-src"];




const services = document.querySelector(".bottom-content .text-content h4");
services.textContent = siteContent["main-content"]["services-h4"];

document.querySelector(".bottom-content .text-content p").textContent = siteContent["main-content"]["services-content"];


const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];

document.querySelector(".bottom-content .text-content:nth-of-type(2) p").textContent = siteContent["main-content"]["product-content"];



const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
vision.textContent = siteContent["main-content"]["vision-h4"];

document.querySelector(".bottom-content .text-content:nth-of-type(3) p").textContent = siteContent["main-content"]["vision-content"];


document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"]

document.querySelector(".contact p").textContent = siteContent["contact"]["address"]

document.querySelector(".contact p:nth-of-type(2)").textContent = siteContent["contact"]["phone"]

document.querySelector(".contact p:nth-of-type(3)").textContent = siteContent["contact"]["email"]


document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];








document.querySelector("nav a").style.color = "green";
document.querySelector("nav a:nth-of-type(2)").style.color = "green";
document.querySelector("nav a:nth-of-type(3)").style.color = "green";
document.querySelector("nav a:nth-of-type(4)").style.color = "green";
document.querySelector("nav a:nth-of-type(5)").style.color = "green";
document.querySelector("nav a:nth-of-type(6)").style.color = "green";





const hello = document.createTextNode("hello");

document.querySelector("nav").prepend(hello);

const goodbye = document.createTextNode("goodbye");

document.querySelector("nav").appendChild(goodbye);


// document.querySelector("h4:nth-of-type(3)").innerText = "Services";
// document.querySelector("h4:nth-of-type(4)").innerText = "Product";
// document.querySelector("h4:nth-of-type(5)").innerText = "Vision";
