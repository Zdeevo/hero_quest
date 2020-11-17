// import * as storyText from '/scripts/text.js';

// setting variables for text and button elements

const textElement = document.querySelector('.text');
const option1ButtonElement = document.querySelector('.btn1');
const option2ButtonElement = document.querySelector('.btn2');

// intro text

const intro1 = "The skies are growing dark, the mountains are rumbling, things are moving in the shadows and the people of the village are scared.<br> They need a hero. <br> Could it be you?"

const intro2 = "You have accepted the quest. You are obviously brave, but are you wise enough to make it through the challenges ahead?"

const intro3 = "That's a shame, but to be honest, when I saw you I knew you weren't the one. <br> The village will have to find another hero."

// story text

const story1 = "As you leave the village, heading east towards the coast, you come to a fork in the road. To the right is a narrow path next to a stream running through the forest. To the left is a cave leading under the mountain. This is where the real adventure begins. <br> Choose your path!"

const story2 = "On the forest path you suddenly see a strange person in a hooded cloak. They're collecting plants and mumbling into the trunk of a very old tree. Your presence annoys them and they turn to walk away. <br> You explain your quest and ask for help so they give you two options. <br> Follow the stream, or cross over the stream and go deeper into the forest."

const story3 = "You enter the cave, but it's not long before it becomes too dark to see, so you light your torch. Suddenly you see a small friendly goblin leaning against the wall, so you ask him the way through the mountain. He agrees to help, but as he likes to have fun with anyone who comes into the cave, he makes you choose between a door or a tunnel."

const story4 = "You come across an old and delapidated house. Does anyone live here? You call out but no-one answers and it seems abandoned. <br> Do you knock the door just in case, or keep walking?"

const story5 = "You walk further into the dark forest, and suddenly come across what appears to be a giant bird nest. You look in and see an enormous bird like creature with a huge sharp beak and massive shiny claws, but it has what looks like horses legs at the rear. It is asleep but looks very dangerous. <br> Do you sneak on past or draw your sword?"

const story6 = "As the door closes behind you, you hear a little chuckle from outside and the little goblin scampers off. As you turn back around you see a large pair of thick skinned and very hairy feet. You slowly look up to see a much larger goblin, and she's not very happy at the intrusion. You quickly step back and prepare to defend yourself. <br> Do you use the torch or draw your sword?"

const story7 = "The tunnel leads into a large dark cavern full of bones, rusty weapons and old broken horse carts. You want to turn back but the village is counting on you. You search through the debris and find two doors on the far side. One is a huge thick metal door, the other a small old wooden door. <br> Which one will you choose?"

const story8 = "When you knock the door, it swings open but no-one appears to be home. Suddenly you hear someone whistling to the rear of the house. In the small walled garden there is an old man fixing some rusty machinery.You ask him for help but he is startled and gets defensive. He leaps to his feet with his fists clenched and an angry look on his face. Despite his anger he seems relatively harmless but you draw your sword none the less. As he gets closer you notice just how small he is. <br> Do you keep your sword out ready to fight, or do you put your sword away and try to calm him down?"

const story9 = "As you pass on by the old hut, you meet a majestic beast. A beautiful alicorn. He introduces himself in the most pompous way imaginable, as if you weren't even there and the entire moment is for him. He says his name is Bernard and he is the most splendid of his kind, much more beautiful than any of the others you might meet. You ask him for help on your quest but he seems pre-occupied with his own reflection in the stream. To get his attention you decide to play on his ego. <br> Do you compliment his beautiful wings, or critise his limp mane?"

const story10 = "You draw your sword but the sound it makes awakens the beast within the nest. You notice it has young that it is guarding."

const story11 = "You come across an old and delapidated house. You decide to knock the door. It swings open but no-one appears to be home. Suddenly you hear someone whistling to the rear of the house. In the small walled garden there is an old man fixing some rusty machinery.You ask him for help but he is startled and gets defensive. He leaps to his feet with his fists clenched and an angry look on his face.Despite his anger he seems relatively harmless but you draw your sword none the less. As he gets closer you notice how small he is. <br> Do you keep your sword out ready to fight, or do you put your sword away and try to calm him down?"

