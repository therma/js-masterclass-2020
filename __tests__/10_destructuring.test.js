let __ = undefined;
describe('Destructuring', () => {
  describe('Object - Getting User Info...', () => {
    function getUserInfo() {
      return {
        id: 8798,
        name: 'Davy Engone',
        company: 'Hackages',
        country: 'Everywhere',
        handles: {
          twitter: 'davyengone',
          skype: 'davy_engone',
        },
      };
    }

    // TODO: Retrieve the user's id, name as fullName and twitter handle from getUserInfo
    it('With ES5', () => {
      let userInfo = getUserInfo();
      let id = userInfo.id;
      let fullName = userInfo.name;
      let twitter = userInfo.handles.twitter;

      expect(id).toBeDefined();
      expect(fullName).toEqual('Davy Engone');
      expect(twitter).toEqual('davyengone');
    });

    it('With ES6 object Destructuring to do the same operation', () => {
      // TODO Extract the required information using the spread operator.
      const {
        id,
        name: fullName,
        handles: { twitter },
      } = getUserInfo();
      expect(id).toBeDefined();
      expect(fullName).toEqual('Davy Engone');
      expect(twitter).toEqual('davyengone');
    });
  });

  describe('Array...', () => {
    let fruits = [
      'brussels sprout',
      'apple',
      'beetroot',
      'broccoli',
      'carrot',
      'cherry',
    ];

    it('With ES5', () => {
      let first = fruits[0];
      let last = fruits.slice(-1)[0];
      expect(first).toEqual('brussels sprout');
      expect(last).toEqual('cherry');
    });

    it('With ES6', () => {
      // TODO: Get the first fruit
      let [first] = fruits;
      expect(first).toEqual('brussels sprout');
      // TODO: Get the last fruit
      let { [fruits.length - 1]: last } = fruits;
      expect(last).toEqual('cherry');
      // TODO: Get the queue fruit;
    });

    it('With ES6 & default value', () => {
      let dog = 'Larry';
      let cat;

      let actual = [dog, (cat = 'Katy')];
      const result = ['Larry', 'Katy'];
      expect(actual).toEqual(result);
    });

    it('With ES6 & For iterations', () => {
      const people = [
        {
          name: 'Mike',
          age: 35,
        },
        {
          name: 'Tom',
          age: 25,
        },
      ];

      let actual = [];

      // TODO: Write the destructuring and the push statement to satisfy all assertions
      for (let { name, age } of people) {
        actual.push(`${name} ${age}`);
      }

      expect(actual).toEqual(['Mike 35', 'Tom 25']);
    });
  });

  describe('Object - Drawing Chart...', () => {
    it("With ES6 & a function parameter's default value", () => {
      function drawES6Chart({
        size = 'big',
        cords = { x: 0, y: 0 },
        radius = 25,
      } = {}) {
        return [size, cords, radius];
      }

      let actual = drawES6Chart();
      expect(actual).toEqual(['big', { x: 0, y: 0 }, 25]);

      actual = drawES6Chart({
        size: 'small',
        cords: { x: 18, y: 30 },
        radius: 30,
      });
      expect(actual).toEqual(['small', { x: 18, y: 30 }, 30]);
    });
  });
});
