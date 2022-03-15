const url = "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json"

fetch(url)
.then(response => response.json())
.then(data => {
    var html;
    var html1;
    var id=0;

    data.forEach(element => {
        if(element['name']!=""){
        html+="<li class='nav-item'>"
        html+="<button aria-current='page' type='button' class='botones' id='btn"+id+"' onclick=''>"+element['name']+"</a>"
        html+="</li>"
        }
        document.querySelector('#nav1').innerHTML = html;


        let productos = element['products']

        productos.forEach(e => {
            html1+= '<div class="card" style="width: 18rem;">'+
                '<div class="card-body">'+
                '<h5 class="card-title">'+e['name']+'<h5>'+
                '<p class="card-text">'+e['description']+'</p>'+
                '<p class="card-text">'+e['price']+'</p>'+
                '</div>'+'</div>'
        })
     
        document.querySelector('#btn'+id).setAttribute('onclick','document.querySelector("#central").innerHTML ="'+html1+'"')
        html1="";
        id++;
    })
})

