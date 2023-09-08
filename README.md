# ProgrammingTUBE: SUPER Proyecto del Último desafío Programa Oracle Next Education

He realizado con éxito el desafío número 4, último desafío del programa Oracle Next Education (ONE). He creado un video de presentación de mi sitio web y este lo muestro a continuación:

[<img src="./ScreenShots/gifvideo.gif" width="100%">](https://vimeo.com/862206631 "Video de Presentación ProgrammingTUBE")

El desafío 4 requiere utilizar la librería React para crear el siguiente diseño:

# Diseño Figma AluraFlix

### Home

![Home AluraFlix](/ScreenShots/HomeAluraFlix.png)

### Nuevo Video AluraFlix

![Nuevo Video AluraFlix](./ScreenShots/NuevoVideoAluraFlix.png)

### Nueva Categoría AluraFlix

![Nueva Categoría AluraFlix](./ScreenShots/NuevaCategoriaAluraFlix.png)

Sin embargo, dicho diseño lo he encontrado muy pobre frente a todo al potencial que presenta React para crear diseños más interesantes, es por ese motivo que he decidido crear un **SUPER DESAFÍO** al cual he denominado ProgrammingTUBE, plataforma para gestionar videos seleccionados de programación de modo tal de acceder a conocimiento de calidad y desde una fuente gratuita como lo es Youtube. Dicha plataforma la he creado desde 0 absoluto, es decir, desde una página en blanco. He diseñado todo desde cero ya sea el logo que utilizo y el slogan. Mi desafío lo he denominado como **SUPER DESAFÍO** ya que fusiono los desafíos 3 y 4, penúltimo y último, de modo de crear un sitio web 100% usando React y en donde me he desafiado a mi mismo para probar mis habilidades en base a todo lo aprendido en las formaciones del programa ONE. Los desafíos son ideales para aplicar el conocimiento adquirido junto con la exposición a nuevas situaciones que no fueron abordadas en los cursos del programa. Para crear este super desafío he creado una FAKE API usando json server y el link a dicha API esta [aquí](https://programmingtubeapi.onrender.com/). La data que utilizo la obtengo desde Youtube y el link para crear las imagenes lo genero desde este [sitio web](https://www.get-youtube-thumbnail.com/).

A continuación presento y hago un recorrido por todas las páginas de mi sitio web:

# Presentación ProgrammingTUBE

### Página HOME

He creado mi página HOME utilizando tres banner que cambian cada 5 segundos. Además he puesto en la parte inferior de la sección donde se muestra el banner, tres thumbnails de las mismas imagenes del banner y al hacer click alguna de ellas se muestra el nuevo banner correspondiente a ese thumbnails y se resetea el timer para cambiar los banner cada 5 segundos. Los tres Home que muestran los 3 banner son estos:

#### Home Banner 1

![Home Banner 1](./ScreenShots/HomeBanner1.png)

#### Home Banner 2

![Home Banner 2](./ScreenShots/HomeBanner2.png)

#### Home Banner 3

![Home Banner 3](./ScreenShots/HomeBanner3.png)

### Página Nuevo Video y Página Nueva Categoría

A continuación presento la página para crear un nuevo video a la cual le he creado un botón que muestra o esconde el formulario para crear/editar o eliminar categorías. Esta página contiene las dos páginas en una sola que se piden en el AluraFlix. Para ingresar a dicha página he creado un botón en el header que permite navegar a esta página:

![Página Nueva Categoría y Nuevo Video](./ScreenShots/NuevoVideoNuevaCategoria.png)

Cada campo de los formularios para ingresar texto posee validación y he utilizando la librería Material UI para crear tales textfield. A continuación se pueden visualizar tales campos validados:

![Validación Campos Página Nueva Categoría y Nuevo Video](./ScreenShots/ValidacionCamposFormulario.png)

Además, he usado la librería SweetAlert para crear llamativas alertas y para el caso del ingreso de una URL, he utilizado la API de Youtube para realizar la validación si la URL ingresada corresponde a un video válido de youtube. Aquí muestro cuando NO se cumple tal validación y se genera una alerta de error:

![Alerta de Error URL no válida](./ScreenShots/ValidacionURLAPIYoutube.png)

A continuación muestro la alerta de éxito cuando creo un nuevo video:

![Alerta de Éxito al Crear Video](./ScreenShots/ExitoCreacionVideo.png)

Siguiendo el consejo de Christian Velasco he agregado una sweetalert la cual presenta las opciones de si se desea seguir agregando videos o si se desea ser redirigido a la página de inicio:

![Alerta de Consulta Post Creación de Video](./ScreenShots/AlertaPostCrearVideo.png)

A continuación muestro la alerta de éxito cuando creo una nueva categoría:

![Alerta de Éxito al Crear Video](./ScreenShots/ExitoNuevaCategoria.png)

Ahora muestro la nueva categoría y video creados. En primer lugar muestro la página que muestra los videos de la categoría creada en dos versiones, día y noche.

**Nueva Categoría Versión Día:**

![Página Nueva Categoría Versión Día](./ScreenShots/CategoriaNuevoVideoDia.png)

**Nueva Categoría Versión Noche:**

![Página Nueva Categoría Versión Noche](./ScreenShots/CategoriaNuevoVideoNoche.png)

En segundo lugar muestro la página para visualizar el nuevo video creado:

![Página para ver nuevo video](./ScreenShots/PaginaNuevoVideo.png)

Por último, muestro mi página 404 personalizada:

![Página 404](./ScreenShots/Error404.png)

### Nuevas Creaciones de Waldo

Como se puede constatar hasta aquí ya he finalizado el desafío AluraFlix como tal y de ahora en adelante presento mis propias creaciones. En primer lugar muestro la página para visualizar cada video:

#### Página Ver video

![Página ver video](./ScreenShots/PaginaVideo.png)

#### Página Ver Categoría

A continuación muestro la página ver categoría en dos versiones: versión día y versión noche para lo cual he creado un botón en la esquina superior derecha que permite hacer el switch de intercambio de versiones al hacer click sobre él:

**Página Ver Categoría Versión Día:**

![Página ver categoría día](./ScreenShots/PaginaCategoriaDia.png)

**Página Ver Categoría Versión Noche:**

![Página ver categoría noche](./ScreenShots/PaginaCategoriaNoche.png)

#### Página Search Videos

He creado una página que permite visualizar los resultados de las búsquedas de titulos de videos. Dicha página presenta 4 versiones: la versión día y cuando existen resultados de búsqueda, la versión noche y cuando existen resultados de búsqueda,la versión día y cuando NO existen resultados de búsqueda y, por último, la versión noche y cuando NO existen resultados de búsqueda. Dichas versiones se pueden visualizar a continuación:

**Versión día y cuando existen resultados de búsqueda:**

![Página Versión día y cuando existen resultados de búsqueda](./ScreenShots/SearchDia.png)

**Versión noche y cuando existen resultados de búsqueda:**

![Página Versión noche y cuando existen resultados de búsqueda](./ScreenShots/SearchNoche.png)

**Versión día y cuando NO existen resultados de búsqueda:**

![Página versión día y cuando NO existen resultados de búsqueda](./ScreenShots/SearchVoidDia.png)

**Versión noche y cuando NO existen resultados de búsqueda:**

![Página versión noche y cuando NO existen resultados de búsqueda](./ScreenShots/SearchVoidNoche.png)

#### Página Editar/Eliminar Videos

El desafío Aluraflix no posee la manera de editar o eliminar videos creados por lo cual he creado mi propia página para realizar aquello. Dicha página la presento en dos versiones, día y noche:

**Página Editar/Eliminar Videos versión Día**

![Página Editar/Eliminar Videos versión Día](./ScreenShots/EditarEliminarVideoDia.png)

**Página Editar/Eliminar Videos versión Noche**

![Página Editar/Eliminar Videos versión Noche](./ScreenShots/EditarEliminarVideoNoche.png)

Dicha página presenta la manera de filtrar videos por categorías y los videos los presento debajo con dos botones, presento el botón Eliminar Video y Editar Video. Al hacer click en el botón eliminar video, el cual posee como icono una cruz, se elimina el video almacenado en la API y al hacer clic sobre el botón editar video, el cual posee como icono un lápiz se redirigue a una nueva página la cual es la siguiente:

#### Página Editar Video

![Página Editar Videos](./ScreenShots/PaginaEditarVideo.png)

En caso de que se lleguen a borrar todas las categorías, todos los videos se borrarán y se presentará una página mencionando el hecho de que no existe data en la API. Si se borran todos los videos dicha página también se mostrará. A continuación se puede visualizar dicha página en dose versiones, versión día y versión noche:

#### Página No Existe Data en la API

**Página No Existe Data en la API versión día**

![Página No existe Data en la API versión día](./ScreenShots/NoExisteDataAPIDia.png)

**Página No Existe Data en la API versión noche**

![Página No existe Data en la API versión noche](./ScreenShots/NoExisteDataAPINoche.png)

He creado una página que muestra los derechos de autor los cuales pertenecen a sus respectivos dueños en caso de que se trate del contenido de los videos y la plataforma Youtube y, en todo otro caso, los derechos de autor me pertenecen siendo el diseñador. Dicha página también presenta dos versiones, versión día y versión noche:

#### Página Derechos de Autor

**Página Derechos de Autor versión día**

![Página Derechos de Autor versión día](./ScreenShots/DerechosdeAutorDia.png)

**Página Derechos de Autor versión noche**

![Página Derechos de Autor versión noche](./ScreenShots/DerechosdeAutorNoche.png)

Por último, muestro el componente Acordion expandido el cual he creado desde cero en base a diseños que encontré en la web:

![Acordion Expandido](./ScreenShots/AcordionExpandido.png)
