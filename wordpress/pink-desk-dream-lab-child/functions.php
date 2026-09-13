<?php

/**
 * Pink Desk Dream Lab Child Theme
 */

add_action( 'wp_enqueue_scripts', 'pddl_enqueue_styles' );

function pddl_enqueue_styles() {

    wp_enqueue_style(
        'pddl-child-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );

    if ( function_exists( 'is_order_received_page' ) && is_order_received_page() ) {

        wp_enqueue_style(
            'pddl-order-confirmation',
            get_stylesheet_directory_uri() . '/assets/css/order-confirmation.css',
            array( 'pddl-child-style' ),
            wp_get_theme()->get( 'Version' )
        );
    }
}