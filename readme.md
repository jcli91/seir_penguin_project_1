# Project 1: Trivia Game
## By Jeffery Li

## Introduction

Our first project at GA, unit 1 revolves around a trivia game. 
The theme I chose are fun facts about dogs.
In order for our game to be considered passing, it must be a
minimum viable product.
This includes:

- Create a question model with a Headless CMS (Content) and create at least 20 questions
- Pull those questions into your website using an AJAX call (will need to read the documentation for the Headless CMS)
- Create a Two player game where players can alternate turns and track their score
- Mobile-First Design (Media Queries, Flex-Box, and Grid should help you achieve this)
- Readme Documentation on your project


## Technologies Used

- HTML
- CSS
- JS
- jQuery
- Contentful

## Challenges

- Getting the reset button to work.
- Setting win conditions
- Restarting the game once a winner is announced
- Changing the alert text ( the ip address always shows up)

#### I had trouble with

My code looked like this

```
const winCondition = () => {
if ($("#player1").children.innerText == 1) {
    alert("player1 wins")
}
}
```

It was giving me a problem... when it was fixed it looked like this:

```
 console.log($p1score.text())
    if ($p1score.text() == 5) {
        alert("!!!Congratulations, Player 1 wins!!!")
        location.reload()
    } else if ($p2score.text() == 5) {
        alert("!!!Congratulations, Player 2 wins!!!")
        location.reload()
    }
```

My code looked like this
```
$("#reset").on("click", () => {
    setBoard()
})
```

It was giving me a problem... when it was fixed it looked like this:
```
$("#reset").on("click", () => {
    location.reload()
})
```


#### Example Table

| Column1 | Column2 | 
|---------|---------|
| item 1  | item 2  |
| item 1  | item 2  |