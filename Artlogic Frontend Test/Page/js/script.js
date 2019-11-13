$( document ).ready(function() {

    // Load the JSON
    $.ajax({
      url: 'js/data.json',
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {

        // Check to make sure data is pulled through correctly
        //console.log(data);

        $.each(data.rows, function(index, element) {

          //console.log(data.element);

          $("#accordion")
            .append('<div class="accordion-row">'
                      + '<h3>'+ element.title +'<img src="/img/drop-down-arrow.png"/></h3>'
                      + '<div class="accordion-body" style="display:none">'
                          + '<div>'+ element.content +'</div>'
                      + '</div>'
                  + '</div>'
            );

        });
      },
      // If error thrown, output to console
      error: function(e) {
        console.log(e);
      }

    });

    // Accordian Event
    $('#accordion').stop().on('click', 'h3', function() {

      // Slide up open element
      $('#accordion').find('.accordion-body').slideUp();
      $('#accordion').find('h3').removeClass('open');

      // Slide clicked element
      $(this).parent().find('.accordion-body').slideToggle();

      // Adds open class to rotate dropdown arrow
      $(this).addClass('open');

    });

});
