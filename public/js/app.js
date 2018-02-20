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
          <input placeholder="Placeholder" id="txtTitle" type="text">
          <label for="Title">Título</label>
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
    $('#txtTitle').on('input', function() {
      let txtTitle = $('#txtTitle');
      console.log(txtTitle.val());
    });
  }
  

  // let txtTitle = $('#txtTitle');
    

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

  }

  function modalVideo() {

  }

  // function public(event) {
  //   // event.preventDefault();
  //   let btnSend = $('#btnSend');
  //   let txtTitle = $('#txtTitle');
  //   console.log(txtTitle).val();
  //   console.log(btnSend).val();
  // }
});
