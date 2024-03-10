const urlApi = 'https://api.nationalize.io?name=';

        document.querySelector('.boton').addEventListener('click', () => {
            const inputTexto = document.querySelector('input').value;
            
            if (inputTexto !== '') {
                // Construir la URL completa
                const urlFinal = urlApi + inputTexto;

                // Consulta a la API usando fetch
                fetch(urlFinal)
                    .then(response => response.json())
                    .then(data => {
                        // Datos de la API
                        mostrarResultados(data);
                    })
                    .catch(error => {
                        console.error('Error al hacer la consulta a la API:', error);
                    });
            }
        });

        function mostrarResultados(data) {
            const resultadosDiv = document.getElementById('resultados');
            resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

            data.country.forEach(country => {
                const porcentaje = (country.probability * 100).toFixed(2);
                const mensaje = `El nombre ${data.name} tiene un ${porcentaje}% de ser de ${country.country_id}.`;

                const nuevoParrafo = document.createElement('p');
                nuevoParrafo.textContent = mensaje;

                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'X';
                botonEliminar.addEventListener('click', () => {
                    resultadosDiv.removeChild(nuevoParrafo);
                });

                nuevoParrafo.appendChild(botonEliminar);
                resultadosDiv.appendChild(nuevoParrafo);
            });
        }