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

        $order_css = get_stylesheet_directory() . '/assets/css/order-confirmation.css';

        wp_enqueue_style(
            'pddl-order-confirmation',
            get_stylesheet_directory_uri() . '/assets/css/order-confirmation.css',
            array( 'pddl-child-style' ),
            file_exists( $order_css ) ? filemtime( $order_css ) : null
        );
    }
}


/**
 * Load Order Confirmation styling inside the WordPress Site Editor
 * so the template preview matches the real page.
 */
add_action(
    'enqueue_block_editor_assets',
    'pddl_enqueue_order_confirmation_editor_styles'
);

function pddl_enqueue_order_confirmation_editor_styles() {

    $order_css = get_stylesheet_directory() . '/assets/css/order-confirmation.css';

    wp_enqueue_style(
        'pddl-order-confirmation-editor',
        get_stylesheet_directory_uri() . '/assets/css/order-confirmation.css',
        array(),
        file_exists( $order_css ) ? filemtime( $order_css ) : null
    );
}