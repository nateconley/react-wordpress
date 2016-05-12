<?php
function react_theme_js() {
	wp_enqueue_script('client.js', get_template_directory_uri() . '/src/client.min.js', [], '', true);
}

add_action( 'wp_enqueue_scripts', 'react_theme_js' );
?>