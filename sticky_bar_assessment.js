// Create  sticky bar element
function createStickyBar() {

    // Create div for sticky bar
    const stickyBar = document.createElement('div');
    stickyBar.className = 'sticky-add-to-cart';
    stickyBar.setAttribute('style', `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #088ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: none;
        justify-content: center;
        align-items: center;
        padding: 10px;
        z-index: 1000;
        height: 10%;
    `);

    // Create sticky 'Add to Cart' button
    const button = document.createElement('button');
    button.classList = 'sticky-add-to-cart-button'
    button.innerText = 'Add to Cart';
    button.setAttribute('style', `
        padding: 10px 20px;
        font-size: 28px;
        cursor: pointer;
        color: white;
    `);

    // Append button to sticky bar
    stickyBar.appendChild(button);
    document.body.appendChild(stickyBar);

    return stickyBar;
}

// Find 'Add to Cart' button on page using the class
const addToCartButton = document.querySelector('.add-to-cart');

if (addToCartButton) {
    const stickyBar = createStickyBar();

    // Add scroll event listener to show sticky bar
    window.addEventListener('scroll', () => {
        const buttonPosition = addToCartButton.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY;

        if (scrollPosition > buttonPosition) {
            stickyBar.style.display = 'flex'; // Show sticky bar
        } else {
            stickyBar.style.display = 'none'; // Hide sticky bar
        }
    });

    // Scroll back to 'Add to Cart' button when sticky button is clicked
    stickyBar.querySelector('button').addEventListener('click', () => {
        addToCartButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}