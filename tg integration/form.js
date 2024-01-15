let form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let text1 = document.getElementById("text1").value
    let text2 = document.getElementById("text2").value

    let message_text = `${text1} ${text2}`

    let token = "6848912307:AAG9YQb232eKhrXOQFCUHJPPAg3QPS_t4iE"
    let chat_id = -1001975351476;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message_text}`

    let api = new XMLHttpRequest()
    api.open('GET', url, true)
    api.send()

    console.log("malumot jonatildi.");
})