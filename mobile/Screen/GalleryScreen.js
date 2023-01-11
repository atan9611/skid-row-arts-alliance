import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//have to import different JS functions from react native
//look through react native library to see how to build things like text inputs, subpages within a page
//map function is how you loop in JS
//review reactjs.org

//create an object with name, major, and age and display it in a view 

const object = {
  name: "Angela",
  major: "Computer Science",
  age: 18,
}

function DisplayObject(props){ //ACCEPTABLE, BUT INCORRECT WAY
  return(
    <View>
      <Text> {props.Name} </Text> 
      <Text> {props["major"]} </Text>
      <Text> {props.Age} </Text>
    </View>
  );
}

function DisplayObject2({name, major, age}){ //CORRECT WAY
return (
  <View>
    <Text> {name} </Text>
    <Text> {major}</Text>
    <Text> {age} </Text>
  </View>
);
}





//other stuff

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//put two words 

function GalleryCard() {
  const submissions = [
    {
      name: 'James',
      age: 20,
      "last name": "He" //double quotes around multiple word properties!

    },
    {
      name: 'Aye',
      age: 21,
      "last name": "He"
    },

    {
      name: 'Sid',
      age: 20,
      "last name": "Tan"
    },
    {
      name: "Angela",
      age: 19,
      "last name": "Tan"
    },
   
  ]
  
  //map function that returns all three properties
  //mapItems is a variable 
  //map is a function that is a built in for loop and returns them as text
  //YOU MUST HAVE IT ENCLOSED IN <VIEW> !!!
  const mapItems = submissions.map((submission) => {       
    return(
      <View> 
    <Text> {submission.name}</Text>  //correct
    <Text> {submission.age}</Text>
    <Text> {submission["last name"]} </Text>
    </View>
    );
    //return <Text key = {index} submission = {submission.name} /> //INCORRECT! Text displayed has to be between the two text
  });

  //How to display? You have to put it in <View> !
//variables need brackets and functions need <> to call it
  return(
    <View>
      {mapItems} 
    </View>
  )
}

function GalleryScreen() { //main function

  // const person =  {
  //   name: 'James',
  //   age: 20
  // }
  // person.name
  // person.age


  // submissions[i].age


  const test = () => {  //side functions

  }

  const here = "lol"
  /*doesn't need closing brace because nothing in between the opening and closing*/
  return (
    <View style={styles.container}>
      <Text> hello </Text>
      <DisplayObject Name = {object.name} major = {object.major} Age = {object.age}/>
      <DisplayObject2 name = {object.name} major = {object.major} age = {object.age} />
      <Text>{here}</Text>
      <Button title="Test" />
      <GalleryCard />
    </View>
  );
}

export default GalleryScreen;
