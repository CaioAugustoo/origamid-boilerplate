<!DOCTYPE html>
<!--[if IE]>	<html class="no-js ie"> <![endif]-->
<!--[if !IE]><!-->	<html class="no-js" lang="pt-br"> <!--<![endif]-->

<?php // As tags the_field são utilizadas através do plugin custom fields ?>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?php bloginfo('name'); ?> - <?php the_field('title_seo'); ?></title>
	<meta name="description" content="<?php bloginfo('name'); ?> - <?php the_field('description_seo'); ?>">
	<meta name="keywords" content="<?php the_field('keywords_seo'); ?>"/>
	<meta name="author" content="Origamid"/>

	<meta property="og:title" content="<?php bloginfo('name'); ?> - <?php the_field('title_seo'); ?>"/>
	<meta property="og:description" content="<?php bloginfo('name'); ?> - <?php the_field('description_seo'); ?>"/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="<?php echo get_site_url(); ?>/"/>
	<meta property="og:image" content="http://domain/img/og-image.png"/>
	<meta property="og:site_name" content="<?php bloginfo('name'); ?>"/>

	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="favicon.ico">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">

	<!-- Header do Wordpress -->
	<?php wp_head(); ?>
	<!-- Header do Wordpress -->
</head>
<body>