
const weatherForm = document.querySelector('form')   
const search = document.querySelector('input')
const message=document.querySelector('#message-1')
const message2=document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    message.textContent='loadig.....';
    message2.textContent='';
    

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message.textContent=data.error
            } else {
                message.textContent=JSON.stringify(data.location)
                message2.textContent=JSON.stringify(data.weather)
                
            }
        })
    })
})

