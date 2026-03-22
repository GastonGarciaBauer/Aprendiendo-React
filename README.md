**Nivel 1: El Contador (Dominando useState)** ✅
Objetivo: Entender cómo React "recuerda" cosas y actualiza la pantalla.

El Reto: Creá una pantalla con un número que empiece en 0.

Requerimientos:

Un botón de "+" que sume 1.

Un botón de "-" que reste 1 (pero que no baje de 0, ¡ojo ahí!).

Un botón de "Reset" que vuelva el número a 0.

Por qué esto: En el challenge de Nimble, usamos esto para guardar el repoUrl. Si no entendés cómo guardar un número, no podés guardar una URL.

**Nivel 2: El Buscador de Perfiles (Dominando useEffect y fetch básico)** ✅
Objetivo: Aprender a traer datos externos apenas abre la app.

El Reto: Mostrar los datos de un usuario de GitHub de forma automática.

Requerimientos:

Al cargar la app, usá useEffect para pedir datos a: https://api.github.com/users/tu-usuario-de-github.

Mostrá en pantalla la foto (avatar_url), el nombre (name) y la cantidad de repositorios públicos (public_repos).

Agregá un estado de Loading (que diga "Buscando en GitHub...") mientras llega la info.

Por qué esto: Esto es exactamente lo que hiciste en el Step 2 de Nimble para traer tus datos de candidato.

**Nivel 3: Lista de Tareas con Filtro (Dominando .map() y lógica de arrays)** ✅
Objetivo: Manipular listas de datos, que es el "corazón" de casi cualquier app.

El Reto: Traer una lista de tareas y poder visualizarlas.

Requerimientos:

Pedí los datos a: https://jsonplaceholder.typicode.com/todos.

Mostrá solo las primeras 10 tareas en una lista.

Cada tarea debe decir el título y si está "Completada" o "Pendiente" (usando un condicional).

Extra: Agregá un botón que al tocarlo, solo te muestre las tareas completadas.

Por qué esto: Esto es el Step 4 de Nimble. Si no sabés usar .map(), no podés mostrar las posiciones abiertas.

**Nivel 4: El Formulario de Postulación (Dominando el POST y Payloads)** ✅
Objetivo: Enviar datos al servidor y manejar la respuesta.

El Reto: Crear un formulario para "crear un post".

Requerimientos:

Creá dos inputs: uno para el "Título" y otro para el "Contenido".

Creá un botón "Publicar".

Al hacer clic, enviá un POST a https://jsonplaceholder.typicode.com/posts con un objeto que tenga title, body y userId: 1.

Usá try/catch. Si la respuesta es exitosa, mostrá un mensaje de "Post creado con éxito". Si no, un error.

Por qué esto: Esto es el Step 5 de Nimble. Es la acción final que decide si pasás la prueba o no.

**Nivel 5: "The Boss" (El Desafío Integrador)** ✅
Mezclamos todo lo anterior en un solo proyecto:

Traé una lista de productos de https://fakestoreapi.com/products.

Mostralos con .map().

Cada producto debe tener un botón "Comprar".

Al darle a "Comprar", se debe enviar un POST a la API con el ID del producto y tu nombre.

Manejá Loading, Error y Success.