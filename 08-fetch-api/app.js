const container = document.querySelector('.container')


fetch('https://jsonplaceholder.typicode.com/users')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {
        let box = document.createElement("div")
        box.classList.add('box');
        

        const text = document.createElement("p")
        text.textContent = element.name;
        box.appendChild(text)

        const title = document.createElement("h1")
        text.textContent = element.username;
        box.appendChild(title)
       container.appendChild(box) 
    });
  })