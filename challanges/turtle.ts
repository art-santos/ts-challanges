export default class Turtle {
    constructor() {
      throw 'Not implemented';
    }
  
    /**
     * @param {number} distance Distance to move forward while facing the current direction.
     * @return {Turtle}
     */
    forward(distance: number): Turtle {
      throw 'Not implemented';
    }
  
    /**
     * @param {number} distance Distance to move backward while facing the current direction.
     * @return {Turtle}
     */
    backward(distance: number): Turtle {
      throw 'Not implemented';
    }
  
    /**
     * Turns the turtle left.
     * @return {Turtle}
     */
    left(): Turtle {
      throw 'Not implemented';
    }
  
    /**
     * Turns the turtle right.
     * @return {Turtle}
     */
    right(): Turtle {
      throw 'Not implemented';
    }
  
    /**
     * @return {[number, number]} Coordinates [x, y]
     */
    position(): [number, number] {
      throw 'Not implemented';
    }
  }


  //const turtle = new Turtle();
//turtle.position(); // [0, 0]
//turtle.forward(1); // Position: [0, 1]
//turtle.backward(1); // Position: [0, 0]
//turtle.right(); // Position remains unchanged
//turtle.forward(2); // Position: [2, 0] because it moved 2 units to the right.

// Methods can also be chained.
//turtle.right().right().forward(5); // Position: [-3, 0] because it turned 180 degrees and moved 5 units forward (towards the left).
