# TailwindCSS Starter Template Documentation
## Getting Started
### Node Modules
First and foremost, make sure to run `npm install` in the terminal in the root directory of this project.  This will install all of the required dependencies and generate your **node_modules** folder.  This step is very important.

## Project Styles
### TailwindCSS
This project uses [TailwindCSS](https://tailwindcss.com/ "TailwindCSS"), a utility-first CSS framework.  The required dependencies should already be included in this project.  If you are missing the **node_modules** folder, simply run `npm install`, and it should generate with the dependencies specified in the **package.json** file.
### Tailwind Intellisense
To enable Tailwind CSS Intellisense, you'll need the VS Code extension.  I suggest installing the [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack) which comes with a few extensions that all work together to make using TailwindCSS a much better experience.  To learn more about it, click the link above.
### Files
In the root folder of the project, there is an **assets/styles** folder.  This houses the **tailwind.css** file.  This file is used to eventually generate the fully compiled TailwindCSS styles.  Once compiled, it outputs the classes to the **styles.css** file, also located in the **assets/styles** folder.
### Just In Time Mode
This project uses a version of TailwindCSS called [Just In Time (JIT)](https://tailwindcss.com/docs/just-in-time-mode "Just In Time (JIT)") mode.  Essentially, this means that our **styles.css** file will only include CSS classes that it files in our HTML files in the root folder.  This can be [disabled](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode "disabled") in the **tailwind.config.js** file.
### CSS Optimizations
This project includes the [cssnano plugin](https://cssnano.co/docs/introduction) for postcss.  This means that your **styles.css** file will be minified and have all comments removed.  To disable this, simply remove the cssnano plugin from the array of plugins in the **postcss.config.js** file.

## Working in Development
To work in a development environment, run the `dev` npm script.  To do so, use either method outlined below.
- Run `npm run dev` in the root folder of the project.
- Use the NPM scripts shortcut in the bottom left corner of the File Explorer tab in VS Code.

This will start a **long-running watch process** that will **generate** your styles **on-demand** instead of generating everything in advance.  This is extremely useful for making development efficient and faster.  In the terminal, you should see the initial complie message and the amount of time it took.  After that, you'll see "Waiting for file changes..."  Anytime you save an HTML file or the **tailwind.css** file, the CSS will be processed and re-compiled.

Please note that classes are added on-demand, but not removed on-demand.  This is currently by designed as [stated by Adam Wathan](https://github.com/tailwindlabs/tailwindcss/issues/4098#issuecomment-821867583 "stated by Adam Wathan").  To work around this (cache bust it), simply save the **tailwind.css** file.  It will force a full re-compile and remove any unused classes.

To kill the watch process, put your focus in the terminal that the process is running it, and press `CTRL + C`.  You should be prompted to confirm your terminal of the process.  Confirm your choice by entering `Y` followed by the `ENTER` key.

### Live Server
We will be using a VS Code extension to start our server up.  Search for "Live Server" in the VS Code extensions tab.  Alternatively, you can find it on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Once you download and install the extension, you might see a new button in the lower right-hand corner of the window in the blue riddon.  It says **Go Live**.  When you click that, it should start the server and open it on your browser.

If you do not see the button, simply right click on the **index.html** file in the VS Code file explorer, and click **Open with Live Server**.

## Building for Production
Building for production is similar to building for development.  Do either of the following to build the CSS for production.
- Run `npm run prod` in the root folder of the project.
- Execute `prod` in the NPM scripts shortcut located at the bottom left of the File Explorer tab in VS Code.

Contrary to the development script we used before, this will not start a long-running watch process; rather, this script compiles the CSS once and only once.  It will take only classes found in the HTML files located in the root folder and compile them into the **styles.css** file located in **assets/styles/styles.css**.

### Deploying Project
This project uses [Gulp](https://www.npmjs.com/package/gulp) to build your project for deployment. By running Gulp, it will create a **dist** folder in the root of your project. Gulp will then copy over all the necessary files from your project's source and assets into the **dist** folder. 

In addition to that, Gulp will also optimize and minify the files as needed. The HTML, SVG, and JavaScript files will all be minified. Minifying a file simply means removing whitespace and other unnecessary characters/symbols. We do this to reduce the size of the files(s).

The images and styles (css) will be copied over to the dist as well. Since the css is already minified by Tailwind's use of [PostCSS](https://postcss.org/) and the [JIT Engine](https://tailwindcss.com/docs/just-in-time-mode), we do not need to minify it here. The images are not optimized in the Gulp process, so I recommend optimizing them yourself. A great site to optimize PNG and JPG files is [TinyPNG/JPG](https://tinypng.com/).

### Using Gulp
So how do you use Gulp? It's very easy! I will give you three options. 1) Open the VS Code terminal and run the command `gulp`. This will execute the default task found in the **gulpfile.js** file in the root directory. The default task then executes, in order, all of the other tasks to build the project. 2) Alternatively, I have created an NPM script called `gulp`. You can run this from the bottom left corner of the VS Code window in the NPM Scripts tab. 3) If you do not see the NPM scripts tab, you may also run this command in the terminal by running `npm run gulp`, but at that point, just typing `gulp` is easier.

### What if I Need a Different Output Folder Name?
In the case that you need to change the name of the output folder from **dist** to something else, simply navigate to the **gulpfile.js** file and find the variable `destination` located near the top of the file. By default, it is set to `dist`, but you may change this by changing the string to whatever you'd like. Another common destination folder name is `docs`, which is used for deploying a project to [GitHub Pages](https://pages.github.com/).
