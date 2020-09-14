if(document.getElementById('datepicker').value == ''){
    document.getElementsByClassName('vk__input-submit_margin')[0].setAttribute('disabled', 'disabled')
}
document.getElementById('datepicker').oninput = function(){
  document.getElementsByClassName('vk__input-submit_margin')[0].removeAttribute("disabled")
}