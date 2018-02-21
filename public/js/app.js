$(document).ready(function() {
  $('.modal').modal();
  

  modalChat();
  modalPhoto();
  modalEvent();
  modalVideo();

  function modalChat() {
    // event.preventDefault();
    // $('.modal').attr('id', 'modalChat');
    // $('#modal-chat').attr('href', '#modalChat');
    $('#modal-chat').addClass('modal-trigger');
    // cambiar por content para que aparezca
    $('.modal-content-chat').append(`
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="txtTitle" type="text" data-length="10">
              <label for="txtTitle">Título</label>
            </div>
            <div class="input-field col s12">
              <textarea id="txtMessage" class="materialize-textarea"></textarea>
              <label for="txtMessage">Textarea</label>
            </div>
             <button class="btn waves-effect waves-light" type="submit" name="action" id="btnSend">Publicar
              <i class="material-icons right">send</i>
             </button>
           </div>
        </form>
      </div>`);
    public();
  }

  function public() {
    let txtTitle = $('#txtTitle');
    let txtMessage = $('#txtMessage');
    let btnSend = $('#btnSend');
    let valideTitle = false;
    let valideMessage = false;
    function desactiveButton() {
      $('#btnSend').attr('disabled', true);
    }
    function activeButton() {
      if (valideTitle && valideMessage) {
        $('#btnSend').attr('disabled', false);
      }
    }

    txtTitle.on('input', function() {
      console.log($(this).val());
      if ($(this).val().length > 0 && $(this).val().length < 10) {
        console.log($(this).val());
        valideTitle = true;
        activeButton();
      } else {
        valideTitle = false;
        desactiveButton();
      }
    });

    txtMessage.on('input', function() {
      console.log($(this).val());
      if ($(this).val().length > 0) {
        console.log($(this).val());
        valideMessage = true;
        activeButton();
      } else {
        valideMessage = false;
        desactiveButton();
      }
    });

    $('#btnSend').on('click', function(event) {
      event.preventDefault();
      console.log(txtTitle.val());
      console.log(txtMessage.val());
      $('.element').append(`
      <h4>${txtTitle.val()}</h4>
      <p>${txtMessage.val()}</p>
      `);
      alert('Mensaje ingresado con éxito');
    });
  }


  function modalPhoto() {
    $('#modal-photo').addClass('modal-trigger');
    $('.modal-content-photo').append(`
      <div class="row">
        <form class="col s12" action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>Seleccionar</span>
              <input type="file" multiple id="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Seleccione su archivo">
            </div>
            <button class="btn waves-effect waves-light right" type="submit" name="action" id="btnImg">Publicar
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>`);
    saveImg();
  }

  function saveImg() {
    $('#file').on('change', function(ev) {
      var files = ev.target.files;
      console.log(files);// retorna un filelist
      let i = 0;
      for (let f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
          continue;
        }
        $('#btnImg').on('click', function(event) {
          event.preventDefault();
          var reader = new FileReader();
          reader.onload = (function(theFile) {
            return function(e) {
              $('.img').append(`
            <figure>
            <img src=${e.target.result} class="responsive-img"> 
            </figure>
            `);
            };
          })(f);
          reader.readAsDataURL(f);
        });
      };
    });
  };
  function modalEvent() {
    $('#modal-event').addClass('modal-trigger');
    $('.modal-content-event').append(`
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="input_text" type="text" data-length="10">
            <label for="input_text">Título de tu evento</label>
            <input id="txtMap" type="text" data-length="10">
            <label for="input_text">Título de tu evento</label>
          </div>
          <div class="col s12">
            <input type="text" class="datepicker">
          </div>
          <button class="btn waves-effect waves-light right" type="submit" name="action" id="btnAdd">Publicar
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
   </div>`);

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
    initMap();
  }

  function modalVideo() {
    $('#modal-video').addClass('modal-trigger');
    $('.modal-content-video').append(`
    <div class="row">
        <form class="col s12" action="#">
        <div class="file-field input-field">
          <div class="btn">
            <span>Seleccionar</span>
            <input type="file" multiple id="fileV">
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Seleccione su archivo">
          </div>
          <button class="btn waves-effect waves-light right" type="submit" name="action" id="btnVideo">Publicar
              <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>`);
    saveVideo();
  }

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        latitud: -34.397,
        longitud: 150.644
      },
      zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });
  
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
  
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  
    var txtMap = document.getElementById('txtMap');
    var btnAdd = document.getElementById('btnAdd');
    new google.maps.places.Autocomplete(txtmap);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
  
    directionsDisplay.setMap(map);
  
    var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
      directionsService.route({
        origin: txtmap.value,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('No encontramos una ruta');
        }
      });
    };
  
    var trazarRuta = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    btnRuta.addEventListener('click', trazarRuta);
  
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }
  }

  function saveVideo() {
    $('#fileV').on('change', function(ev) {
      var files = ev.target.files;
      console.log(files);// retorna un filelist
      let i = 0;
      for (let f; f = files[i]; i++) {
        if (!f.type.match('video.*')) {
          continue;
        }
        $('#btnVideo').on('click', function(event) {
          event.preventDefault();
          var reader = new FileReader();
          reader.onload = (function(theFile) {
            return function(e) {
              $('.video').append(`
            <figure>
            <video src=${e.target.result} controls class="responsive-video"></video>
            </figure>
            `);
            };
          })(f);
          reader.readAsDataURL(f);
        });
      };
    });
  }
});
