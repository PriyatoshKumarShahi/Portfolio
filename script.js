var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'React JS Learner','Web Designer'],
    typeSpeed: 70,
    backSpeed:70,
    loop:true,
  });
//   $('.know-more-btn').click(function () {
//     if(location.hash == "#Who-We-Are"){
//      $('html, body').animate({
//      scrollTop: $(".map-section").offset().top
//  }, 1000);
//  }
//  });
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});




document.getElementById('download-btn').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;

  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Get the image element
  const img = document.getElementById('image');

  // Load the image
  const imgData = img.src;

  // Add the image to the PDF
  doc.addImage(imgData, 'JPEG', 10, 10, 180, 160);

  // Save the PDF
  doc.save('download.pdf');
});