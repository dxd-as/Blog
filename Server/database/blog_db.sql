-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 15:40:16
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog_db`
--
CREATE DATABASE IF NOT EXISTS `blog_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blog_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `image` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `image`, `created_at`, `updated_at`) VALUES
(30, 'Ciclocross temporada 2023', '\nLa temporada de ciclocross del 2023 ha estado llena de emoción y rivalidad entre algunos de los mejores corredores del mundo: Wout Van Aert, Mathieu Van der Poel y Felipe Orts. Estos tres ciclistas han demostrado un nivel excepcional de habilidad y determinación en cada carrera en la que han participado.\n\nWout Van Aert, el talentoso ciclista belga, ha estado dominando la escena del ciclocross durante los últimos años. Su fuerza física y habilidades técnicas le han permitido obtener numerosas victorias. Van Aert es conocido por su capacidad para manejar diferentes tipos de terrenos y condiciones climáticas, lo que lo convierte en un competidor formidable.\n\nPor otro lado, Mathieu Van der Poel de los Países Bajos ha sido un rival digno para Van Aert. Con su estilo agresivo y su impresionante habilidad en el manejo de la bicicleta, Van der Poel ha desafiado constantemente a Van Aert en cada carrera. Su capacidad para acelerar en los momentos cruciales y su habilidad para superar obstáculos le han dado una ventaja competitiva.\n\nNo podemos olvidar mencionar a Felipe Orts, el talentoso ciclista español que ha estado ganando reconocimiento internacional en la disciplina del ciclocross. Orts ha demostrado su valía en varias competiciones, compitiendo de manera admirable contra ciclistas más experimentados. Su determinación y pasión por el deporte son evidentes en su desempeño, y es un competidor a tener en cuenta en cada carrera.\n\nLa temporada del 2023 ha sido testigo de intensas batallas entre estos tres corredores. Han intercambiado victorias y han llevado sus habilidades al límite en cada encuentro. Los aficionados al ciclocross han sido bendecidos con carreras emocionantes y llenas de acción, gracias a la rivalidad entre Van Aert, Van der Poel y Orts.\n\nA medida que la temporada avanza, es emocionante pensar en lo que el futuro les depara a estos talentosos ciclistas. Sin duda, continuarán desafiándose mutuamente y dejando su huella en la historia del ciclocross. Sus habilidades, pasión y dedicación hacen que cada competencia sea un espectáculo que los fanáticos no quieren perderse.', 'Server/Images_Uploaded/1688066215536.jpg', '2023-06-29 21:16:58', '2023-06-29 21:16:58'),
(31, 'Copa del mundo XCO 2023', '¡La Copa del Mundo de XCO MTB 2023 promete ser emocionante con la participación de los destacados ciclistas Nino Schurter, Mathieu van der Poel, Anne Terpstra, Loana Lecomte y Christopher Blevins! Estos talentosos atletas han demostrado su destreza en el mundo del ciclismo de montaña y se espera que brinden un espectáculo inolvidable en la próxima temporada.\n\nNino Schurter, el campeón suizo, es conocido por su dominio en la disciplina de XCO. Ha sido una fuerza imparable en el mundo del ciclismo de montaña, habiendo ganado múltiples campeonatos mundiales y medallas olímpicas. Schurter siempre ha sido un competidor feroz y su técnica y resistencia lo convierten en un rival temido.\n\nPor otro lado, Mathieu van der Poel, proveniente de los Países Bajos, ha causado sensación en el mundo del ciclismo en los últimos años. Aunque es principalmente conocido por su éxito en carreras de ciclocross y carretera, también ha incursionado en el XCO MTB con impresionantes resultados. Su versatilidad y habilidad para adaptarse a diferentes disciplinas lo convierten en un ciclista emocionante de seguir.\n\nEn la categoría femenina, Anne Terpstra y Loana Lecomte son dos competidoras destacadas que seguramente cautivarán al público. Terpstra, proveniente de los Países Bajos, ha demostrado su habilidad en el XCO y ha subido al podio en numerosas ocasiones. Por otro lado, Lecomte, una joven ciclista francesa, ha surgido como una fuerza dominante en la disciplina. Su velocidad y habilidad técnica la han llevado a lograr victorias impresionantes en competencias recientes.\n\nNo podemos dejar de mencionar a Christopher Blevins, un ciclista estadounidense que ha llamado la atención en la escena internacional. Blevins ha mostrado un gran potencial en el XCO MTB y ha conseguido resultados notables en competencias de alto nivel. Su habilidad para enfrentar terrenos difíciles y su determinación lo convierten en un competidor emocionante de observar.\n\nCon todos estos ciclistas de renombre compitiendo en la Copa del Mundo de XCO MTB 2023, podemos esperar carreras llenas de adrenalina, momentos emocionantes y batallas épicas por la victoria. Será un evento que los fanáticos del ciclismo de montaña no querrán perderse. ¡Prepárate para disfrutar de un espectáculo lleno de acción y emoción en la próxima temporada de la Copa del Mundo de XCO MTB!', 'Server/Images_Uploaded/1688068263311.jpg', '2023-06-29 21:51:03', '2023-07-03 10:53:48'),
(32, 'Historia del Tour de Francia', '¡El Tour de Francia, la carrera de ciclismo más famosa y prestigiosa del mundo, tiene una rica historia llena de momentos memorables, hazañas épicas y leyendas del deporte! Desde su creación en 1903, el Tour de Francia se ha convertido en un evento icónico que captura la atención de millones de fanáticos en todo el mundo.\n\nEl visionario detrás del Tour de Francia fue el periodista y corredor de bicicletas Henri Desgrange, quien buscaba aumentar la popularidad del periódico L\'Auto y promover el ciclismo en Francia. La primera edición de la carrera se llevó a cabo el 1 de julio de 1903, con 60 valientes corredores compitiendo en una carrera de 2,428 kilómetros en seis etapas.\n\nA medida que pasaron los años, el Tour de Francia creció en popularidad y dificultad. Se agregaron más etapas, se introdujeron las montañas y se aumentaron las distancias. La carrera se convirtió en un campo de batalla para los ciclistas, donde se requería resistencia física y mental para superar los desafíos del terreno montañoso y las duras condiciones climáticas.\n\nEl Tour de Francia ha visto a numerosas leyendas del ciclismo dejar su huella en la historia de la carrera. Eddy Merckx, apodado \"El Caníbal\", es considerado uno de los ciclistas más grandes de todos los tiempos, habiendo ganado el Tour en cinco ocasiones. Otros nombres destacados incluyen a Bernard Hinault, Jacques Anquetil, Miguel Indurain y Lance Armstrong, quienes han dejado un legado imborrable en la competencia.\n\nEl maillot amarillo, el icónico maillot de líder del Tour de Francia, se ha convertido en un símbolo reconocido en todo el mundo. Los ciclistas luchan arduamente para vestirlo y mantenerlo a lo largo de las etapas, lo que requiere estrategia, resistencia y habilidad.\n\nA lo largo de los años, el Tour de Francia ha evolucionado y se ha adaptado a los cambios en el ciclismo y en la sociedad. Se han añadido nuevas categorías, como la clasificación por puntos y la clasificación de montaña, para reconocer a los especialistas en diferentes aspectos del deporte.\n\nHoy en día, el Tour de Francia continúa siendo un evento destacado en el calendario ciclista mundial. Los corredores compiten en un recorrido de tres semanas a través de paisajes impresionantes, enfrentando desafíos únicos en cada etapa. El Tour de Francia no solo es una competencia deportiva, sino también una celebración de la pasión por el ciclismo y una oportunidad para que los aficionados se unan y animen a sus héroes.\n\nA lo largo de más de un siglo de historia, el Tour de Francia ha brindado momentos inolvidables y ha dejado una huella imborrable en el mundo del ciclismo. Es un evento que captura la emoción, la belleza y la dureza del deporte, y continúa siendo una prueba definitiva de los límites humanos y la determinación de los atletas.', 'Server/Images_Uploaded/1688068461531.jpeg', '2023-06-29 21:54:22', '2023-07-03 00:45:37'),
(80, 'Tour de Francia de 1971. Merckx vs Ocaña', 'En la rica historia del Tour de Francia, una de las rivalidades más legendarias se vivió entre Eddy Merckx y Luis Ocaña en la edición de 1971. Merckx, conocido como \"El Caníbal\", era un ciclista belga dominante y campeón defensor del Tour. Por otro lado, Ocaña, un talentoso ciclista español, buscaba destronar al legendario Merckx.\n\nDurante la etapa 14, que se disputaba en los Pirineos, Ocaña atacó en el temible Col du Mente, dejando atrás a Merckx. La diferencia entre ambos ciclistas se ampliaba a medida que avanzaba la etapa, y parecía que Ocaña estaba en camino de ganar la etapa y poner en peligro el liderazgo de Merckx en la clasificación general.\n\nSin embargo, cuando Ocaña descendía a gran velocidad por el Col de Menté, sufrió una caída dramática en una curva. La bicicleta de Ocaña quedó destrozada, pero el ciclista se levantó rápidamente y, con la ayuda de un espectador, tomó una bicicleta de repuesto. A pesar de su valentía, Ocaña perdió un tiempo precioso y Merckx pudo recuperar la ventaja.\n\nA pesar del incidente, Ocaña continuó luchando y ganó la etapa. Sin embargo, Merckx demostró su superioridad y terminó ganando su tercer Tour de Francia consecutivo. Aunque Ocaña quedó en segundo lugar, su valentía y determinación dejaron una marca indeleble en la historia del ciclismo.\n\nEsta historia emocionante muestra el espíritu competitivo y la tenacidad de dos grandes ciclistas. El duelo entre Merckx y Ocaña en el Tour de Francia de 1971 es recordado como uno de los momentos más dramáticos de la competencia, destacando la imprevisibilidad y la emoción que caracterizan a esta legendaria carrera de ciclismo.', 'Server/Images_Uploaded/1688367183437.jpg', '2023-07-03 08:53:03', '2023-07-03 08:53:03'),
(83, '¿Qué es el gravel y por qué esta de moda?', 'El ciclismo gravel, también conocido como ciclismo de grava, es una disciplina en auge que combina elementos del ciclismo de carretera y del ciclismo de montaña. En lugar de transitar exclusivamente por asfalto o senderos de montaña, los ciclistas de gravel se aventuran en caminos de grava, tierra, piedras y terrenos mixtos.\n\nEsta modalidad ha ganado popularidad en los últimos años debido a varias razones. En primer lugar, el ciclismo gravel ofrece una sensación de aventura y exploración, permitiendo a los ciclistas descubrir nuevos lugares y disfrutar de paisajes impresionantes que no suelen ser accesibles en bicicletas de carretera convencionales.\n\nAdemás, las bicicletas gravel son versátiles y están diseñadas para adaptarse a diferentes tipos de terreno. Estas bicicletas suelen tener neumáticos más anchos y capacidad para montar guardabarros y racks, lo que las convierte en una opción ideal tanto para recorridos largos como para viajes de cicloturismo.\n\nLa naturaleza inclusiva del ciclismo gravel también ha contribuido a su popularidad. Las carreras y eventos de gravel suelen ser más relajados y menos competitivos que las carreras de carretera tradicionales, lo que atrae a una amplia gama de ciclistas, desde principiantes hasta expertos. Además, la comunidad gravel es conocida por su espíritu amistoso y colaborativo, lo que fomenta un ambiente acogedor y divertido.\n\nEn resumen, el ciclismo gravel ha ganado popularidad debido a su espíritu aventurero, la capacidad de explorar nuevos lugares, la versatilidad de las bicicletas y la naturaleza inclusiva de la comunidad. Esta tendencia continuará creciendo a medida que más ciclistas busquen escapar de las rutas tradicionales y buscar nuevas experiencias sobre dos ruedas.', 'Server/Images_Uploaded/1688372922988.jpg', '2023-07-03 10:28:43', '2023-07-03 10:29:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
