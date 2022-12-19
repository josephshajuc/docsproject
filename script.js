document.getElementById("bold").addEventListener("click",boldCommand);
document.getElementById("italics").addEventListener("click",italicsCommand);
document.getElementById("underline").addEventListener("click",underlineCommand);
document.getElementById("leftAlign").addEventListener("click",lalignCommand);
document.getElementById("centerAlign").addEventListener("click",calignCommand);
document.getElementById("rightAlign").addEventListener("click",ralignCommand);
document.getElementById("justifyAlign").addEventListener("click",jalignCommand);



function boldCommand(event){
    document.getElementById('bold').classList.add('active');
    console.log(event);
    if(document.getElementById("textarea1").style.fontWeight=="bold")
    {
        document.getElementById("textarea1").style.fontWeight="normal";
        document.getElementById('bold').classList.remove('active');

    }
    else
    {
        document.getElementById("textarea1").style.fontWeight="bold";
    }
}

function italicsCommand(){
    document.getElementById('italics').classList.add('active');
    if(document.getElementById("textarea1").style.fontStyle=="italic")
    {
        document.getElementById("textarea1").style.fontStyle="normal";
        document.getElementById('italics').classList.remove('active');
    }
    else
    {
        document.getElementById("textarea1").style.fontStyle="italic";
        
    }
}

function underlineCommand(){
    document.getElementById('underline').classList.add('active');
    if(document.getElementById("textarea1").style.textDecoration=="underline")
    {
        document.getElementById("textarea1").style.textDecoration="none";
        document.getElementById('underline').classList.remove('active');
    }
    else
    {
        document.getElementById("textarea1").style.textDecoration="underline";
        
    }
}

function lalignCommand(){
    console.log("lalign");
}

function ralignCommand(){
    console.log("ralign");
}

function calignCommand(){
    console.log("calign");
}

function jalignCommand(){
    console.log("jalign");
}


document.getElementById("downloadtxt").addEventListener("click", function() {
    // Generate download of hello.txt
    // file with some content
    var text = document.getElementById("textarea1").value;
    var filename = document.getElementById("filename").value;
    if(filename== "")
    {
        filename="Untitiled";
    }
    download(filename, text);
  }, false);

  function download(file, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
    element.setAttribute('download', file);
    document.body.appendChild(element);
    //onClick property
    element.click();
    document.body.removeChild(element);
  }