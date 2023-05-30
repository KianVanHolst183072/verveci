$(document).ready(function() {

    var currentPage = 1;
    var totalPages = 2;
  
    // show the first page and hide the rest
    $('.page').hide();
    $('#page1').show();
  
    // handle back button click
    $('#back').click(function() {
      if (currentPage > 1) {
        $('#page' + currentPage).hide();
        currentPage--;
        $('#page' + currentPage).show();
      }
    });
  
    // handle next button click
    $('#next').click(function() {
      if (currentPage < totalPages) {
        $('#page' + currentPage).hide();
        currentPage++;
        $('#page' + currentPage).show();
      }
    });
  
    // handle form submission
    $('#submit').click(function() {
  
      // get the form data
      var formData = {};
      $('form').each(function() {
        $(this).find('input[type="radio"]:checked').each(function() {
          formData[$(this).attr('name')] = $(this).val();
        });
      });
  
      // send the form data to the server
      $.ajax({
        url: 'submit.php', // change this to the URL of your server-side script
        method: 'POST',
        data: formData,
        success: function(response) {
          // show a success message to the user
          alert('Form submitted successfully!');
        },
        error: function(xhr, status, error) {
          // show an error message to the user
          alert('Error submitting form: ' + error);
        }
      });
  
    });
  
  });
  