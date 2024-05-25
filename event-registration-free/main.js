document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const foodPreferences = [];
    document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
        foodPreferences.push(checkbox.value);
    });

    const ticketTypes = [];
    document.querySelectorAll('input[name="ticket"]:checked').forEach((checkbox) => {
        ticketTypes.push(checkbox.value);
    });

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Food Preferences:', foodPreferences);
    console.log('Ticket Types:', ticketTypes);

    alert('Registration Successful!');
});

document.getElementById('quantity').addEventListener('input', updateSummary);

function updateSummary() {
    const quantity = document.getElementById('quantity').value;
    const pricePerTicket = 50; // Example price per ticket
    const subtotal = quantity * pricePerTicket;
    const gst = subtotal * 0.10; // Assuming GST is 10%
    const total = subtotal + gst;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('gst').innerText = gst.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

document.getElementById('payButton').addEventListener('click', function() {
    alert('Proceeding to payment');
});
