/**
 * Window vs Document
 * DOM vs BOM
 * DOM navigation
 * Searching and getting Elements Reference
 */

/**
 * Window 
 * 
 * It is main container or we can say the 
 * global Object and any operations related to
 * entire browse window can be a part of window
 * object.
 * 
 * For Example the history or to find the url etc.
 * 
 * 
 * Document
 * 
 * Whereas the DOM is the child of window
 * object.
 * 
 * 
 */

/**
 * Window
 * 
 * All the members like objects, methods or
 * properties. If they are the part of window
 * object then we do not refer the window object
 * Since window is the global object so you
 * do not have to write down window.
 * - It will be figured out by the runtime.
 * 
 * For Example:-
 * --> window.screeen or just screen is a small
 * information object about physical screen
 * dimensions.
 * --> window.location giving the current URL
 * --> window.document or just document is the 
 * main object of the potentially visible
 * (or better yet: rendered) document object
 * model/DOM
 * 
 * 
 * 
 * Document
 * 
 * Where in the DOM we need to refer the 
 * document if we want to use the document 
 * object, methods or properties.
 * 
 * For Example:-
 * document.getElementById()
 * 
 */

/**
 * Window
 * 
 * Window has mehtods, properties and object.
 * 
 * Ex, setTimeOut() or setInterval() are the
 * methods, where as Document is the object
 * of the Window and it also has a screen
 * object with properties describing the
 * physical display.
 * 
 * So example of window object properties are
 * innerHeight,
 * innerWidth 
 * and there are many more
 * 
 * 
 * Document
 * 
 * Document is just the object of the global
 * object that is Window, which deals with
 * the document, the HTML elements themselves.
 * 
 */


/**
 *                                Window
 *                        .           .           .  
 *                  .                 .                 .
 *              .                     .                        .
 *          .                         .                             .
 *         \/                        \/                            \/
 *  
 *      DOM                         BOM                         JavaScript
 *  (Document Object Model)     (Bower Object Model)   
 * ------------                 -------------------         ----------------
 * | Document |                 |  navigator      |         |   Object     |
 * | ....     |                 |   screen        |         |   Array      |
 * ------------                 |  location       |         |  Function    |
 *                              |   frames        |         |   .....      |
 *                              |   history       |         ----------------
 *                              | XML HttpRequest |   
 *                              -------------------
 */



/**
 * ******************* DOM vs BOM **********************
 * 
 * DOM
 * 
 * It is the Document Object Model, which deals with the document,
 * the HTML elements themselves , e.g. document and all traversal
 * you would do in it, events, etc.
 * 
 * For Ex:
 * change the backgorund color to red
 * document.body.style.background = "red";
 * 
 * 
 * BOM
 * 
 * It is the Browser Object Model, which deals with browser component
 * aside from the document, like history, location, navigator and 
 * screen (as well as some others that vary by browser). OR
 * In simple meaning all the window operations which comes under
 * BOM are performed user BOM
 */


/**
 * Funcitons alert/confirm/promt are also a part of BOM:
 * they are directly not  
 */

alert(location.href); // Show the current URL
if (confirm("Want to Visit Google?")) { // Confirm by click Ok or Cancle Button
    location.href = "https://www.google.com"; // Redirect to the assigned URL
}



/***
 *                      DOM
 *                  
 *                    document
 * 
 *                     <HTML>
 * 
 *             <BODY>           <>
 * 
 * 
 */