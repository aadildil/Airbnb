
const data = JSON.parse(localStorage.getItem("array"));

const loc = localStorage.getItem("location");
const checkin = localStorage.getItem("check-in");
const checkout = localStorage.getItem("checkout");
const guests = localStorage.getItem("guests");
let guestString = "";


if (guests == "1")
    guestString = guests + " guest";
else
    guestString = guests + " guests";

const navMiddle = document.querySelector(".nav-middle");
const listHeading = document.getElementById("list-heading");
const listContainer = document.querySelector(".listing");





let n = data.length;
let size = "";
findCount();
listHeading.innerText = `${size} stays in ${loc}`

function findCount() {
    let a = n / 100;
    if (a < 1) {
        size = n;
        return;
    }
    let d = n % 100;
    let c = (a - d) * 100;
    size = c + "+";
}
function plural(num, s) {
    if (num == 1)
        return s;
    else
        return s + "s";

}
//for search header
let navMiddleHtml = `   <div class="search-details">
<div class="search-location field">
    <span>${loc}</span>
</div>
<div class="search-date field">
    <span>${checkin}</span>
</div>
<div class="search-guest field" style="border-right:none">
    ${guestString} 
</div>
<div class="search-icon">
    <span class="material-symbols-outlined" style="color: white;">
        search
    </span>
</div>
</div>`;
navMiddle.innerHTML = navMiddleHtml;

//for adding hotel card

function isDefined(num) {
    if (num === undefined)
        return "no ratings "
    else
        return num;
}
function addHotelCard() {
    data.forEach(item => {

        const hotelCard = document.createElement("div");
        hotelCard.className = 'hotel-card';
        hotelCard.id = item.id;




        let images = item.images;
        let thumbnail = images[0];
        let amenities = item.previewAmenities;
        let amenityPreview = amenities.slice(0, 3);
        let previewText = amenityPreview.join(" · ");






        hotelCard.innerHTML = `
        <div class="hotel-thumbnail">
            <img src="${thumbnail}" alt="">
        </div>
        <div class="hotel-details">
        
            <div class="card-top">
                <div class="hotel-names">
                    <span class="hotel-type">${item.type} in ${loc}</span>
                    <span class="hotel-title">${item.name}</span>
        
                </div>
        
                <div class="heart-icon">
                    <span class="material-symbols-outlined heart">
                        favorite
                    </span>
                </div>
            </div>
        
            <div class="card-bar"></div>
        
            <div class="card-middle">
                <span class="hotel-specs">${item.persons} ${plural(item.persons, "guest")} · ${item.type} · ${item.beds} ${plural(item.beds, "bed")} · ${item.bathrooms} bath</span>
                <span class="hotel-specs">${previewText}</span>
            </div>
        
            <div class="card-bar"></div>
        
            <div class="card-bottom">
                <div class="review">
                    <span class="rating">${isDefined(item.rating)}</span>
                    <span><img src="images/start.png" alt=""></span>
                    <span class="review-count">(${item.reviewsCount} reviews)</span>
                </div>
                <div class="price-container">
                    <span class="rate">$${item.price.rate} </span>
                    <span class="duration">/night</span>
                </div>
            </div>
        </div>
        
        `;

        listContainer.appendChild(hotelCard);
        hotelCard.addEventListener("click", (e) => {

            const hotelPage = document.createElement("a");
            hotelPage.href = `hotel/index.html?data=${e.currentTarget.id}`;
            hotelPage.click();
        })


    });

}


addHotelCard();









{/* <div class="hotel-card">
<div class="hotel-thumbnail">
    <img src="images/hotel1.png" alt="">
</div>
<div class="hotel-details">

    <div class="card-top">
        <div class="hotel-names">
            <span class="hotel-type">Entire home in Bordeaux</span>
            <span class="hotel-title">Bordeaux Getaway</span>

        </div>

        <div class="heart-icon">
            <span class="material-symbols-outlined heart">
                favorite
            </span>
        </div>
    </div>

    <div class="card-bar"></div>

    <div class="card-middle">
        <span class="hotel-specs">4-6 guests · Entire Home · 5 beds · 3 bath</span>
        <span class="hotel-specs">Wifi · Kitchen · Free Parking</span>
    </div>

    <div class="card-bar"></div>

    <div class="card-bottom">
        <div class="review">
            <span class="rating">5.0</span>
            <span><img src="images/start.png" alt=""></span>
            <span class="review-count">(318 reviews)</span>
        </div>
        <div class="price-container">
            <span class="rate">$200</span>
            <span class="duration">/night</span>
        </div>
    </div>
</div>
</div> */}
