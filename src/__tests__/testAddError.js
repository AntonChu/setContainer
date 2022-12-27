import Team from '../js/setContainer';

test('checking of correct adding hero', () => {
  const hero = 'Bowman';
  const team = new Team('Bowman');

  expect(() => team.add(hero)).toThrowError();
});
