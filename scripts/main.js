$(document).ready(function() {
    $('[name="age"]').select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
    $('.gallery').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false,
            variableWidth: false
          }
        }
      ]
    });
    const form = $('form');
    form.submit( (e) => {
      if ($('form')[0].checkValidity() === false) {
          e.preventDefault();
          form.addClass('was-validated');
      }
    });
});
