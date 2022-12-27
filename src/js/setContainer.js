export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw new Error('Такой персонаж существует');
    }
    this.members.add(hero);
  }

  addAll(...heroes) {
    [...heroes].forEach((hero) => this.members.add(hero));
  }

  toArray() {
    const setArr = [];
    this.members.forEach((hero) => setArr.push(hero));
    return setArr;
  }
}