const story12 = "That was not a very good idea. The goblin is easily thrice your size and she has a huge axe at her side! <br> Do you stand and fight, or do you beg for mercy?"

const story13 = "You swing the flaming torch at her and she instantly cowers in the corner of the room. Goblins are terrified of flames and she drops to her knees and begs for you to keep it away from her. You explain your quest and ask her for help. She agrees and shows you two doors which are both shortcuts through the mountain. But you have to choose wisely. <br> One is huge thick metal door, the other a small old wooden door."

const story14 = "The large metal door was heavy and difficult to open, but you are strong and managed to open it. Unfortunately you chose poorly, and behind the door was a huge angry dragon. With one blast of it's fiery breath you are consumed by fire. <br> You have failed the quest!"

const story15 = "You choose the wooden door. Beyond is a long narrow tunnel. The journey through takes a long time but you arrive out the other side near the coast. You find the army and deliver the message to the general. <br> The village will be saved. <br> You are a true hero!!"

const story16 = "He backs down and pleads for mercy. You explain that you are on an important quest from the village, and have no intentions of hurting him. You ask him for help and he decides to take you to see the wizard. The wizard is an unpleasant and cantankerous old hermit, but he is fond of the villagers and decides to help you, but on one condition, you must pass his test. If you pass, he will help you. If not he will surely kill you! <br> What flies when it is born, lies when it is alive, and runs when it is dead?"

const story17 = "You put away your sword and tell him you mean him no harm. You explain that you are on an important quest from the village, and have no intentions of hurting him. You ask him for help and he decides to take you to see the wizard. The wizard is an unpleasant and cantankerous old hermit, but he is fond of the villagers and decides to help you, but on one condition, you must pass his test. If you pass, he will help you. If not he will surely kill you! <br> What flies when it is born, lies when it is alive, and runs when it is dead?"

const story18 = "It's your lucky day! There's nothing an egotistical alicorn loves more than compliments. Especially about their wings. Bernard listens to your request and offers to fly you to the coast himself, if only just to show off his beautiful wings! You find the army and deliver the message to the general. <br> The village will be saved. <br> You are a true hero!!"

const story19 = "I'm sure you noticed the moment you met him, but Bernard is a powerful magical creature with a large spike on his head!! The insult to his mane is more than he can take and he gores you with his horn. <br> You're dead. <br> The quest has failed!"

const story20 = "You bow your head in submission and quickly plead with the creature. You explain your quest and ask that it spares you so you can save the village. Since you disturbed it's nest, and it's chick are hungry it gives one chance to fulfil your quest. Answer this question corectly and it will help you, fail and you will be chick food! <br> The creature asks 'What type of animal am I, a hippogriff, or a cockatrice?'"

const story21 = "Not a very good idea! The beast is huge and easily defeats you. <br> You are now food for it's hungry chicks! <br> You have failed the quest!"

const story22 = "You chose poorly. What were you thinking taking on a huge goblin with only a sword? With one swing of her mighty axe she lops off your head and adds it to her collection! <br> You have failed the quest!"

const story23 = "You drop your sword and torch, and beg for mercy. This is the only chance you have to save the village. She puts away her sword and laughs like a thunder storm. She tells you just how pathetic she thinks you are, but luckily she takes pity on you and agrees to give you some helpful advice. She leads you through to a huge dark cavern, strewn with the remains of her previous victims. At the far end of the cavern are two doors, a large metal one and an old wooden one. <br> Both lead through the mountain but you must choose wisely."

const story24 = "You were right! The Hippogriff stays true to it's word and offers to fly you to the coast. You find the army and deliver the message to the general. <br> The village will be saved. <br> You are a true hero!!"

const story25 = "Unfortunately you were wrong, she is a Hippogriff. And there's nothing a Hippogriff hates more than being mistaken for a Cockatrice. They have the body of a serpent for goodness sake!! <br> You are now food for it's hungry chicks! <br> You have failed the quest!"

