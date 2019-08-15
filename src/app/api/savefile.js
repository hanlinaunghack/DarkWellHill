module.exports.save_file = (data, url) => {
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response)
    .catch(err => console.log(err));
}

module.exports.load_file = (url) => {
    var resultvalue = "";
    fetch(url)
        .then(response => response.text())
        .then (data => {
            resultvalue = data;
        })
        .catch(err => err);
    return resultvalue;  
}