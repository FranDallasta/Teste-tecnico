var myArray = [];

$(document).ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    let url_user= fazerUrl(document.getElementById("cep").value)
    $.ajax({
      url: url_user,
      type: "GET",
      success: function(result) {
        myArray =  $.makeArray(result);
        if(typeof myArray[0].cep !== 'undefined'){
          buildTable(myArray)
        }
        if(typeof myArray[0].cep === 'undefined'){
          alert('cep inexistente');
        }
      }
    }) 
  });
})


function buildTable(data){
  var table = document.getElementById('myTable')
  for (var i = 0; i < data.length ; i++){
    var row = `<tr>
            <td>${data[i].cep}</td>
            <td>${data[i].logradouro}</td>
            <td>${data[i].complemento}</td>
            <td>${data[i].bairro}</td>
            <td>${data[i].localidade}</td>
            <td>${data[i].uf}</td>
            <td>${data[i].ibge}</td>
            <td>${data[i].gia}</td>
            <td>${data[i].ddd}</td>
            <td>${data[i].siafi}</td>
          </tr>`
    table.innerHTML = row
  }
}

function fazerUrl(cep){

  return "https://viacep.com.br/ws/"+cep+"/json/";
}