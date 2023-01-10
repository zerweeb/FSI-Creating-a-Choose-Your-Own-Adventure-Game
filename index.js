//Your Code here
let choice = window.prompt('do you want to go left or rigth')
let sndchoice = ''
let thrdchoice = ''

if (choice === 'left'){ sndchoice = window.prompt("You've chosen to venture left in to the forest. You come across a bag of rice. Do you pick up the rice('pick up')Do you walk away from it('leave')")
}if (sndchoice ==='pick up') {thrdchoice = window.prompt("you picked the bag and loped it on your shoulder as you continue you adventure throught ther forest. As you go deeper in the forest the bag of rice begins to grow heavier. Do you open the bag?('open'). Do you continue on ('contiune')" )
}if (thrdchoice === 'continue') {window.prompt("The bag continues to grow heavier and you start to sense somethingelse is with you")}
else if (thrdchoice === 'open'){window.prompt("you open the bag to see a golem made from rice being formed in a flower bed")}
else if(sndchoice === 'leave'){window.prompt("you left the bag where it was, but you feel a pressure urging you to the bag. the pressure become stronger as a voice appers bekkoning you to a location. Do you listen to the calls('listen').Do you keep traveling throught the forest in hopes of getting rid of the voice('flee')")
}if(thrdchoice === 'flee') {window.prompt(' You keep running through the forest as the voice grows louder. The presure becoem unbearable and you colaspe.')}
else if (thrdchoice === 'listen'){window.prompt('You listen to the voice that bekons you. You follow its instructions to the lone bag of rice you passed by hours ago')}

else if (choice === 'right'){ sndchoice =  window.prompt("you chosen to venture the desert. You've been traveling for some time when you come across a nimbus. Do you ride the nimbus('ride'). Do you attack the nimbus('attack').")
}if(sndchoice === 'ride'){thrdchoice =window.prompt("you jump on top of the nimbus and it shows no agressions towards you. You begin to understands how to ride it. After flying for some time you come across a vilage do you rest in the village('rest). Do you fly past it to get out of the desert quicker('fly') ")
}if (thrdchoice === 'fly'){window.prompt("after flying fo some time you only see desert. So you start to wonder how long till you are out of the desert")}
else if (thrdchoice === 'rest') {window.prompt("you stay a few nights at the village in. zuntil you start to feel troubled")
}
else if (sndchoice === 'attack'){thrdchoice = window.prompt("after choosing to attack the nimbus the angered cloud zaps you and vanishes. You are now forced to venture the rest of the badlands on foot")}
