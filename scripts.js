
// This controls the Navbar for Mobile Screens
var NavbarMobileHTML = '<h1><a href="/">Home</a></h1> <h1><a href="/Pages/All Posts/!Posts.html">Posts</a></h1> <h1><a href="/Pages/Misc/!misc.html">Misc</a></h1>'
// Here's the code for NavbarMobile
/* 
<h1><a href="/">Home</a></h1>
<h1><a href="/Pages/All Posts/!Posts.html">Posts</a></h1>
<h1><a href="/Pages/Misc/!misc.html">Misc</a></h1>
*/


// This controls the Navbar for Desktop Screens
var NavbarDesktopHTML = '<h1><a href="/">Home</a></h1><hr> <h1><a href="/Pages/All Posts/!Posts.html">Posts</a></h1><hr> <h1><a href="/Pages/Misc/!misc.html">Misc</a></h1>'
// Here's the code for NavbarDesktop
/*
<h1><a href="/">Home</a></h1>
<hr>
<h1><a href="/Pages/All Posts/!Posts.html">Posts</a></h1>
<hr>
<h1><a href="/Pages/Misc/!misc.html">Misc</a></h1>
*/


// this line controls the site title
var SiteTitleHTML = 'Tinker Jae'

// This links the site title on your page to the SiteTitle Variable
document.getElementById("SiteTitle").innerHTML = SiteTitleHTML;

// This links the Navbar on your mobile page to the NavbarMobile Variable
document.getElementById("NavbarDesktop").innerHTML = NavbarMobileHTML; 

// This links the Navbar on your desktop page to the NavbarDesktop Variable
document.getElementById("NavbarDesktop").innerHTML = NavbarDesktopHTML; 



