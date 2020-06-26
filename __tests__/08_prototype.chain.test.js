let __ = undefined;
describe('Prototype Chain', () => {
  let father = {
    b: 3,
    c: 4,
  };

  let child = Object.create(father);
  child.a = 1;
  child.b = 2;

  it("Is there an 'a' and 'b' own property on child?", () => {
    expect(child.hasOwnProperty('a')).toEqual(true);
    expect(child.hasOwnProperty('b')).toEqual(true);
  });

  it("Is there an 'a' and 'b' property on child?", () => {
    expect(child.a).toEqual(1);
    expect(child.b).toEqual(2);
  });

  it("If 'b' was removed, whats b value?", () => {
    delete child.b;
    expect(child.b).toEqual(3);
  });

  it("Is there a 'c' own property on child?", () => {
    expect(child.hasOwnProperty('c')).toEqual(false);
  });

  it("Is there a 'c' property on child?", () => {
    expect(child.c).toEqual(4);
  });

  it("Is there an 'd' property on child?", () => {
    expect(child.d).toEqual(undefined);
  });

  it('Who has the masteredJs property?', () => {
    let student = {
      learnJs() {
        this.masteredJs = true;
      },
    };

    let hackagesStudent = Object.create(student);

    hackagesStudent.learnJs();
    expect(hackagesStudent.masteredJs).toEqual(true);
    expect(student.masteredJs).toEqual(undefined);
  });

  it('Separate prototype', () => {
    // We mutate the thechnologies array from the prototype.
    let developer = {
      technologies: [],
      learn(tech) {
        this.technologies.push(tech);
      },
    };

    let antho = Object.create(developer);
    let davy = Object.create(developer);

    antho.learn('elixir');

    expect(antho.technologies.length).toEqual(1);
    expect(davy.technologies.length).toEqual(1);
  });
});
