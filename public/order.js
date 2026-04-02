document.addEventListener("DOMContentLoaded", function () {

const serviceSelect = document.getElementById("service");
const specificationsSelect = document.getElementById("specifications");
const orderForm = document.getElementById("orderForm");

function updateSpecifications() {

const service = serviceSelect.value;

specificationsSelect.innerHTML =
'<option value="" disabled selected>Select specification</option>';

let options = [];

if (service === "photostat") {
options = ["Single-Sided", "Double-Sided"];
}

else if (service === "color_bw_printing") {
options = ["Black & White", "Color"];
}

else if (service === "offset_printing") {
options = ["Glossy", "Matte", "Textured"];
}

else if (service === "drawing_print") {
options = ["A4", "A3", "A2", "A1", "A0"];
}

else if (service === "visiting_cards") {
options = ["Glossy", "Matte", "Laminated"];
}

else if (service === "posters") {
options = ["A4", "A3", "A2", "A1", "Custom Size"];
}

else if (service === "letterhead") {
options = ["Standard", "Customized"];
}

else if (service === "id_cards") {
options = ["Plastic", "Laminated Paper"];
}

else if (service === "leaflets") {
options = ["Single-Sided", "Double-Sided"];
}

else if (service === "brochures") {
options = ["Bi-Fold", "Tri-Fold"];
}

else if (service === "binding") {
options = ["Spiral", "Hardcover", "Softcover"];
}

else if (service === "bill_books") {
options = ["Duplicate Copy", "Triplicate Copy"];
}

else if (service === "tshirt_printing") {
options = ["Cotton", "Polyester", "Custom Design"];
}

else if (service === "flex_standee") {
options = ["Roll-Up Standee", "Wall Flex"];
}

else if (service === "mug_printing") {
options = ["White Mug", "Magic Mug", "Custom Design"];
}

options.forEach(option => {

const newOption = document.createElement("option");

newOption.value = option;
newOption.textContent = option;

specificationsSelect.appendChild(newOption);

});

}

serviceSelect.addEventListener("change", updateSpecifications);

orderForm.addEventListener("submit", async function (e) {

e.preventDefault();

const name = document.getElementById("name").value;
const contact = document.getElementById("contact").value;

const serviceText =
serviceSelect.options[serviceSelect.selectedIndex].text;

const specificationText =
specificationsSelect.options[specificationsSelect.selectedIndex].text;

const instructions = document.getElementById("instructions").value;
const deadline = document.getElementById("deadline").value;

const fileInput = document.getElementById("fileUpload");

const formData = new FormData();

formData.append("name", name);
formData.append("contact", contact);
formData.append("service", serviceText);
formData.append("specification", specificationText);
formData.append("instructions", instructions);
formData.append("deadline", deadline);

if (fileInput.files.length > 0) {
formData.append("file", fileInput.files[0]);
}

await fetch("http://localhost:5000/api/orders", {
method: "POST",
body: formData
});

alert("Order Placed Successfully!");

orderForm.reset();

});

});