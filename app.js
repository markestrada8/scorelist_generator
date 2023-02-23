const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

const myTeam = 'Golden State'

const generateGamesList = (game, list, preferredTeam) => {
  const homeWin = game.homeTeam.points > game.awayTeam.points
  const teamWin = game.homeTeam.team === preferredTeam ? game.homeTeam.isWinner : game.awayTeam.isWinner
  const newListItem = document.createElement('li')
  const teamsText = `${game.awayTeam.team} @ ${game.homeTeam.team}`
  const scoreText = `${homeWin ? '' : '<b>'}${game.awayTeam.points}${homeWin ? '' : '</b>'} - ${homeWin ? '<b>' : ''}${game.homeTeam.points}${homeWin ? '</b>' : ''}`
  newListItem.innerHTML = teamsText + ' | ' + scoreText
  newListItem.style.backgroundColor = teamWin ? '#55dd66' : '#dd6655'
  newListItem.style.padding = '5px'
  list.appendChild(newListItem)
}

const createNewList = (data, preferredTeam) => {
  const myTeam = preferredTeam
  const newList = document.createElement('ul')

  data.forEach(game => {
    generateGamesList(game, newList, myTeam)
  })
  document.querySelector('body').appendChild(newList)
}

createNewList(warriorsGames, myTeam)
createNewList(warriorsGames, 'Houston')



