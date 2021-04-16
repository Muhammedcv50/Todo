window.onload = ajx();
function ajx(){

    //XMLHTTP request object
    var xhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    xhttp.open("GET",url,true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i=0;i<response.length;i++){
                output += "<tr style = \"text-align: left;\">";
                output += "<td>"+ response[i].id +"</td>";
                output += "<td>"+ response[i].title +"</td>";
                if(response[i].completed == false){
                    output += "<td>"+ "<input type =\"checkbox\" id="+i+" onclick = \"check("+i+");\">" + "</input>" + "</td>"; 
                }
                else{
                    output += "<td>" + "<input type =\"checkbox\" checked disabled>" + "</input>" + "</td>"; 
                }
                output += "</tr>";
                document.getElementById("tabdata").innerHTML = output;
            }
        }
    }
    xhttp.send();
}

var count = 0;
function check(t){
    var checkbox = document.getElementById(t);
    var promise = new Promise(function(resolve,reject){
        if(checkbox.checked == true){
            resolve();
        }
        else{
            reject();
        }
    })

    promise
    .then(function(){
        count++;
        display();
    })

    .catch(function(){
        count--;
        display();
    })

    function display(){
        if (count==5){
            alert(" Five Tasks successfully completed ....");
        }
    }
}