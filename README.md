# code-splitting-webpack

This is a simple example project demonstrating code splitting with Webpack. It includes two separate pages, each with its own JavaScript file, and dynamically loads them on-demand using Webpack's code-splitting feature.

Project Structure
src/: Contains the source code files.
index.js: Main entry point of the application. It dynamically imports page1.js and page2.js when corresponding buttons are clicked.
page1.js: JavaScript file for Page 1.
page2.js: JavaScript file for Page 2.
dist/: Contains the built output files.
index.html: HTML file to serve as the entry point of the application.
main.js: Bundled JavaScript file generated by Webpack.
Getting Started
Clone the repository:
git clone <https://github.com/bryandino673/code-splitting-webpack.git>
Navigate to the project directory:

cd code-splitting-webpack
Install dependencies:

npm install
Build the project:

npx webpack
Serve the dist directory using a local server. You can use http-server, live-server, or any other server of your choice.

Open the application in your web browser.

Usage
Click on "Load Page 1" button to dynamically load Page 1.
Click on "Load Page 2" button to dynamically load Page 2.

License
This project is licensed under the MIT License. See the LICENSE file for details.