(function( jQuery ) {

	jQuery.fn.showcase = function( options ) {
	
		// Default configuration properties
		var defaults =
		{
			auto_slide:			true,
			navigation_arrows:	true
		};
		
		// Declare and set up some important variables
		showcase = this;
		options = jQuery.extend( defaults, options );
		
		// Add a wrapper .showcase-wrapper
		showcase.wrapInner( '<div class="showcase-slide-wrapper"></div>' );
		
		// Style the wrapper .showcase-wrapper
		jQuery( '.showcase-slide-wrapper', showcase ).width( 10000 );//.css( 'opacity', 0 );
		
		
		if ( options.navigation_arrows ) {
			
			// Add navigation arrows
			showcase.prepend( '<div class="arrow-previous"></div><div class="arrow-next"></div>' )
			
			// Style navigation arrows
			jQuery( '.arrow-left, .arrow-right' ).css( 'opacity', 0 );	
		}
		
		// Setup dimension for showcase
		setup_showcase_dimensions( options, showcase );
		
		// Set timeout to prevent positioning lag
		setTimeout( function() {
		
			// Position navigation elements
			position_navigation( options, showcase );
			
		}, 200 );
		
		// Register window resize function
		jQuery( window ).resize( function() { 
		
			// Reset dimension on window resize
			setup_showcase_dimensions( options, showcase );
			
			// Reposition navigation elements
			position_navigation( options, showcase );
		});
	}
	
	function setup_showcase_dimensions( options, showcase ) {
		
		jQuery( '.showcase-slide', showcase ).width( showcase.width() );
	}
	
	function position_navigation( options, showcase ) {
		
		if ( options.navigation_arrows ) {

			jQuery( '.arrow-left, .arrow-right' ).css( 'top', ( showcase.height() / 2 ) - ( jQuery( '.arrow-left' ).height() / 2 ) );
			
			if ( parseInt( jQuery( '.arrow-left' ).css( 'opacity' ) ) === 0 ) {
				
				jQuery( '.arrow-left, .arrow-right' ).animate( { opacity: 1 }, 200 );
			}
		}
	}
	
})(jQuery);