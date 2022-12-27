import Team from '../js/setContainer';

test('checking of correct adding heroes without repeating', () => {
  const team = new Team('Zombie', 'Daemon');
  team.addAll('Swordman', 'Zombie', 'Bowman', 'Daemon');

  expect(team.members.size).toBe(4);
});
