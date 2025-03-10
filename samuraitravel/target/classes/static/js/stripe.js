const stripe = Stripe('pk_test_51R0K9M4MXj8tlkHa7oSZKTveJvMykqdKb7AdJBXvozgbZuOmL4ZRPfd46H0CXG6oyiW4qxjBrhpV0u4m3tWvHMag001tlLIbWI');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});