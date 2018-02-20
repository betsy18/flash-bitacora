$(document).ready(function() {
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: 0.5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      // alert("Ready");
      console.log(modal, trigger);
    },
    complete: function() {
      // alert('Closed'); 
    } // Callback for Modal close
  }
  );


  $('#modals').on('click', function(event) {
    // $('#modal-chat').addClass('modal-trigger');
    // $('.modal-content').find('h4').text('hola');
    // event.preventDefault();
    modalChat();
    modalPhoto();
    modalEvent();
    modalVideo();
  });

  function modalChat() {
    // event.preventDefault();
    // $('#modal1').attr('id:', 'hola');
    $('#modal-chat').addClass('modal-trigger');
    $('.modal-content').append(`
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Placeholder" id="txtTitle" type="text" data-length="10">
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
      $('.content-chat').append(`
      <h4>${txtTitle.val()}</h4>
      <p>${txtMessage.val()}</p>
      `);
      alert('Mesaje ingresado con éxito');
    });
  }



  function modalPhoto() {
    // $('a').find('').text('hola');
    $('#modal-photo').addClass('modal-trigger');
    $('.modal-content').append(`
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input placeholder="Placeholder" id="txtTitle" type="text">
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
  }

  function modalEvent() {
    $('#modal-event').addClass('modal-trigger');
    $('.modal-content').append(`
    <div class="row">
    <form class="col s12">
    `);

    // <input type="text" class="datepicker">

  }

  function modalVideo() {

  }
});