const story26 = "Unfortunately you did not pass the test! There is a sudden flash of light and with one sweep of the wizards staff you are no more. <br> You are dead, and the quest has failed!"

const story27 = "Well done, you passed the test! Begrudgingly the grumpy old wizard sweeps his staff through the air above your head and you are magically transported to the coast. You find the army and deliver the message to the general. <br> The village will be saved. <br> You are a true hero!!"

// button option text

const introButton1 = "I accept!"

const introButton2 = "I'm ready to begin!"

const introButton3 = "I'm not ready..." 

const option1 = "Forest"

const option2 = "Cave"

const option3 = "Follow stream"

const option4 = "Deeper into forest"

const option5 = "Door"

const option6 = "Tunnel"

const option7 = "Knock"

const option8 = "Keep walking"

const option9 = "Draw sword"

const option10 = "Sneak past"

const option11 = "Sword"

const option12 = "Torch"

const option13 = "Metal"

const option14 = "Wooden"

const option15 = "Prepare to fight"

const option16 = "Sheath sword"

const option17 = "Compliment"

const option18 = "Criticise"

const option19 = "Sheath sword"

const option20 = "Stand ground"

const option21 = "Fight"

const option22 = "Beg for mercy"

const option23 = "Seed"

const option24 = "Snowflake"

const option25 = "Hippogriff"

const option26 = "Cockatrice"

const restart = "Try again?"

// Welcome page - Are you the hero we need??

textElement.innerHTML = intro1;
option1ButtonElement.innerHTML = introButton1;
option2ButtonElement.style.display = "none";

//Last chance option, then story cards.

