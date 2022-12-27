import Team from '../js/setContainer';

test('checking of correct converting Set-containers to Array', () => {
  const team = new Team('Swordman', 'Zombie', 'Bowman', 'Daemon');
  const result = ['Swordman', 'Zombie', 'Bowman', 'Daemon'];

  expect(team.toArray()).toEqual(result);
});
