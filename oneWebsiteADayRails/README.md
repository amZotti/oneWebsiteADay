<h1>Outcome</h1>
<p>Create website for navigating all other websites on 30 Websites 30 Day challenge.<p>

<h2>Challenges</h2>
<ol>
  <li><p>This was a challenging website to design. It was difficult to design
simply because there was so little content to design. White space is good but too much white space feels barren. 
I ended up choosing a simple design to go with the simple content.</p></li>

  <li><p>This website was also difficult because I had to figure out how to serve
static content on Heroku. I ended up putting all my static websites in the
public directory on a Rails app. To make the content accessible I had to
change my production configurations to serve static content. I tried to be
clever and create a git submodule in the public directory, and then pull my 30
Websites 30 Days repository into that submodule. It worked perfectly when hosted
locally, apparently Heroku does not do well with submodules though and I had to
just recreate my static content in public directory using system copy instead of
using a git submodule.</p></li>
</ol>

<h3><a href="https://blooming-caverns-2960.herokuapp.com/">Live URL</a></h3>

