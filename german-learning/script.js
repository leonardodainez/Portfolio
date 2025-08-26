document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product;
      alert(`Thank you for your interest in ${product}! Please contact us at info@germanmaterials.example to complete your purchase.`);
    });
  });
});
