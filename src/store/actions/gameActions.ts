
export function loadGame(gameId: string) {
  return async (dispatch: Function) => {
    try {
      // const game = await gameService.getGame(gameId)
      // dispatch({ type: 'SET_GAME', game })
    } catch (err) {
      // console.log('canot load game ', err);
      // eventBusService.showErrorMsg('Cannot load game!')
      // window.location.assign('/')
    }
  }
}

