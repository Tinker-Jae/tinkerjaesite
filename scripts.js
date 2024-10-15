let debugHTML = '<div class="debug" id="RecentPosts"></div><div class="debug" id="AllPosts"></div><div class="debug" id="JournalPosts"></div><div class="debug" id="ArticlePosts"></div><div class="debug" id="ProjectPosts"></div><div class="debug" id="WritingPosts"></div><div class="debug" id="MiscPosts"></div><div class="debug" id="Marquee"></div><div class="debug" id="SiteTitle"></div><div class="debug" id="NavbarMobile"></div> <div class="debug" id="NavbarDesktop"></div> <div class="debug" id="RightBox"></div> <div class="debug" id="LeftBox"></div> <div class="debug" id="ProfPic"></div>';
/*
document.getElementById("LeftBox").innerHTML = LeftBoxHTML;
// LINKS TO ANY ITEM WITH A PROF PIC ID TAG ON IT
document.getElementById("ProfPic").src = ProfPicSRC;


*/

document.getElementById("debug2").innerHTML = debugHTML;

// This controls the Navbar for Mobile Screens
var NavbarMobileHTML = '<h3><a href="/">Home</a></h3><!-- <h3><a href="/Pages/!Categories.html">Categories</a></h3> --><h3><a href="/Pages/!Posts.html">Posts</a></h3><!-- <h3><a href="/Pages/!Projects.html">Projects</a></h3> --><!-- <h3><a href="/Pages/!Articles.html">Articles</a></h3> --><!-- <h3><a href="/Pages/!Journal.html">Journal</a></h3> --><!-- <h3><a href="/Pages/!Writings.html">Writings</a></h3> --><h3><a href="/Pages/!Misc.html">Misc</a></h3>';
// Here's the code for NavbarMobile
/* 
<h3><a href="/">Home</a></h3><!-- <h3><a href="/Pages/!Categories.html">Categories</a></h3> --><h3><a href="/Pages/!Posts.html">Posts</a></h3><!-- <h3><a href="/Pages/!Projects.html">Projects</a></h3> --><!-- <h3><a href="/Pages/!Articles.html">Articles</a></h3> --><!-- <h3><a href="/Pages/!Journal.html">Journal</a></h3> --><!-- <h3><a href="/Pages/!Writings.html">Writings</a></h3> --><h3><a href="/Pages/!Misc.html">Misc</a></h3>
*/


// This controls the Navbar for Desktop Screens
var NavbarDesktopHTML = '<h3><a href="/">Home</a></h3><hr><h3><a href="/Pages/Archive/About.html">About</a></h3><hr><h3><a href="/Pages/!Projects.html">Projects</a></h3><hr><h3><a href="/Pages/!Articles.html">Articles</a></h3><hr><h3><a href="/Pages/!Journal.html">Blog</a></h3><hr><h3><a href="/Pages/!Misc.html">Misc</a></h3>';
// Here's the code for NavbarDesktop
/*
<h3><a href="/">Home</a></h3><hr>
<h3><a href="/Pages/Archive/About.html">About</a></h3><hr>
<h3><a href="/Pages/!Projects.html">Projects</a></h3><hr>
<h3><a href="/Pages/!Articles.html">Articles</a></h3><hr>
<h3><a href="/Pages/!Journal.html">Blog</a></h3><hr>
<h3><a href="/Pages/!Misc.html">Misc</a></h3>
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

var ProfPicSRC = 'https://files.catbox.moe/o2hqdb.jpg';

// Code for the LeftBox since it's the same on all pages.
var LeftBoxHTML = '<img class="ProfPic Border" id="ProfPic"> <div class="NavbarDesktop Border" id="NavbarDesktop"></div>';
/*
<img class="ProfPic Border" src="/Attachments/profpic.png">
<div class="NavbarDesktop Border" id="NavbarDesktop"></div>
*/

