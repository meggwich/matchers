import sortHeroes from '../js/sort';

describe('sortHeroes', () => {
    test('should sort heroes by health in descending order', () => {
      const heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
  
      const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
  
      expect(sortHeroes(heroes)).toEqual(expected);
    });
  
    test('should handle empty array', () => {
      expect(sortHeroes([])).toEqual([]);
    });
  
    test('should not mutate original array', () => {
      const original = [{name: 'герой', health: 50}];
      const copy = [...original];
      sortHeroes(original);
      expect(original).toEqual(copy);
    });
  
    test('should handle single hero', () => {
      const hero = [{name: 'одиночка', health: 30}];
      expect(sortHeroes(hero)).toEqual(hero);
    });
  });