// class Deck{

//     int contents(){
        
//         for(int i = 0; i <= 52; i++){
//         println(Math.floor(Math.random() * 10) + 1)
//     }
//     } 

// }

//this was ridiculous dang lol


class Hand{

    public int card1(){
        int val = Math.floor(Math.random() * 11) + 1
        return val
    }

    public int card2(){
        int val = Math.floor(Math.random() * 11) + 1
        return val
    }
    
}

def bustOrHitAgain(playersHand, dealersHand){
    Hand hitHand = new Hand()
    int playersHitCard = hitHand.card1()
    int dealersHitCard = hitHand.card2()
    int newHandDealer = dealersHand + dealersHitCard
    int newHandPlayer = playersHand + playersHitCard

    
    
    if(newHandPlayer == 21 && newHandDealer == 21){
        println("Tie! You both hit 21! Great Game!")
    }else if(newHandPlayer == 21){
        println("Player has landed at 21, you were dealt a ${playersHitCard} while at ${playersHand}!! Great Game! You Win!")
    }else if(newHandDealer == 21){
        println("Dealer has landed at 21, the dealer was dealt a ${dealersHitCard} while at ${dealersHand}!! Great Game! You Lost.")
    }else{
    
        if(newHandPlayer > 21){
            println("You've lost. You were dealt a ${playersHitCard} while holding ${playersHand}. Busted!")
        }else if(newHandDealer > 21){
            println("The dealer lost! The dealer was dealt a ${dealersHitCard} while holding ${dealersHand}. Busted!")
        }else{
            println("Your total hand is ${newHandPlayer}, and it seems the dealers still in! Would you like to... \n1. Hit \n2. Stay\n")
            int choice = System.in.newReader().readLine() as Integer
            if(choice == 1){
                bustOrHitAgain(newHandPlayer, newHandDealer)
            }else if (choice == 2){
                stay(newHandPlayer, newHandDealer)
            }else{
                println("invalid")
            }
        }
    }
}

def stay(playersHand, dealersHand){
    Hand hitHand = new Hand()
   
    int dealersHitCard = hitHand.card2()
    int newHandDealer = dealersHand + dealersHitCard


    if(playersHand == 21 && newHandDealer == 21){
        println("Tie! You both hit 21! Great Game!")
    }else if(newHandDealer == 21){
        println("Dealer has landed at 21, the dealer was dealt a ${dealersHitCard} while at ${dealersHand}!! Great Game! You Lost.")
    }else{

        if(newHandDealer > 21){
            println("The dealer lost! The dealer was dealt a ${dealersHitCard} while holding ${dealersHand}. Busted!")
        }else{
            println("Your total hand is ${playersHand}, and it seems the dealers still in! Would you like to... \n1. Hit \n2. Stay\n")
            int choice = System.in.newReader().readLine() as Integer
            if(choice == 1){
                bustOrHitAgain(playersHand, newHandDealer)
            }else if (choice == 2){
                stay(playersHand, newHandDealer)
            }else{
                println("invalid")
            }
        }


    }

}



public def dealCards(){
    //creating a new hand of cards for the player
    Hand playerHand = new Hand()
    // saving this hand to variable so they dont continue to be random
    int playerCard1 = playerHand.card1()
    int playerCard2 = playerHand.card2()
    int playersTotal = playerCard1 + playerCard2
    //creating a new hand of cards for the dealer
    Hand dealerHand = new Hand()
    // saving this hand to variable so they dont continue to be random
    int dealerCard1 = dealerHand.card1()
    int dealerCard2 = dealerHand.card2()
    int dealersTotal = dealerCard1 + dealerCard2
    println("The Dealer slides two Cards your direction...\n")

    if (playersTotal > 21 || dealersTotal > 21){
        println("EARLY BUST!\n\nPlayers Hand Dealt: ${playersTotal}\nDealers Hand Dealt:${dealersTotal}\n")
        game()
    }else{
        if (dealersTotal == 21){
            println("The dealer was dealt 21, Dealer wins! Game over.")
            game()
        }else if(playersTotal == 21){
            println("The player was dealt 21, Player wins! Game over.")
            game()
        }else{


            println("Here's your hand: ${playerCard1} , ${playerCard2}. Giving you a total of ${playersTotal}.\n")
            println("Would you like to... \n1. Hit \n2. Stay\n")
            int choice = System.in.newReader().readLine() as Integer
            if(choice == 1){
                bustOrHitAgain(playersTotal, dealersTotal)
            }else if(choice == 2){
                stay(playersTotal, dealersTotal)
            }else{
                println("invalid")
            }


        }
    }
    
}

public def coax(){
    println("Comeonnnnnn you know you want to..\n")
    game()
}

public def game(){


    println("\n\nWelcome to Jack Black's Black Jack game homie, one rule: Aces equal 11.\nReady to play?\n1. Yes \n2. No \n3. Exit\n")
    int choice = System.in.newReader().readLine() as Integer

    if (choice == 1){
        // Deck thisDeck = new Deck()
        // thisDeck.contents()
        dealCards()
    }else if (choice == 2){
        coax()
    }else if ( choice == 3){
        println("GoodBye.")
    }else{
        println("Invalid, Heading to Main Menu...\n..\n.\n")
        game()
    }

    




}

game()