// This controls the Navbar for Mobile Screens
var NavbarMobileHTML = '<h3><a href="/">Home</a></h3> <h3><a href="/Pages/All Posts/!Posts.html">Posts</a></h3> <h3><a href="/Pages/Misc/!misc.html">Misc</a></h3>';
// Here's the code for NavbarMobile
/* 
<h3><a href="/">Home</a></h3>
<h3><a href="/Pages/All Posts/!Posts.html">Posts</a></h3>
<h3><a href="/Pages/Misc/!misc.html">Misc</a></h3>
*/


// This controls the Navbar for Desktop Screens
var NavbarDesktopHTML = '<h3><a href="/">Home</a></h3><hr> <h3><a href="/Pages/All Posts/!Posts.html">Shrines</a></h3><hr> <h3><a href="/Pages/All Posts/!Posts.html">Projects</a></h3><hr> <h3><a href="/Pages/All Posts/!Posts.html">Library</a></h3><hr><h3><a href="/Pages/All Posts/!Posts.html">Blog</a></h3><hr><h3><a href="/Pages/Misc/!misc.html">Misc</a></h3>';
// Here's the code for NavbarDesktop
/*
<h3><a href="/">Home</a></h3><hr> 
<h3><a href="/Pages/All Posts/!Posts.html">Shrines</a></h3><hr> 
<h3><a href="/Pages/All Posts/!Posts.html">Projects</a></h3><hr> 
<h3><a href="/Pages/All Posts/!Posts.html">Library</a></h3><hr>
<h3><a href="/Pages/All Posts/!Posts.html">Blog</a></h3><hr>
<h3><a href="/Pages/Misc/!misc.html">Misc</a></h3>
*/

// Code for the Blinky Marquee
var MarqueeHTML = '<div><img src="/Attachments/Blinkies/0142-virusgender.gif"></div><div><img src="/Attachments/Blinkies/0186-angelsmiley.gif"></div><div><img src="/Attachments/Blinkies/0189-whale.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-aD.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-az.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-gT.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-GV(1).gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-Gv.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-lY.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-nl.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-OM.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-PG.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-uB.gif"></div><div><img src="/Attachments/Blinkies/blinkiesCafe-zw.gif"></div><div><img src="/Attachments/Blinkies/demoncore.gif"></div><div><img src="https://files.catbox.moe/hwsop4.gif"></div>';
/* 
<div><img src="/Attachments/Blinkies/0142-virusgender.gif"></div>
<div><img src="/Attachments/Blinkies/0186-angelsmiley.gif"></div>
<div><img src="/Attachments/Blinkies/0189-whale.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-aD.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-az.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-gT.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-GV(1).gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-Gv.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-lY.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-nl.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-OM.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-PG.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-uB.gif"></div>
<div><img src="/Attachments/Blinkies/blinkiesCafe-zw.gif"></div>
<div><img src="/Attachments/Blinkies/demoncore.gif"></div>
<div><img src="https://files.catbox.moe/hwsop4.gif"></div>  
*/

// Code for the RightBox since it's the same on all pages.
var RightBoxHTML = '<h1><u>Pic of the Day</u></h1> <img class="PostImageBlock" src="https://files.catbox.moe/3q7hvi.jpg"> <h1><u>Recent Posts</u></h1> <div class="RecentPostThing" id="RecentPosts"></div>';
/*
	<h1><u>Pic of the Day</u></h1> 
    <img class="PostImageBlock" src="https://files.catbox.moe/3q7hvi.jpg"> 
    <h1><u>Recent Posts</u></h1> 
    <div class="RecentPostThing" id="RecentPosts"></div>
*/

// this line controls the site title
var SiteTitleHTML = '<a href="/" class="SiteTitleLink">Tinker Jae</a>';
// This links the site title on your page to the SiteTitle Variable
document.getElementById("SiteTitle").innerHTML = SiteTitleHTML;
// This links the Navbar on your mobile page to the NavbarMobile Variable
document.getElementById("NavbarMobile").innerHTML = NavbarMobileHTML;
// This links the Navbar on your desktop page to the NavbarDesktop Variable
document.getElementById("NavbarDesktop").innerHTML = NavbarDesktopHTML;
// This links the Marquee on your page to the Marquee Variable
document.getElementById("Marquee").innerHTML = MarqueeHTML;
// This links the RightBox on your page to the RightBox Variable
document.getElementById("RightBox").innerHTML = RightBoxHTML;


//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY


// This holds every single post we will ever make
// Each Category, All, Blog, Shrine, Project, Library, and Misc define the category of the post and have a subsequent array and posts variable
//When adding new posts, change the stuff, and add the newest at the bottom.
var postsArray = [
    {Link:"https://www.google.com/", Title:"Google", Description:"It's an internet search engine.", Date:"09/04/1998", All:true, Blog:false, Shrine:false, Project:false, Library:false, Misc:false},
    {Link:"https://www.youtube.com/", Title:"Youtube", Description:"It's a video hosting platform.", Date:"02/14/2005", All:true, Blog:false, Shrine:false, Project:false, Library:false, Misc:false},
    {Link:"https://neocities.org/", Title:"Neocities", Description:"It's a social media/web hosting platform.", Date:"05/24/2013",  All:true, Blog:false, Shrine:false, Project:false, Library:false, Misc:false}

    // ADD NEW POST HERE^^^^^^^^^^^^^
];



