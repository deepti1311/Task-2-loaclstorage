$(document).ready(function () {
  $("form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        onlytext: true,
      },

      age: {
        required: true,
        maxlength: 2,
        min: 18,
        max: 25,
        age: true,
      },

      phone: {
        required: true,
        maxlength: 10,
        phone: true,
      },

      email: {
        required: true,
        email: true,
        mail: true,
      },

      gender: { required: true },

      sun: { required: true },
      mon: { required: true },
      tue: { required: true },
      wed: { required: true },
      thu: { required: true },
      fri: { required: true },
      sat: { required: true },
    },

    messages: {
      name: {
        required: "enter name ",
        minlength: "Name should be at least 3 characters",
      },

      age: {
        required: "enter your age",
        min: "enter  age between 18-25",
        max: "enter  age between 18-25",
        age: "age limit 18-25",
      },

      phone: {
        required: "enter phone number ",
        maxlength: "phone number should be at least 10 characters",
        placeholder: "match the field",
      },
      email: {
        email: "The email should be in the format: abc@tntra.io",
      },

      gender: {
        required: "Please select a gender<br/>",
      },
    },

    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other");
      } else {
        // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
  });
});
$.validator.addMethod(
  "onlytext",
  function (value) {
    return /^[a-zA-Z]*$/.test(value);
  },
  "enter a valid input"
);

$.validator.addMethod(
  "age",
  function (value) {
    return /[0-9]$/.test(value);
  },
  "enter valid age"
);

$.validator.addMethod(
  "phone",
  function (value) {
    return /[0-9]$/.test(value);
  },
  "enter valid phone number"
);
$.validator.addMethod(
  "mail",
  function (value) {
    return /^([A-Za-z0-9_\-\.])+\@([tntra|gmail])+\.(io)$/.test(value);
  },
  "enter a valid mail"
);

// localStorage.setItem("name", $("#name").val());
// localStorage.setItem("age", $("#age").val());
// localStorage.setItem("phone", $("#phone").val());
// localStorage.setItem("email", $("#email").val());
// localStorage.setItem("gender", $("input[name='gender']:checked").val());

$(function () {
  enable_cb(); // this function will enable all the days
  $("#Day").click(enable_cb);
  disable_cb();
  $("#Day").click(disable_cb);
});

function enable_cb() {
  if (this.checked) {
    $("#sunday").removeAttr("disabled");
    $("#monday").removeAttr("disabled");
    $("#tuesday").removeAttr("disabled");
    $("#wednesday").removeAttr("disabled");
    $("#thursday").removeAttr("disabled");
    $("#friday").removeAttr("disabled");
    $("#saturday").removeAttr("disabled");
  }
}
function disable_cb() {
  if (!this.checked) {
    $("#sunday").attr("disabled", true);
    $("#monday").attr("disabled", true);
    $("#tuesday").attr("disabled", true);
    $("#wednesday").attr("disabled", true);
    $("#thursday").attr("disabled", true);
    $("#friday").attr("disabled", true);
    $("#saturday").attr("disabled", true);
    $("#sun").attr("disabled", true);
    $("#mon").attr("disabled", true);
    $("#tue").attr("disabled", true);
    $("#wed").attr("disabled", true);
    $("#thu").attr("disabled", true);
    $("#fri").attr("disabled", true);
    $("#sat").attr("disabled", true);
  }
}

//   now enable each select time based on the day is cheked or not
$(function () {
  enable_cb1(); // this function will enable sunday pickup time
  $("#sunday").click(enable_cb1);
  disable_cb1();
  $("#sunday").click(disable_cb1);
});
function enable_cb1() {
  if (this.checked) {
    $("#sun").removeAttr("disabled");
  }
}
function disable_cb1() {
  if (!this.checked) {
    $("#sun").attr("disabled", true);
  }
}

