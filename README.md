# TailwindCSS Starter Template Documentation
## Getting Started
### Node Modules
First and foremost, make sure to run `npm install`.  This will install all of the required dependencies and generate your **node_modules** folder.  This step is very important.

## Project Styles
### TailwindCSS
This project uses [TailwindCSS](https://tailwindcss.com/ "TailwindCSS"), a utility-first CSS framework.  The required dependencies should already be included in this project.  If you are missing the **node_modules** folder, simply run `npm install`, and it should generate with the dependencies specified in the **package.json** file.
### Tailwind Intellisense
To enable Tailwind CSS Intellisense, you'll need the VS Code extension.  I suggest installing the [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack) which comes with a few extensions that all work together to make using TailwindCSS a much better experience.  To learn more about it, click the link above.
### Files
In the root folder of the project, there is an **assets/styles** folder.  This houses the **tailwind.css** file.  This file is used to eventually generate the fully compiled TailwindCSS styles.  Once compiled, it outputs the classes to the **styles.css** file, also located in the **assets/styles** folder.
### Just In Time Mode
This project uses a version of TailwindCSS called [Just In Time (JIT)](https://tailwindcss.com/docs/just-in-time-mode "Just In Time (JIT)") mode.  Essentially, this means that our **styles.css** file will only include CSS classes that it files in our HTML files in the root folder.  This can be [disabled](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode "disabled") in the **tailwind.config.js** file.

## Working in Development
To work in a development environment, run the `dev` npm script.  To do so, use either method outlined below.
- Run `npm run dev` in the root folder of the project.
- Use the NPM scripts shortcut in the bottom left corner of the File Explorer tab in VS Code.

This will start a **long-running watch process** that will **generate** your styles **on-demand** instead of generating everything in advance.  This is extremely useful for making development efficient and faster.  In the terminal, you should see the initial complie message and the amount of time it took.  After that, you'll see "Waiting for file changes..."  Anytime you save an HTML file or the **tailwind.css** file, the CSS will be processed and re-compiled.

Please note that classes are add on-demand, but not removed on-demand.  This is currently by designed as [stated by Adam Wathan](https://github.com/tailwindlabs/tailwindcss/issues/4098#issuecomment-821867583 "stated by Adam Wathan").  To work around this (cache bust), simply save the **tailwind.css** file.  It will force a full re-compile and remove any unused classes.

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