// this adds tags to make our post readable.
// it takes the data from postsArray, and adds it to the post template that appears on each page.
function formattingFunction(a){
    return ("- <a href='"+a.Link+"'>"+a.Title+"</a> <br> &nbsp;&nbsp;"+a.Description+"<br> &nbsp;&nbsp;"+a.Date+"<br>");
}

// this adds tags for recent posts, h4 being the recent post tag.
function recentFormattingFunction(a){
    return ("<p>- <a href='"+a.Link+"'>"+a.Title+"</a></p>");
}


// each category has it's own array, containing all posts with true enabled for said category.
let allArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].All === true) {
        allArray = [...allArray, postsArray[i]];
    }
}
let blogArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Blog === true) {
        blogArray = [...blogArray, postsArray[i]];
    }
}
let shrineArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Shrine === true) {
        shrineArray = [...shrineArray, postsArray[i]];
    }
}
let projectArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Project === true) {
        projectArray = [...projectArray, postsArray[i]];
    }
}
let libraryArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Library === true) {
        libraryArray = [...libraryArray, postsArray[i]];
    }
}
let miscArray = []; 
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Misc === true) {
        miscArray = [...miscArray, postsArray[i]];
    }
}
let recentArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].All === true) {
        recentArray = [...recentArray, postsArray[i]];
    }
}

// this makes it so it goes from most recent (bottom) to least recent (top)
allArray.reverse();
blogArray.reverse();
shrineArray.reverse();
projectArray.reverse();
libraryArray.reverse();
miscArray.reverse();
recentArray.reverse();


// each category has it's own for loop with a variable for the posts of said category to go into
let allPosts = "";
for (let i=0; i < allArray.length; i++){
    allPosts += formattingFunction(allArray[i]);
}
let blogPosts = "";
for (let i=0; i < blogArray.length; i++){
    blogPosts += formattingFunction(blogArray[i]);
}
let shrinePosts = "";
for (let i=0; i < shrineArray.length; i++){
    shrinePosts += formattingFunction(shrineArray[i]);
}
let projectPosts = "";
for (let i=0; i < projectArray.length; i++){
    projectPosts += formattingFunction(projectArray[i]);
}
let libraryPosts = "";
for (let i=0; i < libraryArray.length; i++){
    libraryPosts += formattingFunction(libraryArray[i]);
}
let miscPosts = "";
for (let i=0; i < miscArray.length; i++){
    miscPosts += formattingFunction(miscArray[i]);
}
// what makes recentPosts different is that after "recentPostsCutoff", it stops displaying posts as not to flood the whole screen
// it takes from all posts with the all:true property, and then takes the top XYZ amount, and shows it where it needs to go.
let recentPostsCutoff = 3;
let recentPosts = "";
for (let i=0; i < recentPostsCutoff; i++){
    recentPosts += recentFormattingFunction(recentArray[i]);
}

// Each of these have their own debug div on EACH page.
// for some reason if one of the variables isn't called, then any of the variables after that will not work. Like at all
document.getElementById("AllPosts").innerHTML = allPosts;
document.getElementById("BlogPosts").innerHTML = blogPosts;
document.getElementById("ShrinePosts").innerHTML = shrinePosts;
document.getElementById("ProjectPosts").innerHTML = projectPosts;
document.getElementById("LibraryPosts").innerHTML = libraryPosts;
document.getElementById("MiscPosts").innerHTML = miscPosts;
document.getElementById("RecentPosts").innerHTML = recentPosts;

// Put this in every page.
/* 
<!--DO NOT REMOVE DEBUG IT WILL BREAK ALL JAVASCRIPT-->
<div class="debug">
<!--DO NOT REMOVE DEBUG IT WILL BREAK ALL JAVASCRIPT-->
<div class="debug" id="RecentPosts"></div>
<div class="debug" id="AllPosts"></div>
<div class="debug" id="BlogPosts"></div>
<div class="debug" id="ShrinePosts"></div>
<div class="debug" id="ProjectPosts"></div>
<div class="debug" id="LibraryPosts"></div>
<div class="debug" id="MiscPosts"></div>
<div class="debug" id="Marquee"></div>
<div class="debug" id="SiteTitle"></div>
<div class="debug" id="NavbarMobile"></div>
<div class="debug" id="NavbarDesktop"></div>
<!--DO NOT REMOVE DEBUG IT WILL BREAK ALL JAVASCRIPT-->
</div>
<!--DO NOT REMOVE DEBUG IT WILL BREAK ALL JAVASCRIPT-->

*/

//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY   