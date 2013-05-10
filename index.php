<?php
$pageTitle = ""; // Até 65 caracteres do título.
$pageDescription = ""; // Até 65 caracteres do título.
$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$section = "index"; // Colocar o nome da URL (página) que será ativada, para mudar o menu.
include('inc/header.php'); ?>
<!-- Colocar o conteúdo da página abaixo -->

<?php include('inc/footer.php'); ?>
