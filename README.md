### CSS/SCSS Structure

The CSS/SCSS are all located under the assets folder. The SCSS folder is further broken down into multiple folders of its own that is organized in a way for me to understand them better. These folders have numeric values in the front of the name because my main scss compiles in a cascading manner so the order indeed does matter. Got the idea from: https://www.youtube.com/watch?v=qUnIReTCsZY

## 1-helpers

They consist of any scss files that help add basic organization to the project. This is where I keep my variables, mixins, and functions which are unique to scss and is used widely in the project to help -setup it's scss structure.

# \_functions.scss

# \_mixins.scss

# \_variables.scss

## 2-tools

These are anything that are third-party code that I reference and use. So something like normalize.css or reset.css would live here.

# \_normalize.scss

## 3-basics

These are the bare bone basics of the web site. These will mainly be simple components that are usually one tiny element component.

# \_background.scss

# \_buttons.scss

# \_reset.scss

# \_typography.scss

## 4-layout

These are any major architectural structure of the site. The way the site will be structured and layed out.

# \_navigation.scss

# \_footer.scss

# \_drawer.scss

## 5-modules

Something that is very modular, you can consider this as something like components that make up the layout of the page.

## 6-pages

These are the pages and templates that takes the layouts, components, and modules to make up the rest of the page.
