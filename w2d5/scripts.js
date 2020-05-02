let Teacher = null;
{
  "use strict";
  /**
   * Add filter in String constructor
   * @param {String} str 
   * @returns {String}
   */
  String.prototype.filter = function(str){
    return this.split(" ").filter((s)=> s !== str).join(" ");
  }

  /**
   * Add bubbleSort in Array constructor
   */
  Array.prototype.bubbleSort = function(){
    return bubble_Sort(this);
  }

  /**
   * Swap elements in array by using first and second index
   */
  function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
  }

  /**
   * @param {Array} arr - Integer list
   * @returns {Array} arr - Sorted with increasing order
   */
  function bubble_Sort(arr){

      var len = arr.length,
          i, j, stop;

      for (i=0; i < len; i++){
          for (j=0, stop=len-i; j < stop; j++){
              if (arr[j] > arr[j+1]){
                  swap(arr, j, j+1);
              }
          }
      }

      return arr;
  }

  var Person = function() {};
  Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
  }

  /**
   * @returns {String} [person's name], [person's age] years old.
   */
  Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
  }

  Teacher = function(){};
  Teacher.prototype = new Person();

  /**
   * @param {String} subject
   * @returns {String} [teacher's name] is now teaching [subject]
   */
  Teacher.prototype.teach = function(subject){
    this.subject = subject;
    const out = `${this.name} is now teaching ${this.subject}`;
    console.log(out);
    return out;
  }

  var Student = function() {};
  Student.prototype = new Person();

  /**
   * @param {String} subject - lecture subject
   * @returns {String} [student's name] just learned [subject]
   */
  Student.prototype.learn = function(subject){
    const out = this.name + " just learned " + subject;
    console.log(out);
    return out;
  }

  var me = new Student();
  me.initialize("John", 25);
  me.learn("Inheritance");
}
