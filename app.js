window.addEventListener("DOMContentLoaded", (event) => {
    const BaseUrl = 'https://airbnb13.p.rapidapi.com/search-location?';

    let array;

    //const navMiddle = document.querySelector(".nav-middle");
    



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5a123a721emsh55534fbd5c7ae52p133e76jsne0965f490ee5',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

   


    const locationInput = document.getElementById('location');
    const checkInInput = document.getElementById('inDate');
    const checkOutInput = document.getElementById('outDate');
    const guestsInput = document.getElementById('guests');
    const searchButton = document.querySelector(".search-icon");

    let loc;
    let checkin;
    let checkout;
    let guests;

    let remUrl;


    async function fetchData() {
        let url = BaseUrl + remUrl;
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

           
            array = result.results;
            localStorage.setItem("array",JSON.stringify(array));
            localStorage.setItem("location",loc);
            localStorage.setItem("check-in",checkin);
            localStorage.setItem("checkout",checkout);
            localStorage.setItem("guests",guests);
            mainFunction();

        } catch (error) {
            console.error(error);
        }
    }

    function search() {
        if (
            locationInput.value === '' ||
            checkInInput.value === '' ||
            checkOutInput.value === '' ||
            guestsInput.value === ''
        ) {
            // Display an error message or take appropriate action
            alert('Please fill in all the fields.');
        } else {
            loc = locationInput.value;
            checkin = checkInInput.value;
            checkout = checkOutInput.value;
            guests = guestsInput.value;
            remUrl = `location=${loc}&checkin=${checkin}&checkout=${checkout}&adults=${guests}&children=0&infants=0&pets=0&page=1&currency=USD`;
            fetchData();


        }


    }



    searchButton.addEventListener("click", search);

    //main code 

  

    function mainFunction() {
        const a = document.createElement("a");
        a.href = "search.html";
        a.click();
       
        
       
        



        // const navMiddle = document.querySelector(".nav-middle");


        // let navMiddleHtml = `   <div class="search-details">
        //                  <div class="search-location field">
        //                    <span>${loc}</span>
        //                 </div>
        //                 <div class="search-date field">
        //                    <span>${checkin}</span>
        //                </div>
        //                 <div class="search-guest field">
        //                    ${guests}
        //               </div>
        //                <div class="search-icon">
        //               <span class="material-symbols-outlined" style="color: white;">
        //                search
        //               </span>
        //             </div>
        //              </div>`;









        // navMiddle.innerHTML = navMiddleHtml;

    }









})