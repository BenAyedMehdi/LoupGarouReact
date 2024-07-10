export default class DTOs {
  static createGameRequest(totalPlayers, cards) {
    return {
      numberOfPlayers: totalPlayers,
      gameCards: cards,
    };
  }

  static createSameCardsGroup(count, card) {
    return {
      card,
      numberOfCards: count,
    };
  }

  static createVotingSessionRequest(currentGameId, votingType, votesCount) {
    return {
      gameId: currentGameId,
      votingSessionType: votingType,
      expectedVotesCount: votesCount
    };
  }

  static createVoteRequest(voter, target, session) {
    return {
      voterId: voter,
      targetId: target,
      votingSessionId: session,
    };
  }

  // Define other DTOs here...
}
