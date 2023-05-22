const API_KEY = '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'


document.getElementById("dietForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var goalWeight = parseFloat(document.getElementById("goalWeight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Perform calculations or further processing here


    getMessage()



});


async function getMessage() {
    console.log("click!")
    const options = {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello" }]
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}