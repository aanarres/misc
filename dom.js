/**
 * DOM traversing
*/

function visit(anElement,aCallback) {
   aCallback(anElement);
   var children = anElement.children;
   for (var i = 0; i < children.length; i++) {
       visit(children[i], aCallback); // there we go again
   }
}

