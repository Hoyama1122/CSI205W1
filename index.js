window.addEventListener("DOMContentLoaded", function () {
  const name_company = document.getElementById("company-name");
  name_company.textContent = data.companyName;
  document.querySelector(".logo-img").src = data.logo;
  //! address
  const address = document.querySelectorAll(".company-address");
  address[0].innerHTML = data.address[0].join("<br/>");
  address[1].innerHTML = data.address[1];
  address[2].innerHTML = data.address[2];
  //! customer
  document.querySelector(".customer-name-th").textContent = data.Name;
  document.querySelector(".customer-name-en").textContent = data.Name;
  document.getElementById("customer-address-th").textContent =
    data.addressCustomer;
  document.getElementById("customer-address-en").textContent =
    data.addressCustomer;
  //   !No and date
      document.getElementById("invoice-number-th").textContent = data.No;
      document.getElementById("invoice-number-en").textContent = data.No;
      document.getElementById("invoice-date-th").textContent = data.date;
      document.getElementById("invoice-date-en").textContent = data.date;
  //! Table
  let htmlString = "";
  for (let i = 0; i < data.Items.length; i++) {
    const amount = data.Items[i].quantity * data.Items[i].unit_price;
    htmlString += `<tr>`;
    htmlString += `<td class="table-invoice">${i + 1}</td>`;
    htmlString += `<td class="table-invoice">${data.Items[i].description}</td>`;
    htmlString += `<td class="table-invoice">${data.Items[i].quantity}</td>`;
    htmlString += `<td class="table-invoice">${data.Items[i].unit}</td>`;
    htmlString += `<td class="table-invoice">${data.Items[i].unit_price.toFixed(
      2
    )}</td>`;
    htmlString += `<td class="table-invoice">${amount.toFixed(2)}</td>`;
    htmlString += "</tr>";
  }
  let subtotal = 0;
  for (let i = 0; i < data.Items.length; i++) {
    subtotal += data.Items[i].quantity * data.Items[i].unit_price;
  }
  let discount = subtotal * 0.1;
  document.getElementById("discount-amount").textContent = discount.toFixed(2);
  document.getElementById("total-amount").textContent = subtotal.toFixed(2);
  document.getElementById("invoice-table").innerHTML = htmlString;
  totaldiscount = subtotal - discount;
  document.getElementById("total-amount-discount").textContent =
    totaldiscount.toFixed(2);
  tax = totaldiscount * 0.07;
  document.getElementById("tax-amount").textContent = tax.toFixed(2);
  total = totaldiscount - tax;
  document.getElementById("total-amount-tax").textContent = total.toFixed(2);
});
