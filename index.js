let imageURL;
function submitHandler(){
    console.log("click is made!");
    const fileInput = document.getElementById('fileInput');
    console.log(fileInput.files);
    const image = fileInput.files[0];
    if(!image) return;
    else{
        document.getElementById("upp").disabled=true;
        document.getElementById("upp").value='Uploaded…';
    }
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "YYsW5VEi5PiFFxP7DMiEgxTU";

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
        'X-Api-Key': apiKey
     },
     body: formData
    })
    .then(function(reponse){
            return reponse.blob()
    })
    .then(function(blob){
            // console.log(blob);
            // disabled=true;
            document.getElementById("btnn").disabled=false;
            const url = URL.createObjectURL(blob);
            imageURL = url;
            const img = document.createElement('img');
            img.src = url;
            document.body.appendChild(img);
    })
    .catch();
}

function download(){
    var a = document.createElement('a');
    a.href = imageURL;
    a.download = 'nobg.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}