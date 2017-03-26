# Framework for my blog

This is the [Middleman](https://middlemanapp.com/) app I use to develop my [blog](http://stevebrewer.uk/). It's a static site generator that converts all my haml and sass into html and css and throws it into a 'build' folder, which I then deploy to a [GitHub Pages repo](https://github.com/svpersteve/svpersteve.github.io).

The build folder is in .gitignore so you won't see it on this repo, as I have initialised a [separate repository](https://github.com/svpersteve/svpersteve.github.io) inside this folder.

I use [Rake to automate deployment](https://github.com/svpersteve/middleman-blog/blob/master/Rakefile), which just rebuilds the site then force pushes it to the GitHub Pages repo. This means I can run `rake publish` and any changes I've made will be deployed.