// Code for the RightBox since it's the same on all pages.
var RightBoxHTML = '<h1><u>Pic of the Day</u></h1> <div class="PostImageBlock"><a href="https://twitter.com/hitsujigoods/status/1605248664158486536?s=20"><img src="https://files.catbox.moe/3q7hvi.jpg"></a></div> <h1><u>Recent Posts</u></h1> <div class="RecentPostThing" id="RecentPosts"></div>';
/*
	<h1><u>Pic of the Day</u></h1>
    <div class="PostImageBlock">
    <a href="https://twitter.com/hitsujigoods/status/1605248664158486536?s=20"><img src="https://files.catbox.moe/3q7hvi.jpg"></a>
    </div>
    <h1><u>Recent Posts</u></h1>
    <div class="RecentPostThing" id="RecentPosts"></div>
*/

// this line controls the site title
var SiteTitleHTML = '<a href="/" class="SiteTitleLink">Tinker Jae</a>';
// This links the site title on your page to the SiteTitle Variable
document.getElementById("SiteTitle").innerHTML = SiteTitleHTML;
// Links to the Leftbox on page, with the LeftBoxHTML Variable
document.getElementById("LeftBox").innerHTML = LeftBoxHTML;
// LINKS TO ANY ITEM WITH A PROF PIC ID TAG ON IT
document.getElementById("ProfPic").src = ProfPicSRC;
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
// Each Category, All, Journal, Article, Project, Writing, and Misc define the category of the post and have a subsequent array and posts variable
//When adding new posts, change the stuff, and add the newest at the bottom. 
// Blog5-17-23.html
// Current Tags:
// Blog, Philosophy, Changelog, Misc, Music, Vent, Site Updates, Life Updates, Thinking Out Loud, Audio Log, Project Stuff, Announcement, APC, Project Updates, Techie Stuff, Feelings
var postsArray = [
    {Link:"/Pages/Archive/Blog4-2-23.html", Title:"Blog Post", Description:"A blog post.", Date:"4/2/23",  Tags:"Blog, Vent, Philosophy, Life Updates",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/V1.03Changelog.html", Title:"V1.03 Changelog", Description:"Changelog for v1.03", Date:"idk",  Tags:"Site Updates, Changelog",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/V1.04Changelog.html", Title:"V1.04 Changelog", Description:"Changelog for v1.04", Date:"Idk",  Tags:"Site Updates, Changelog",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/CategoryTemplate.html", Title:"Category Template", Description:"Template for Categories.", Date:"5/11/23",  Tags:"Misc",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/PostTemplate.html", Title:"Post Template", Description:"Template for Posts.", Date:"5/11/23",  Tags:"Misc",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/v1.05Changelog.html", Title:"v1.05 Changelog", Description:"Changelog for v1.05", Date:"5/11/23",  Tags:"Site Updates, Changelog",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/Blog5-11-23.html", Title:"I'm finally finished", Description:"A blog post after the v1.05 update.", Date:"5/11/23",  Tags:"Blog, Site Updates, Vent",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog5-13-23.html", Title:"11k Views!!!", Description:"The site has hit 11k views!", Date:"5/13/23",  Tags:"Blog, Site Updates",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog6-12-23.html", Title:"A little update, also me overthinking.", Description:"Updates and me overthinking and stuff.", Date:"6/12/23", Tags:"Blog, Vent, Philosophy, Life Updates",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog6-23-23.html", Title:"A little update, also me overthinking. The sequel!", Description:"Like the post before, but different.", Date:"6/23/23", Tags:"Blog, Philosophy, Life Updates, Audio Log",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog6-26-23.html", Title:"Bro imma be real I just be talkin.", Description:"Me rambling about creating stuff and realizing that I just gotta talk about it and move on. (GONE WILD GONE SEXUAL!?!??!?!?!)", Date:"6/26/23", Tags:"Blog, Thinking Out Loud, Audio Log",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog7-12-23.html", Title:"Hii! What's up y'all!", Description:"New Schedule, Stuff going on, also a project!", Date:"7/12/23", Tags:"Blog, Thinking Out Loud, Site Updates",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog7-27-23.html", Title:"An Update on the APC!", Description:"The APC v0.1 is here!", Date:"7/27/23", Tags:"Blog, Project Updates, Techie Stuff, APC",  All:true, Project:true, Article:false, Journal:false, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog8-16-23.html", Title:"Doing rough, and shoutout Tulip!", Description:"A vent post abt mental health and college n' stuff. Also shoutout Tulip!", Date:"8/16/23", Tags:"Blog, Life Updates, Feelings",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/About.html", Title:"About", Description:"All about me, Jae, the Webmaster!", Date:"6/13/24", Tags:"",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog6-20-24.html", Title:"This just in, reading isn't that bad!", Description:"I finished a book!!!", Date:"6/21/24", Tags:"",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},
    {Link:"/Pages/Archive/TinkerJaeBlinkie.html", Title:"My Blinkie!", Description:"This just in, I made a blinkie!", Date:"7/27/24", Tags:"",  All:true, Project:false, Article:false, Journal:false, Writing:false, Misc:true},
    {Link:"/Pages/Archive/Blog7-27-24.html", Title:"Monetization is bullshit!", Description:"A blog/article on why monetization is, in my opinion, bullshit.", Date:"7/27/24", Tags:"",  All:true, Project:false, Article:true, Journal:false, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog1+9-11-24.html", Title:"A Presentation on Anarchism", Description:"Sorry it's been a while, here's something small.", Date:"9/11/24", Tags:"",  All:true, Project:true, Article:false, Journal:false, Writing:false, Misc:false},
    {Link:"/Pages/Archive/Blog2+9-11-24.html", Title:"A quick update 😜", Description:"Been super busy y'all omg, projects will arrive relatively soon I swearsies.", Date:"9/11/24", Tags:"",  All:true, Project:false, Article:false, Journal:true, Writing:false, Misc:false},

    // ADD NEW POST HERE^^^^^^^^^^^^^
];

// this adds tags to make our post readable.
// it takes the data from postsArray, and adds it to the post template that appears on each page.
function formattingFunction(a){
    return ("<div><a href='"+a.Link+"'>"+a.Title+"</a>("+a.Date+") <br>"+a.Description+" <!--<br>Tags: "+a.Tags+"--> </div>");
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
let journalArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Journal === true) {
        journalArray = [...journalArray, postsArray[i]];
    }
}
let articleArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Article === true) {
        articleArray = [...articleArray, postsArray[i]];
    }
}
let projectArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Project === true) {
        projectArray = [...projectArray, postsArray[i]];
    }
}
let writingArray = [];
for (let i=0; i<postsArray.length; i++) {
    if (postsArray[i].Writing === true) {
        writingArray = [...writingArray, postsArray[i]];
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
journalArray.reverse();
articleArray.reverse();
projectArray.reverse();
writingArray.reverse();
miscArray.reverse();
recentArray.reverse();


// each category has it's own for loop with a variable for the posts of said category to go into
let allPosts = "";
for (let i=0; i < allArray.length; i++){
    allPosts += formattingFunction(allArray[i]);
}
let journalPosts = "";
for (let i=0; i < journalArray.length; i++){
    journalPosts += formattingFunction(journalArray[i]);
}
let articlePosts = "";
for (let i=0; i < articleArray.length; i++){
    articlePosts += formattingFunction(articleArray[i]);
}
let projectPosts = "";
for (let i=0; i < projectArray.length; i++){
    projectPosts += formattingFunction(projectArray[i]);
}
let writingPosts = "";
for (let i=0; i < writingArray.length; i++){
    writingPosts += formattingFunction(writingArray[i]);
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
document.getElementById("JournalPosts").innerHTML = journalPosts;
document.getElementById("ArticlePosts").innerHTML = articlePosts;
document.getElementById("ProjectPosts").innerHTML = projectPosts;
document.getElementById("WritingPosts").innerHTML = writingPosts;
document.getElementById("MiscPosts").innerHTML = miscPosts;
document.getElementById("RecentPosts").innerHTML = recentPosts;

//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY
//THIS IS ALL FOR THE POSTS ARRAY   
