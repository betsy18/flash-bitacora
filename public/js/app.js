$(document).ready(function() {
  $('.modal').modal();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

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
      $('.modal-chat').append(`
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
        <div class="input-field col s12">
          <input id="txtTitle" type="text" data-length="10">
          <label for="txtTitle">Título</label>
        </div>
        <form class="col s12">
          <div class="file-field input-field">
            <div class="btn">
              <span>Seleccionar</span>
              <input type="file" multiple>
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
    $('file').on('change', function() {
      if (typeof(FileReader) !== undefined) {
        $('.modal-img').html(`
        <figure>
          <img id="preview">
        </figure>
        `);
        let preview = $('#preview');
        console.log(preview);
        preview.empty();
  
        let reader = new FileReader();
        reader.onload = function(event) {
          $('#preview').attr('src', event.target.result);
        };
        reader.readAsDataURL($(this)[0].files[0]);
      } else {
        console.log('Formato desconocido');
      }
    });

    $('#btnImg').on('click', function(event) {
      event.preventDefault();
      // console.log(txtTitle.val());
      console.log(preview.val());
      $('.modal-img').append(`
      <figure>
      <img id="${preview.val()}"> hola
      </figure>
      `);
      alert('Mensaje ingresado con éxito');
    });
  }


  function modalEvent() {
    $('#modal-event').addClass('modal-trigger');
    $('.content-event').append(`
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" data-length="10">
            <label for="input_text">Título de tu evento</label>
         </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" class="datepicker">
          </div>
        </div>
      </form>
   </div>`);
  }

  function modalVideo() {
    $('#modal-video').addClass('modal-trigger');
    $('.modal-content-video').append(`
    <div class="row">
        <form class="col s12" action="#">
        <div class="file-field input-field">
          <div class="btn">
            <span>Seleccionar</span>
            <input type="file" multiple>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Seleccione su archivo">
          </div>
          </div>
      </form>
    </div>`);
  }
});
