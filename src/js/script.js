// Theme Toggle
const themeToggle = document.getElementById( "theme-toggle" );
const iconLight = document.getElementById( "icon-light" );
const iconDark = document.getElementById( "icon-dark" );

// Toggle theme and icons
themeToggle.addEventListener( "click", () =>
{
    document.documentElement.classList.toggle( "dark" );

    if ( document.documentElement.classList.contains( "dark" ) )
    {
        localStorage.setItem( "theme", "dark" );
        iconLight.classList.add( "hidden" );
        iconDark.classList.remove( "hidden" );
    } else
    {
        localStorage.setItem( "theme", "light" );
        iconLight.classList.remove( "hidden" );
        iconDark.classList.add( "hidden" );
    }
} );

// Set initial theme based on localStorage
if ( localStorage.getItem( "theme" ) === "dark" )
{
    document.documentElement.classList.add( "dark" );
    iconLight.classList.add( "hidden" );
    iconDark.classList.remove( "hidden" );
} else
{
    document.documentElement.classList.remove( "dark" );
    iconLight.classList.remove( "hidden" );
    iconDark.classList.add( "hidden" );
}

// Mobile Menu Toggle
document.addEventListener( "DOMContentLoaded", () =>
{
    const menuToggle = document.getElementById( "menu-toggle" );
    const mobileMenu = document.getElementById( "mobile-menu" );

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
} );
