const { FieldObject } = require("../../data/field/fieldData.jsx");
module.exports.save_file = (data, url) => {
  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response)
    .catch(err => console.log(err));
};

module.exports.load_file = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(err => err);
};

module.exports.delete_file = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(err => err);
};

module.exports.load_parse = data => {
  data = JSON.parse(data);
  data.fields = data.fields.map((e, i) => new FieldObject(e, i));
  return data;
};
