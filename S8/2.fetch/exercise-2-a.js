
const urlApi = 'https://api.nationalize.io?name=';

        document.querySelector('.boton').addEventListener('click'), () => {
            const inputTexto = document.querySelector('input').value;
            
            if (inputTexto !== '') {
                // Construir la URL completa
                const urlFinal = urlApi + inputTexto;

                // Consulta a la API usando fetch
                fetch(urlFinal)
                    .then(response => response.json())
                    .then(data => {
                        // Datos de la API
                        console.log(data);
                    })
            }
        }