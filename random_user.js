$(function() {
  
  $.ajax({
    url: 'https://randomuser.me/api/?results=48',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      
      $.each(data.results, function(index, person) {
        
        const personHtml =
          `<div class="col-md-2 col-4 mt-5 mb-5 text-center">
            <img class="img-fluid rounded-circle mb-2" src="${person.picture.large}" alt=""></img>
            <h1 class="small mb-1">${`${person.name.first} ${person.name.last}`}</h1>
            <span class="small flag-icon flag-icon-${person.nat.toLowerCase()} flag-icon-squared"></span>
            <p class="mb-1 ${person.gender}"><i class="fab fa-github me-1 small"></i><i class="fab fa-facebook-f me-1 small"></i><i class="fab fa-twitter small"></i></p>
          </div>`

        $('#users').append(personHtml)
      })
    }
  });

})