const clickFunction = (clicked_id) => {
  let btnClick = clicked_id;
 
switch (btnClick) {
  case ('restart'):
    textElement.innerHTML = intro1;
    option1ButtonElement.innerHTML = introButton1;
    option1ButtonElement.setAttribute('id', 'introButton1');
    option2ButtonElement.style.display = "none";
    break;
  case ('introButton1'):
    textElement.innerHTML = intro2;
    option1ButtonElement.innerHTML = introButton2;
    option2ButtonElement.innerHTML = introButton3;
    option1ButtonElement.setAttribute('id', 'introButton2');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'introButton3');
    break;
  case ('introButton2'):
    textElement.innerHTML = story1;
    option1ButtonElement.innerHTML = option1;
    option2ButtonElement.innerHTML = option2;
    option1ButtonElement.setAttribute('id', 'btn1');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn2');
    break;  
  case ('introButton3'):
    textElement.innerHTML = intro3;
    option1ButtonElement.style.display = "none";
    option2ButtonElement.style.display = "none";
    break;  
  case ('btn1'):
    textElement.innerHTML = story2;
    option1ButtonElement.innerHTML = option3;
    option2ButtonElement.innerHTML = option4;
    option1ButtonElement.setAttribute('id', 'btn3');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn4');
    break;
  case ('btn2'): 
    textElement.innerHTML = story3;
    option1ButtonElement.innerHTML = option5;
    option2ButtonElement.innerHTML = option6;
    option1ButtonElement.setAttribute('id', 'btn5');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn6');
    break;
  case ('btn3'): 
    textElement.innerHTML = story4;
    option1ButtonElement.innerHTML = option7;
    option2ButtonElement.innerHTML = option8;
    option1ButtonElement.setAttribute('id', 'btn7');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn8');  
    break;
  case ('btn4'): 
    textElement.innerHTML = story5;
    option1ButtonElement.innerHTML = option9;
    option2ButtonElement.innerHTML = option10;
    option1ButtonElement.setAttribute('id', 'btn9');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn10');  
    break;
  case ('btn5'): 
    textElement.innerHTML = story6;
    option1ButtonElement.innerHTML = option11;
    option2ButtonElement.innerHTML = option12;
    option1ButtonElement.setAttribute('id', 'btn11');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn12');  
    break;
  case ('btn6'): 
    textElement.innerHTML = story7;
    option1ButtonElement.innerHTML = option13;
    option2ButtonElement.innerHTML = option14;
    option1ButtonElement.setAttribute('id', 'btn13');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn14');  
    break;
  case ('btn7'): 
    textElement.innerHTML = story8;
    option1ButtonElement.innerHTML = option15;
    option2ButtonElement.innerHTML = option16;
    option1ButtonElement.setAttribute('id', 'btn15');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn16');  
    break;
  case ('btn8'): 
    textElement.innerHTML = story9;
    option1ButtonElement.innerHTML = option17;
    option2ButtonElement.innerHTML = option18;
    option1ButtonElement.setAttribute('id', 'btn17');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn18');  
    break;
  case ('btn9'):
    textElement.innerHTML = story10;
    option1ButtonElement.innerHTML = option19;
    option2ButtonElement.innerHTML = option20;
    option1ButtonElement.setAttribute('id', 'btn19');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn20');
    break;
  case ('btn10'): 
    textElement.innerHTML = story11;
    option1ButtonElement.innerHTML = option15;
    option2ButtonElement.innerHTML = option16;
    option1ButtonElement.setAttribute('id', 'btn15');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn16');
    break;
  case ('btn11'): 
    textElement.innerHTML = story12;
    option1ButtonElement.innerHTML = option21;
    option2ButtonElement.innerHTML = option22;
    option1ButtonElement.setAttribute('id', 'btn21');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn22');  
    break;
  case ('btn12'): 
    textElement.innerHTML = story13;
    option1ButtonElement.innerHTML = option13;
    option2ButtonElement.innerHTML = option14;
    option1ButtonElement.setAttribute('id', 'btn13');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn14');  
    break;
  case ('btn13'): 
    textElement.innerHTML = story14;
   // hide buttons  
   option1ButtonElement.innerHTML = restart;
   option1ButtonElement.setAttribute('id', 'restart');
   option2ButtonElement.style.display = "none";
    break;
  case ('btn14'): 
    textElement.innerHTML = story15;
    // hide buttons  
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn15'): 
    textElement.innerHTML = story16;
    option1ButtonElement.innerHTML = option23;
    option2ButtonElement.innerHTML = option24;
    option1ButtonElement.setAttribute('id', 'btn23');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn24');  
    break;
  case ('btn16'): 
    textElement.innerHTML = story17;
    option1ButtonElement.innerHTML = option23;
    option2ButtonElement.innerHTML = option24;
    option1ButtonElement.setAttribute('id', 'btn23');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn24');  
    break;
  case ('btn17'):
    textElement.innerHTML = story18;
    // hide buttons
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn18'): 
    textElement.innerHTML = story19;
    // hide buttons
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn19'): 
    textElement.innerHTML = story20;
    option1ButtonElement.innerHTML = option25;
    option2ButtonElement.innerHTML = option26;
    option1ButtonElement.setAttribute('id', 'btn25');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn26');  
    break;
  case ('btn20'): 
    textElement.innerHTML = story21;
   // hide buttons
   option1ButtonElement.innerHTML = restart;
   option1ButtonElement.setAttribute('id', 'restart');
   option2ButtonElement.style.display = "none";
    break;
  case ('btn21'): 
    textElement.innerHTML = story22;
   // hide buttons
   option1ButtonElement.innerHTML = restart;
   option1ButtonElement.setAttribute('id', 'restart');
   option2ButtonElement.style.display = "none";
    break;
  case ('btn22'): 
    textElement.innerHTML = story23;
    option1ButtonElement.innerHTML = option13;
    option2ButtonElement.innerHTML = option14;
    option1ButtonElement.setAttribute('id', 'btn13');
    option2ButtonElement.style.display = "inline";
    option2ButtonElement.setAttribute('id', 'btn14');  
    break;
  case ('btn23'): 
    textElement.innerHTML = story26;
    // hide buttons
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn24'): 
    textElement.innerHTML = story27;
    // hide buttons
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn25'): 
    textElement.innerHTML = story24;
    // hide buttons 
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    option2ButtonElement.style.display = "none";
    break;
  case ('btn26'): 
    textElement.innerHTML = story25;
    option1ButtonElement.innerHTML = restart;
    option1ButtonElement.setAttribute('id', 'restart');
    break;
}
}
