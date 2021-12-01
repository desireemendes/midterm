$(() => {
  window.menuListing = {};

  function createListing(property, isReservation) {
    return `
    <article class="menu-listing">
        <section class="property-listing__preview-image">
          <img src="${menu.picture_url}" alt="house">
        </section>
        <section class="property-listing__details">
          <h3 class="menu-listing__name">${menu.name}</h3>
          <ul class="menu-listing__details">
            <li>description: ${menu.description}</li>
            <li>Cost: ${menu.price}</li>
          </ul>

          <footer class="menu-listing__footer">
            <div class="menu-listing__price">$${property.cost_per_night/100.0}/night</div>
          </footer>
        </section>
      </article>
    `
  }

  window.menuListing.createListing = createListing;

});
