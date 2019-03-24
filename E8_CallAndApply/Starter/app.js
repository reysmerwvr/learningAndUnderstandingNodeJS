var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
};

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); // If the function has parameters you pass throught call separating with , e.g: param1, param2
obj.greet.apply({ name: 'Jane Doe' }); // If the function has parameters you pass throught apply in an aray e.g: [param1, param2]