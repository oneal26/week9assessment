#! /bin/bash



# Creates a variable
# Does String Comparison
# Uses Conditionals
# Uses Loops
# Does Math with User Input

myDonut="vanilla frosted"

read -r -p"
What's your favorite type of doughnut?" favDonut

read -r -p"
What's your favorite odd number?" favOddNum

if [ $[$favOddNum % 2] -eq 0 ]
    then
        numReply="Yo i said an odd number homie, ahhh whatever. I guess $favOddNum is a cool number.
        "
    else
        numReply="Ahhhh the ole number $favOddNum, thats a pretty sweet number."
fi

echo $numReply

echo "oh by the way you said your favorite doughnut is a $favDonut doughnut."

if [ "$favDonut" = "$myDonut" ]
    then
        donutReply="That's crazy, my favorite doughnut is a $favDonut too!!"
    else
        donutReply="Mine's a $myDonut, those aren't the same:( but you're still cool!"
fi

echo $donutReply

read -r -p "Enter another odd number, i won't let you leave until you do!" ans

while [ $[$ans % 2] -eq 0 ]
do
  echo "Odd number, not $ans."
  read ans
done

echo "Heres some math with that favorite number, $favOddNum, you mentioned a while ago...heheh
"

sum=$[$favOddNum + 365]
prod=$[$favOddNum * 234]
quot=$[$favOddNum / 4]
dif=$[34 - $favOddNum]

echo "
That number multiplied by 234 is $prod."
echo "That number divided by 4 is $quot."
echo "That number added to 365 is $sum."
echo "That number subtracted from 34 is $dif."