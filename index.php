<?php
$pageTitle = ""; // Até 90 mas o google corta em 63 caracteres do título.
$pageDescription = ""; // Até 250 mas o google corta em 152 caracteres do título.
$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$section = "index"; // Colocar o nome da URL (página) que será ativada, para mudar o menu.
include('inc/header.php'); ?>
<!-- Colocar o conteúdo da página abaixo -->

<?php include('inc/footer.php'); ?>
