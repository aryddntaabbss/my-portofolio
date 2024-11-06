// Theme Toggle for Desktop and Mobile
const themeToggleDesktop = document.getElementById( "theme-toggle-desktop" );
const iconLightDesktop = document.getElementById( "icon-light-desktop" );
const iconDarkDesktop = document.getElementById( "icon-dark-desktop" );

const themeToggleMobile = document.getElementById( "theme-toggle-mobile" );
const iconLightMobile = document.getElementById( "icon-light-mobile" );
const iconDarkMobile = document.getElementById( "icon-dark-mobile" );

// Function to toggle theme
function toggleTheme ()
{
    document.documentElement.classList.toggle( "dark" );
    const isDarkMode = document.documentElement.classList.contains( "dark" );

    if ( isDarkMode )
    {
        localStorage.setItem( "theme", "dark" );
        iconLightDesktop.classList.add( "hidden" );
        iconDarkDesktop.classList.remove( "hidden" );
        iconLightMobile.classList.add( "hidden" );
        iconDarkMobile.classList.remove( "hidden" );
    } else
    {
        localStorage.setItem( "theme", "light" );
        iconLightDesktop.classList.remove( "hidden" );
        iconDarkDesktop.classList.add( "hidden" );
        iconLightMobile.classList.remove( "hidden" );
        iconDarkMobile.classList.add( "hidden" );
    }
}

// Add event listeners for both desktop and mobile theme toggles
if ( themeToggleDesktop ) themeToggleDesktop.addEventListener( "click", toggleTheme );
if ( themeToggleMobile ) themeToggleMobile.addEventListener( "click", toggleTheme );

// Set initial theme based on localStorage
if ( localStorage.getItem( "theme" ) === "dark" )
{
    document.documentElement.classList.add( "dark" );
    iconLightDesktop.classList.add( "hidden" );
    iconDarkDesktop.classList.remove( "hidden" );
    iconLightMobile.classList.add( "hidden" );
    iconDarkMobile.classList.remove( "hidden" );
} else
{
    document.documentElement.classList.remove( "dark" );
    iconLightDesktop.classList.remove( "hidden" );
    iconDarkDesktop.classList.add( "hidden" );
    iconLightMobile.classList.remove( "hidden" );
    iconDarkMobile.classList.add( "hidden" );
}

// Scroll-to-Top Button Control
const scrollTopBtn = document.getElementById( 'scrollTopBtn' );

window.addEventListener( "scroll", () =>
{
    if ( document.documentElement.scrollTop > 200 )
    {
        scrollTopBtn.classList.remove( 'hidden' );
        scrollTopBtn.classList.add( 'visible' );
    } else
    {
        scrollTopBtn.classList.remove( 'visible' );
        scrollTopBtn.classList.add( 'hidden' );
    }
} );

// Scroll to top when button clicked
if ( scrollTopBtn )
{
    scrollTopBtn.addEventListener( 'click', () =>
    {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } );
    } );
}

// Mobile Menu Toggle
document.addEventListener( "DOMContentLoaded", () =>
{
    const menuToggle = document.getElementById( "menu-toggle" );
    const mobileMenu = document.getElementById( "mobile-menu" );

    if ( menuToggle && mobileMenu )
    {
        menuToggle.addEventListener( "click", () =>
        {
            // Toggle visibility using hidden and block classes
            mobileMenu.classList.toggle( "hidden" );
            mobileMenu.classList.toggle( "block" );
        } );

        // Close the menu when clicking outside
        document.addEventListener( "click", ( event ) =>
        {
            if ( !mobileMenu.contains( event.target ) && event.target !== menuToggle )
            {
                mobileMenu.classList.add( "hidden" );
                mobileMenu.classList.remove( "block" );
            }
        } );
    }
} );

// Disable Right-Click
// document.addEventListener( 'contextmenu', ( e ) =>
// {
//     e.preventDefault();
// } );

// Disable Developer Tools Shortcuts
// document.addEventListener( 'keydown', ( e ) =>
// {
//     if ( e.key === 'F12' ||
//         ( e.ctrlKey && e.shiftKey && ( e.key === 'I' || e.key === 'J' ) ) ||
//         ( e.ctrlKey && e.key === 'U' ) )
//     {
//         e.preventDefault();
//     }
// } );
