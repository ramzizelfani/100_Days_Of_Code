function initMap() {
  // Center The map on the location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: {
      lat: 36.8065,
      lng: 10.1815,
    },
    zoom: 8,
  });
  // The maker positioned at location
  const marker = new google.maps.Marker({
    position: { lat: 36.8065, lng: 10.1815 },
    map: map,
  });
}
// Adding Opacity to the #navbar while scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  }
});
// Smooth Scrolling with jquery
// $('#navbar a, .btn').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();
//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top - 70,
//       },
//       800
//     );
//   }
// });
