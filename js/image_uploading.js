function showImage() {
    upload_file = document.getElementById("upload-file")
    document.getElementById('cover').src = window.URL.createObjectURL(upload_file.files[0])
    document.getElementById('photo_div').style.display = "block"
    document.getElementById('upload-photo').style.display = "none"
}