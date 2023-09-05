const queryParams = new URLSearchParams(window.location.search);
const receivedData = queryParams.get('data');
const loc = localStorage.getItem("location");
const checkin = localStorage.getItem("check-in");
const checkout = localStorage.getItem("checkout");
const guests = localStorage.getItem("guests");

const data=JSON.parse(localStorage.getItem("array"));

let item;


for(let i=0;i<data.length;i++)
{
    if(data[i].id===receivedData)
    {
        item=data[i];
        break;
    }
}
let type=item.type;
let superHost=item.isSuperHost;
let price=item.price.rate;
let rating=item.rating;
let reviewsCount=item.reviewsCount;
let priceItems=item.price.priceItems;

let hotelTitle=document.querySelector('.hotel-title');
let quickDetailsContainer=document.querySelector(".quick-details");
let imageContainer=document.querySelector(".image-container");
let hostedBy=document.querySelector(".hosted-by-top > span");
let hostedBottom=document.querySelector(".hosted-by-bottom");
let hostPhoto=document.getElementById("host-photo");
let badge=document.getElementById("badge");
let pricePerNight=document.querySelector(".card-price");
let ratingEle=document.getElementsByClassName("rating");
let reviewEle=document.getElementsByClassName("review-count");
let checkinEle=document.querySelector(".checkInDate");
let checkOutEle=document.querySelector(".checkOutDate");
let guestELe=document.querySelector("#guestCOunt");
let breakUpContainer=document.querySelector(".breakup-container");

let address=item.address;
let addressArray=address.split(",");

let country=addressArray[addressArray.length-1];
let images=item.images;

console.log(priceItems);

function plural(num,s)
{
    if(num==1)
    return s;
    else
    return s+"s";

}

//for header
hotelTitle.innerText=`${item.name}`;
if(superHost)
{
    quickDetailsContainer.innerHTML=` <img src="images/star.png" alt="">
    <span class="header-rating">${rating} ·</span>
    <span>${item.reviewsCount} ${plural(item.reviewsCount,"review")} ·</span>
    <div class="super-host">
        <img src="images/badge.png" alt="">
        <span>Superhost ·</span>
    </div>
    <div class="header-location">
        <span class="place">${addressArray[0]},</span>
        <span class="country">${country}</span>

    </div>`
}
else
{
    quickDetailsContainer.innerHTML=` <img src="images/star.png" alt="">
    <span class="header-rating">${item.rating} ·</span>
    <span>${item.reviewsCount} ${plural(item.reviewsCount,"review")} ·</span>
   
    <div class="header-location">
        <span class="place">${addressArray[0]},</span>
        <span class="country">${country}</span>

    </div>`

}

//for image container
imageContainer.innerHTML=`   <div class="left-grid">
<img src="${images[0]}" alt="" id="big-image">
</div>
<div class="right-grid">
<div class="image-row">
    <img src="${images[1]}" alt="" class="small-image">
    <img src="${images[2]}" alt="" class="small-image">
</div>
<div class="image-row">
<img src="${images[3]}" alt="" class="small-image">
<img src="${images[4]}" alt="" class="small-image">
    <button class="show-all">
        <img src="images/photo-icon.png" alt="">
        Show all photos
    </button>
</div>
</div>`

//for host 
hostedBy.innerText=`${type} hosted by owner`;
hostedBottom.innerText=`${item.persons} ${plural(item.persons,"guest")} · ${item.bedrooms} bedroom · ${item.beds} bed ·  ${item.bathrooms} bath`
hostPhoto.src=`${item.hostThumbnail}`;
if(superHost)
badge.style.display="block";


//for price
pricePerNight.innerText="$"+price;
for(let i=0;i<ratingEle.length;i++)
{
    ratingEle[i].innerText=rating+" · ";
}
for(let i=0;i<reviewEle.length;i++)
{
    reviewEle[i].innerText=reviewsCount+" " + plural(reviewsCount," review");
}




//for date
checkinEle.innerText=checkin;
checkOutEle.innerText=checkout;
guestELe.innerText=guests+" " +plural(guests,"guest");

//for breakup price
breakUpContainer.innerHTML=` <div class="day-price price-field">
<span id="price-day">${priceItems[0].title}</span>
<span id="day-total">$${priceItems[0].amount}</span>
</div>

<div class="cleaning-fee price-field">
<span>${priceItems[1].title}</span>
<span id="cleaning">$${priceItems[1].amount}</span>
</div>
<div class="service-fee price-field">
<span>${priceItems[2].title}</span>
<span id="service">$${priceItems[2].amount}</span>
</div>
<div class="tax price-field">
<span>${priceItems[3].title}</span>
<span id="cleaning">$${priceItems[3].amount}</span>
</div>
<div class="total price-field">
<span>total</span>
<span id="total">$${item.price.total}</span>
</div>`

