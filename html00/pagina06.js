const Picture = (id) =>{
    return `<figure onClick="alert("x")">
            <img src="https://picsum.photos/id/${id}/200/200" alt="" class="redonda">
            <figcaption>John</figcaption>
            </figure>`
}

const p = document.getElementById("app")
p.innerHTML = Picture(1) + Picture(2) + Picture(3)

const mensaje = (id) => {alert('Hola'+ id)}

const Lista = AudioParamMap.querySelectorAll('img')
console.log(Lista)
for (let i = 0; i < Lista.length; i++) {
    //const element = array[index];
    
}