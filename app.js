document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ]
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  // 5 - cover

  const squares = []

  //create your board (map rendering)
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      } else if (layout[i] === 5) {
        squares[i].classList.add('cover')
      }
    }
  }
  createBoard()

    //get the list of cover locations
    let cover_location_x = []
    let cover_location_y = []
    for (let index = 0; index < layout.length; index++) {
      let index_x = index % width;
      let index_y = Math.floor(index / width);
      if (layout[index] == 5) {
        cover_location_x.push(index_x)
        cover_location_y.push(index_y)
      }
    }


  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 33//725//490
  squares[pacmanCurrentIndex].classList.add('pac-man')
  //get the coordinates of pacman on the grid with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))

  //move pacman
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch (e.keyCode) {
      case 37:
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex - 1].classList.contains('cover') &&
          !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
        )
          pacmanCurrentIndex -= 1
        if (squares[pacmanCurrentIndex - 1] === squares[363]) {
          pacmanCurrentIndex = 391
        }
        break
      case 38:
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex - width].classList.contains('cover') &&
          !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
        )
          pacmanCurrentIndex -= width
        break
      case 39:
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex + 1].classList.contains('cover') &&
          !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
        )
          pacmanCurrentIndex += 1
        if (squares[pacmanCurrentIndex + 1] === squares[392]) {
          pacmanCurrentIndex = 364
        }
        break
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex + width].classList.contains('cover') &&
          !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
        )
          pacmanCurrentIndex += width
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }
  //
  document.addEventListener('keyup', movePacman)

  // what happens when you eat a pac-dot
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

  //what happens when you eat a power-pellet
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      score += 10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
      //
      this.eyeSight = null
    }
  }

  //all my ghosts
  ghosts = [
    new Ghost('blinky', 328, 500),
    new Ghost('pinky', 356, 400),
    new Ghost('inky', 331, 300),
    new Ghost('clyde', 359, 500)
  ]

  //eye sights
  eyeSights = ["west", "east", "south", "north"]

  //draw my ghosts onto the grid
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
  })

  //move the Ghosts randomly
  ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let randomInt = Math.floor(Math.random() * directions.length)
    let direction = directions[randomInt]
    ghost.eyeSight = eyeSights[randomInt]

    ghost.timerId = setInterval(function () {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') &&
        !squares[ghost.currentIndex + direction].classList.contains('cover')) {
        //remove the ghosts classes
        squares[ghost.currentIndex].classList.remove(ghost.className)
        squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
        //move into that space
        ghost.currentIndex += direction
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        //else find a new random direction ot go in
      } else {
        randomInt = Math.floor(Math.random() * directions.length)
        direction = directions[randomInt]
        ghost.eyeSight = eyeSights[randomInt]
        // console.log("eyeSight",ghost.eyeSight)
      }
      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is currently scared and pacman is on it
      if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score += 100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
      checkForGameOver()
      checkForGameOver2(ghost.currentIndex, ghost.eyeSight)
    }, ghost.speed)
  }

  //check for a game over
  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function () { alert("Game Over"); }, 500)
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score === 1) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      setTimeout(function () { alert("You have WON!"); }, 500)
    }
  }

  function checkForGameOver2(enemyCurrentIndex, eyeSight) {


    // NEW TODO
    // SEARCH cover FIRST IF SO THEN CHECK WHETHER THE WALL IS LOCATED IN FROMT OF PLAYER




    // 0,0 is located at left top. every cordinates are positive
    // console.log(enemyCurrentIndex)
    let enemy_x = enemyCurrentIndex % width
    let enemy_y = Math.floor(enemyCurrentIndex / width)
    // console.log("enemy_x", enemy_x)
    // console.log("enemy_y", enemy_y)

    // console.log("player");
    //y=ax+b
    let player_x = pacmanCurrentIndex % width;
    let player_y = Math.floor(pacmanCurrentIndex / width);
    // console.log("enemy_x", player_x)
    // console.log("enemy_y", player_y)

    let found_check = true


    switch (eyeSight) {
      case 'north':
        //first quadrant, second quadrant
        if (player_y < enemy_y) {
          for (let index = 0; index < layout.length; index++) {
            let index_x = index % width;
            let index_y = Math.floor(index / width);
            if (index < enemyCurrentIndex && layout[index] == 5) {
              let cover_x = index % width;
              let cover_y = Math.floor(index / width);
              let cover_enemy = (cover_y - enemy_y) / (cover_x - enemy_x)
              let cover_dis = Math.sqrt((Math.pow((cover_y - enemy_y),2)) + (Math.pow((cover_x - enemy_x),2)))
              let player_enemy = (player_y - enemy_y) / (player_x - enemy_x)
              let player_dis = Math.sqrt((Math.pow((player_y - enemy_y),2)) + (Math.pow((player_x - enemy_x),2)))

              // console.log("abs north", Math.abs(cover_enemy - player_enemy))
              // console.log("dis north",(player_dis - cover_dis))
    

              if ((Math.abs(cover_enemy - player_enemy)) <= 0.5 && player_dis >= cover_dis) {
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)

                // console.log("index",index)
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)
                // console.log("idx", index)
                found_check = false
              }

              if ((Math.abs(cover_enemy - player_enemy)) >= 0.5 && Math.abs(player_dis - cover_dis) < 0.5) {
                found_check = false
              }

              if ((isNaN(player_dis-cover_dis))) {
                found_check = false
              }

            }

          }

          console.log("north end")

          if (found_check) {
            console.log('north found')
            document.removeEventListener('keyup', movePacman)
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            setTimeout(function () { alert("Game Over"); }, 500)
          }

          // console.log(cover)

          // console.log("north:got in an enemy's sight");
        }

        break;

      case 'south':
        //third quadrant, fourth quadrant
        if (player_y > enemy_y) {
          for (let index = 0; index < layout.length; index++) {
            let index_x = index % width;
            let index_y = Math.floor(index / width);
            if (index > enemyCurrentIndex && layout[index] == 5) {
              let cover_x = index % width;
              let cover_y = Math.floor(index / width);
              let cover_enemy = (cover_y - enemy_y) / (cover_x - enemy_x)
              let cover_dis = Math.sqrt((Math.pow((cover_y - enemy_y),2)) + (Math.pow((cover_x - enemy_x),2)))
              let player_enemy = (player_y - enemy_y) / (player_x - enemy_x)
              let player_dis = Math.sqrt((Math.pow((player_y - enemy_y),2)) + (Math.pow((player_x - enemy_x),2)))

              // console.log("abs south", Math.abs(cover_enemy - player_enemy))
              // console.log("dis south",player_dis-cover_dis)


              if ((Math.abs(cover_enemy - player_enemy)) <= 0.5 && player_dis >= cover_dis) {
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)

                // console.log("index",index)
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)
                // console.log("idx", index)
                found_check = false
              }

              if ((Math.abs(cover_enemy - player_enemy)) >= 0.5 && Math.abs(player_dis - cover_dis) < 0.5) {
                found_check = false
              }


              if ((isNaN(player_dis-cover_dis))) {
                found_check = false
              }



            }
          }
          console.log("south end")
          if (found_check) {
            console.log('south found')
            document.removeEventListener('keyup', movePacman)
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            setTimeout(function () { alert("Game Over"); }, 500)
          }

        }
        break;

      case 'west':
        //second quadrant, third quadrant
        if (player_x < enemy_x) {
          for (let index = 0; index < layout.length; index++) {
            let index_x = index % width;
            let index_y = Math.floor(index / width);
            if (index_x < enemy_x && layout[index] == 5) {

              let cover_x = index % width;
              let cover_y = Math.floor(index / width);
              let cover_enemy = (cover_y - enemy_y) / (cover_x - enemy_x)
              let cover_dis = Math.sqrt((Math.pow((cover_y - enemy_y),2)) + (Math.pow((cover_x - enemy_x),2)))
              let player_enemy = (player_y - enemy_y) / (player_x - enemy_x)
              let player_dis = Math.sqrt((Math.pow((player_y - enemy_y),2)) + (Math.pow((player_x - enemy_x),2)))

              // console.log("abs west", Math.abs(cover_enemy - player_enemy))

              if ((Math.abs(cover_enemy - player_enemy)) <= 0.5 && player_dis >= cover_dis) {
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)

                // console.log("index",index)
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)
                // console.log("idx", index)
                found_check = false
              }

              if ((Math.abs(cover_enemy - player_enemy)) >= 0.5 && player_dis > cover_dis) {
                found_check = false
              }

              if ((isNaN(player_dis-cover_dis))) {
                found_check = false
              }

            }
          }
          console.log("west end")
          // console.log("west:got in an enemy's sight");
          if (found_check) {
            console.log('west found')
            document.removeEventListener('keyup', movePacman)
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            setTimeout(function () { alert("Game Over"); }, 500)
          }
        }
        break;

      case 'east':
        //third quadrant, fourth quadrant
        if (player_x > enemy_x) {
          for (let index = 0; index < layout.length; index++) {
            // console.log("east:got in an enemy's sight");
            let index_x = index % width;
            let index_y = Math.floor(index / width)
            if (index_x > enemy_x && layout[index] == 5) {

              let cover_x = index % width;
              let cover_y = Math.floor(index / width);
              // let cover_enemy = Math.tan((cover_y - enemy_y) / (cover_x - enemy_x))

              // let player_enemy = Math.tan((player_y - enemy_y) / (player_x - enemy_x))
              let cover_enemy = (cover_y - enemy_y) / (cover_x - enemy_x)
              let cover_dis = Math.sqrt((Math.pow((cover_y - enemy_y),2)) + (Math.pow((cover_x - enemy_x),2)))
              let player_enemy = (player_y - enemy_y) / (player_x - enemy_x)
              let player_dis = Math.sqrt((Math.pow((player_y - enemy_y),2)) + (Math.pow((player_x - enemy_x),2)))


              console.log("abs east", Math.abs(cover_enemy - player_enemy))
              console.log("dis east",player_dis-cover_dis)

              if ((Math.abs(cover_enemy - player_enemy)) <= 0.5 && player_dis >= cover_dis) {
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)

                // console.log("index",index)
                // console.log("cover", cover_enemy)
                // console.log("player", player_enemy)
                // console.log("idx", index)
                found_check = false
              }

              if ((Math.abs(cover_enemy - player_enemy)) >= 0.5 && Math.abs(player_dis - cover_dis) < 0.5) {
                found_check = false
              }

              if ((isNaN(player_dis-cover_dis))) {
                found_check = false
              }
            }
          }

          console.log("east end")

          if (found_check) {
            console.log('east found')
            document.removeEventListener('keyup', movePacman)
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            setTimeout(function () { alert("Game Over"); }, 500)
          }
        }
        break;

      default:
        break;
    }

  }


})
