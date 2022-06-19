$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    let name = llocalStorage.getItem("name");
    let age = localStorage.getItem("age");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let gender = localStorage.getItem("gender");

    localStorage.setItem("name", $("#name").val());
    localStorage.setItem("age", $("#age").val());
    localStorage.setItem("phone", $("#phone").val());
    localStorage.setItem("email", $("#email").val());
    localStorage.setItem("gender", $("input[name='gender']:checked").val());

    console.log(name, age, phone, email, gender);

    if (
      $("#name").valid() &&
      $("#age").valid() &&
      $("#phone").valid() &&
      $("#email").valid() &&
      $("input[name='gender']:checked") != undefined
    ) {
      $("#displayArea").append(
        "<tr><td>" +
          name +
          "</td><td>" +
          age +
          "</td><td>" +
          phone +
          "</td><td>" +
          email +
          "</td><td>" +
          gender +
          "</td></tr>"
      );
    }
  });
});

const Data = JSON.parse(localStorage.getItem("Data"));
const {
  name,
  age,
  phone,
  email,
  gender,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
} = Data;
console.log({
  name,
  age,
  phone,
  email,
  gender,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
});

$("#disTable tbody").append(
  '<tr class="child"><td>' +
    name +
    "</td><td>" +
    age +
    "</td><td>" +
    phone +
    "</td><td>" +
    email +
    "</td><td>" +
    gender +
    "</td><td>" +
    sunday +
    "</td><td>" +
    monday +
    "</td><td>" +
    tuesday +
    "</td><<td>" +
    wednesday +
    "</td><td>" +
    thursday +
    "</td><td>" +
    friday +
    "</td><td>" +
    saturday +
    "</td></tr>"
);
//   });
// });
