import axios from 'axios';

const url = 'https://api.coinpaprika.com/v1/coins';
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

let __ = undefined;

describe('Promises', () => {
  describe('Simple promises', () => {
    it('Promise resolving normally', (done) => {
      new Promise((resolve) => {
        resolve(3);
      }).then((result) => {
        expect(result).toEqual(3);
        done();
      });
    });

    it('Promise fail to resolve', (done) => {
      new Promise((resolve, reject) => {
        reject(new Error('Promise rejected'));
      }).catch((error) => {
        expect(error.message).toEqual('Promise rejected');
        done();
      });
    });

    it('Turn this code into promise', (done) => {
      //Hint : the axios.get request return a promise, how can we get the data out of it?
      const coinId = 'btc-bitcoin';
      axios.get(`${url}/${coinId}`).then((result) => {
        expect('Bitcoin').toEqual(result.data.name);
      });
      done();
    });
  });

  describe('Write your own promises', () => {
    it('Should pass the test after 1 second', () => {
      function delay(ms) {
        //TODO This function should return a promise that will resolve with the value 1 after ms milliseconds
        return new Promise((res) => {
          setTimeout(() => {
            res(1);
          }, ms);
        });
      }

      delay(100).then((result) => expect(result).toEqual(1));
    });
  });

  describe('Chain multiple promises', () => {
    it('Multiple promises chained', (done) => {
      new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      })
        .then(() => {
          //TODO You should return a promise that resolves with the value 1
          // return Promise.resolve(1);
          return new Promise((resolve, reject) => {
            resolve(1);
          });
        })
        .then((result) => {
          expect(result).toEqual(1);
          done();
        });
    });
  });

  describe('Promise.all', () => {
    const promise1 = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 100);
      });
    };
    const promise2 = () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(2), 100);
      });
    };
    const promise3 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Error')), 200);
      }).catch(() => 'error');
    };
    const promise4 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Error')), 100);
      });
    };

    it('Should return the result of the 2 promises in an array', (done) => {
      Promise.all([promise1(), promise2()]).then((result) => {
        expect(result).toEqual([1, 2]);
        done();
      });
    });

    it('What happens when a promise reject but is caught before getting to all when called with all?', (done) => {
      // The catch retourn a normal promise
      Promise.all([promise1(), promise3()]).then((result) => {
        expect(result).toEqual([1, 'error']);
        done();
      });
    });
    it('What happens when a promise reject when called with all?', (done) => {
      Promise.all([promise1(), promise4()])
        .then((result) => {
          expect(result).toEqual(undefined);
          done();
        })
        .catch((error) => {
          expect(error.message).toEqual('Error');
          done();
        });
    });

    it('Use Promise.all', (done) => {
      const urls = [
        `${url}/btc-bitcoin`,
        `${url}/SomeDummyCoinThatDoesntExist`,
      ];
      //TODO Use Promise.all to wrap the map
      Promise.all(urls.map((url) => axios.get(url))).catch(
        ({ response: { status } }) => {
          expect(404).toEqual(status);
          done();
        }
      );
    });
  });
});
