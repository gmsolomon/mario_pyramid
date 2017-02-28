
printPyramid(8);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for (var row = 0; row < height; row++){
        string ="#";
        for (var column = 0; column < height; column ++ ){
            if ( column <= row){
                string += "#";
            } else {
                string = " " + string;
                }
        }
        console.log(string)
    }

}
