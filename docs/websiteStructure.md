# Folder structure

```
/
├── eleventy.config.js (eleventy start-up options)
├── _site
└── src
    ├── _includes (all elements to reuse)
    ├── img
    ├── css-bundle.njk
    └── *major_section* (e.g. Programming)
        └── *minor_section* (e.g. HTML)
            └── *single post* (e.g. How to create a website)
```

## source

```
/
= eleventy.config.js (eleventy start-up options)
= _site
= src
== _includes (all HTML elements to reuse)
== img (all images)
== css-bundle.njk
== *major_section* (e.g. Programming)
=== *minor_section* (e.g. HTML)
==== *single post* (e.g. How to create a website)
```

Generated with :
https://www.text-tree-generator.com/