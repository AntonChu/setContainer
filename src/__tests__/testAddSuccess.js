import Team from '../js/setContainer';

test('checking of correct adding hero', () => {
  const hero = 'Bowman';
  const team = new Team();
  team.add(hero);

  expect(team.members.has(hero)).toBe(true);
});
