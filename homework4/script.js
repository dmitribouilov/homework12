console.log("hello")

var buttonStart = document.querySelector("#buttonStart");
var responselist = document.querySelector("#response");
var varInitialInput = document.querySelector('#initialinput');
var initialsText =""

var myscore = 0;
var questionnumber = 0;
var responseCounter = 0;
var highscore = ["Your High Scorers are:"]

var objectResponse = [
    { id: 0, 
      response1: "Response1",
      response2: "Response2",
      response3: "Response3",
      response4: "Response4",
      },
    { id: 1, 
       response1: "2Response1",
       response2: "2Response2",
        response3: "2Response3",
        response4: "2Response4",
     },
     { id: 2, 
        response1: "3Response1",
        response2: "3Response2",
        response3: "3Response3",
        response4: "3Response4",
        },
    { id: 3, 
        response1: "4Response1",
        response2: "4Response2",
        response3: "4Response3",
        response4: "4Response4",
     },

     { id: 4, 
        response1: "5Response1",
        response2: "5Response2",
        response3: "5Response3",
        response4: "5Response4",
        },
    
  ];




  var correctanswerkey = [

    1,
    0,
    3,
    0,
    2,


  ];

  var questionarray = [
      "question 1",
      "question 2",
      "question 3",
      "question 4",
      "question 5",
  ];


    
 
  

    


    buttonStart.addEventListener("click", function(){

        displayFirst()

        $("#startbutton").empty();

        console.log("start button clicked");
        var countdown = 75;
        

        setInterval(function(){

            $('#timer').html("Time Left: " + countdown)
    
            countdown--


            if(countdown == 0){

                alert("you are out of time");

                location.reload()
            }  
        
      
        }, 1000)

    })


     responselist.addEventListener("click", function(event) {


        if(questionnumber == 4){

            console.log("test is complete");

            questionnumber = 0;
            $("#response").empty();
            $('#question').html("Please Enter your initials below")
    
            var input = document.createElement("input");
            input.setAttribute("id", "initialinput");
            input.setAttribute("class", "text-center");
            input.setAttribute("type", "text");
            input.setAttribute("type", "submit");
            input.setAttribute("class", "btn btn-primary btn-lg");
            var inputText = document.createElement("input")
            inputText.setAttribute("id", "initialinputtext");
            inputText.setAttribute("class", "text-center");
            inputText.setAttribute("type", "text");
            responselist.appendChild(inputText);
            responselist.appendChild(input);

            showinitial()


        }else{


        var element = event.target;
      
        
        if (element.matches("button") === true) {
          
          var index = element.parentElement.getAttribute("data-index");
          
          console.log("I clicked on " + index)
          console.log("correct answer is" + correctanswerkey[questionnumber])
          
            if (index == correctanswerkey[questionnumber]) {
                console.log("your answer is correct !")
                myscore++

                

            }
            
           $("#response").empty();
        

       
        
        questionnumber = questionnumber+1
        console.log(questionnumber + "this is what it is when clicking in list")
            displayFirst()}
        }
      });

    






     function displayFirst(){
            console.log("question number is " + questionnumber)
        
            
        var li1 = document.createElement("li");
        var answer1 = objectResponse[questionnumber].response1;  
        var answer2 = objectResponse[questionnumber].response2;
        var answer3 = objectResponse[questionnumber].response3;
        var answer4 = objectResponse[questionnumber].response4;
        li1.setAttribute("data-index", 0);
        li1.setAttribute("class", "list-group-item");
        var button = document.createElement("button");
            button.textContent = answer1;
            button.setAttribute("class","btn btn-primary btn-sm")

            li1.appendChild(button);
            responselist.appendChild(li1);


        var li1 = document.createElement("li");
        li1.setAttribute("data-index", 1);  

        li1.setAttribute("class", "list-group-item");
            var button = document.createElement("button");
                button.textContent = answer2;
                button.setAttribute("class","btn btn-primary btn-sm")
    
                li1.appendChild(button);
                responselist.appendChild(li1);

        var li1 = document.createElement("li");
        li1.setAttribute("data-index", 2);
        li1.setAttribute("class", "list-group-item");
        var button = document.createElement("button");
                button.textContent = answer3;
                button.setAttribute("class","btn btn-primary btn-sm")
        
                li1.appendChild(button);
                 responselist.appendChild(li1);
        var li1 = document.createElement("li");
        li1.setAttribute("data-index", 3);
        li1.setAttribute("class", "list-group-item");
            var button = document.createElement("button");
                    button.textContent = answer4;
                    button.setAttribute("class","btn btn-primary btn-sm")
                 
                    li1.appendChild(button);
                     responselist.appendChild(li1);
            
               

        
        
        $('#question').html(questionarray[questionnumber])

        
      

       
      
     }


     function showinitial() { 
       
        console.log(varInitialInput)

        document.querySelector('#initialinput').addEventListener("click", function(){

            console.log("submitted initials");
    
            initialsText = document.querySelector('#initialinputtext').value.trim();
    
        
        if (initialsText === "") {
        return;
         }
    
       
            highscore.push(initialsText);
            document.querySelector('#initialinputtext').value = "";

            console.log(initialsText)
    
           
             renderScores();
         })


         
     }

   



     function renderScores() {
                
        console.log("now lets render scores")
         
          
      
          var li = document.createElement("li");
          li.setAttribute("class", "list-group-item")
          li.textContent = initialsText + ", Your Score is " + myscore;
             
          
          responselist.appendChild(li);
        
      }
     

     

   
    



     
 