$(function () {
  enable_cb2(); // this function will enable sunday pickup time
  $("#monday").click(enable_cb2);
  disable_cb2();
  $("#monday").click(disable_cb2);
});
function enable_cb2() {
  if (this.checked) {
    $("#mon").removeAttr("disabled");
  }
}
function disable_cb2() {
  if (!this.checked) {
    $("#mon").attr("disabled", true);
  }
}

$(function () {
  enable_cb3(); // this function will enable sunday pickup time
  $("#tuesday").click(enable_cb3);
  disable_cb1();
  $("#tuesday").click(disable_cb3);
});
function enable_cb3() {
  if (this.checked) {
    $("#tue").removeAttr("disabled");
  }
}
function disable_cb3() {
  if (!this.checked) {
    $("#tue").attr("disabled", true);
  }
}

$(function () {
  enable_cb4(); // this function will enable sunday pickup time
  $("#wednesday").click(enable_cb4);
  disable_cb4();
  $("#wednesday").click(disable_cb4);
});
function enable_cb4() {
  if (this.checked) {
    $("#wed").removeAttr("disabled");
  }
}
function disable_cb4() {
  if (!this.checked) {
    $("#wed").attr("disabled", true);
  }
}

$(function () {
  enable_cb5(); // this function will enable sunday pickup time
  $("#thursday").click(enable_cb5);
  disable_cb1();
  $("#thursday").click(disable_cb5);
});
function enable_cb5() {
  if (this.checked) {
    $("#thu").removeAttr("disabled");
  }
}
function disable_cb5() {
  if (!this.checked) {
    $("#thu").attr("disabled", true);
  }
}

$(function () {
  enable_cb6(); // this function will enable sunday pickup time
  $("#friday").click(enable_cb6);
  disable_cb6();
  $("#friday").click(disable_cb6);
});
function enable_cb6() {
  if (this.checked) {
    $("#fri").removeAttr("disabled");
  }
}
function disable_cb6() {
  if (!this.checked) {
    $("#fri").attr("disabled", true);
  }
}

$(function () {
  enable_cb7(); // this function will enable sunday pickup time
  $("#saturday").click(enable_cb7);
  disable_cb7();
  $("#saturday").click(disable_cb7);
});
function enable_cb7() {
  if (this.checked) {
    $("#sat").removeAttr("disabled");
  }
}
function disable_cb7() {
  if (!this.checked) {
    $("#sat").attr("disabled", true);
  }
}

// $("#form").submit(function (event) {
//   event.preventDefault();

//   let name1 = $("#name1").val();
//   let age = $("#age").val();
//   let email = $("#email").val();
//   let phone = $("#phone").val();

//   let gender = $("input[name='gender']:checked").val();

//   if (
//     $("#name1").valid() &&
//     $("#age").valid() &&
//     $("#email").valid() &&
//     $("#phone").valid() &&
//     $("input[name='gender']:checked").val() != undefined
//   ) {
//     localStorage.setItem("name1", $("#name1").val());
//     localStorage.setItem("age", $("#age").val());
//     localStorage.setItem("email", $("#email").val());
//     localStorage.setItem("phone", $("#phone").val());

//     localStorage.setItem("gender", $("input[name='gender']:checked").val());
//     location.href = "../html/test-data.html";
//   }
// });

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let email = localStorage.getItem("email");
// let phone = localStorage.getItem("phone");

// let gender = localStorage.getItem("gender");

// {
//   $("#displayArea").append(
//     "<tr><td>" +
//       name +
//       "</td><td>" +
//       age +
//       "</td><td>" +
//       email +
//       "</td><td>" +
//       phone +
//       "</td><td>" +
//       gender +
//       "</td><td><a href='javascript:void(0);' class='rem'>Remove</a></td>" +
//       "<td><a href='' class='edit'>Edit</a></td></tr>"
//   );

//   $(document).on("click", ".rem", function () {
//     $(this).parent().parent().remove();
//   });

//   $(document).on("click", ".edit", function (event) {
//     event.preventDefault();
//     var url = window.history.go(-1);
//     $(".edit").attribute("href", url);
//   });
// }

