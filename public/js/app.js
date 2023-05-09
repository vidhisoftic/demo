

//browse http request with fetch and print to the console
//browser mathi link levani and then fetch

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    })
})

/*fetch('http://localhost:3000/weather?address=surat').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error);
        }
        else{
            console.log(data.location);
            console.log(data.weather);
        }
    })
})*/


   

const weatherForm = document.querySelector('form')   
const search = document.querySelector('input')
const message=document.querySelector('#message-1')
// message.textContent='from javascript';
const message2=document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    message.textContent='loadig.....';
    message2.textContent='';
    

    fetch('/weather?address=' + location).then((response) => {
        // fetch('http://localhost:3000/weather?address=surat').then((response) => {
       
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                message.textContent=data.error
            } else {
                message.textContent=JSON.stringify(data.location)
                console.log(data.location)
                message2.textContent=JSON.stringify(data.weather)
                console.log(data.weather)

                // console.log(data.location)
                // console.log(data.weather)
            }
        })
    })
})

/*
http://localhost:3000/weather?address=surat
{
    "address": "surat",
    "weather": {
        "currenttemp": 96.78,
        "feelslike": 106.52
    },
    "location": {
        "lat": 52.5170365,
        "lng": 13.3888599
    }
}
*/