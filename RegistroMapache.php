<?php
$servername = "127.0.0.1";
$username = "alumno";
$password = "1234";
$database = "mapachetrip";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexion
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // datoss
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $pais = $_POST["pais"];
    $num_personas = $_POST["num_personas"];
    $tipo_paquete = $_POST["tipo_paquete"];
    $comentario = $_POST["comentario"];

    // Inserta los datos en la base de datos
    $sql = "INSERT INTO registro (nombre, email, pais, num_personas, tipo_paquete, comentario)
            VALUES ('$nombre', '$email', '$pais', $num_personas, '$tipo_paquete', '$comentario')";

    if ($conn->query($sql) === TRUE) {
        $mensaje = "Registro exitoso";
        $factura = true;
    } else {
        $mensaje = "Error: " . $sql . "<br>" . $conn->error;
        $factura = false;
    }
}

// Cerrar conexión
$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Comprobante de Registro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .factura {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
        }
        .factura h1 {
            text-align: center;
        }
        .factura .detalle {
            margin-bottom: 15px;
        }
        .factura .detalle span {
            display: inline-block;
            width: 150px;
            font-weight: bold;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo img {
            max-width: 100px;
        }
        .btn-print {
            text-align: center;
            margin-top: 20px;
        }
        .btn-print button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="factura">
        <div class="logo">
            <img src="images/logo.png" alt="Logotipo de la Empresa">
        </div>
        <h1>Comprobante de Registro</h1>
        <?php if (isset($mensaje)): ?>
            <p><?php echo $mensaje; ?></p>
        <?php endif; ?>
        <?php if ($factura): ?>
            <div class="detalle"><span>Nombre:</span> <?php echo htmlspecialchars($nombre); ?></div>
            <div class="detalle"><span>Email:</span> <?php echo htmlspecialchars($email); ?></div>
            <div class="detalle"><span>País:</span> <?php echo htmlspecialchars($pais); ?></div>
            <div class="detalle"><span>Número de Personas:</span> <?php echo htmlspecialchars($num_personas); ?></div>
            <div class="detalle"><span>Tipo de Paquete:</span> <?php echo htmlspecialchars($tipo_paquete); ?></div>
            <div class="detalle"><span>Comentario:</span> <?php echo htmlspecialchars($comentario); ?></div>
        <?php endif; ?>
        <div class="btn-print">
            <button onclick="window.print()">Imprimir</button>
        </div>
    </div>
</body>
</html>