// $("form").submit(function (event) {
//   event.preventDefault();

//   if (
//     $("#name").valid() === true &&
//     $("#age").valid() === true &&
//     $("#email").valid() === true &&
//     $("#phone").valid() === true &&
//     $("input[name=gender]:checked") != undefined &&
//     $("#config").prop("checked", true) &&
//     ($("#1").valid() ||
//       $("#2").valid() ||
//       $("#3").valid() ||
//       $("#4").valid() ||
//       $("#5").valid() ||
//       $("#6").valid() ||
//       $("#7").valid())
//   ) {
//     // if(( ($('#sunday').valid() === true)) && ( ($('#1').valid() === true)))
//     //   if(( ($('#monday').valid() === true)) && ( ($('#2').valid() === true)))
//     //     if(( ($('#tuesday').valid() === true)) && ( ($('#3').valid() === true)))

//     if ($("#config").prop("checked") == true) {
//       if ($("#sunday").prop("checked") == true && $("#1").val() != "None") {
//       }
//       if ($("#monday").prop("checked") == true && $("#2").val() != "None") {
//       }
//       if ($("#tuesday").prop("checked") == true && $("#3").val() != "None") {
//       }
//       if ($("#wednesday").prop("checked") == true && $("#4").val() != "None") {
//       }
//       if ($("#thrusday").prop("checked") == true && $("#5").val() != "None") {
//       }
//       if ($("#friday").prop("checked") == true && $("#6").val() != "None") {
//       }
//       if ($("#saturday").prop("checked") == true && $("#7").val() != "None") {
//       }

//       let name = $("#name").val();
//       let age = $("#age").val();
//       let phone = $("#phone").val();
//       let email = $("#email").val();
//       let gender = $("input[type=radio][name=gender]:checked").val();
//       let sunday = $("#1").val();
//       let monday = $("#2").val();
//       let tuesday = $("#3").val();
//       let wednesday = $("#4").val();
//       let thursday = $("#5").val();
//       let friday = $("#6").val();
//       let saturday = $("#7").val();

//       console.log({
//         name,
//         age,
//         phone,
//         email,
//         gender,
//         sunday,
//         monday,
//         tuesday,
//         wednesday,
//         thursday,
//         friday,
//         saturday,
//       });

//       const Data = {
//         name: name,
//         age: age,
//         phone: phone,
//         email: email,
//         gender: gender,
//         sunday: sunday,
//         monday: monday,
//         tuesday: tuesday,
//         wednesday: wednesday,
//         thursday: thursday,
//         friday: friday,
//         saturday: saturday,
//       };

//       const userdata = localStorage.setItem("Data", JSON.stringify(Data));

//       console.log("userdata", userdata);
//       window.open("../html/test-data.html");
//     }
//   }
// });

// ( ($('#1').valid() === true) || ($('#2').valid() === true) || ($('#3').valid() === true) || ($('#4').valid() === true) || ($('#5').valid() === true) || ($('#6').valid() === true) || ($('#7').valid() === true))
// && ($('name = pickupTime').valid() === true)

// const Data = JSON.parse(localStorage.getItem("Data"));
// const {
//   name,
//   age,
//   phone,
//   email,
//   gender,
//   sunday,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
// } = Data;
// console.log({
//   name,
//   age,
//   phone,
//   email,
//   gender,
//   sunday,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
// });

// $("#disTable tbody").append(
//   '<tr class="child"><td>' +
//     name +
//     "</td><td>" +
//     age +
//     "</td><td>" +
//     phone +
//     "</td><td>" +
//     email +
//     "</td><td>" +
//     gender +
//     "</td><td>" +
//     sunday +
//     "</td><td>" +
//     monday +
//     "</td><td>" +
//     tuesday +
//     "</td><<td>" +
//     wednesday +
//     "</td><td>" +
//     thursday +
//     "</td><td>" +
//     friday +
//     "</td><td>" +
//     saturday +
//     "</td></tr>"
// );
