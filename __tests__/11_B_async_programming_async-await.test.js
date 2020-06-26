import axios from 'axios';

const url = 'https://api.coinpaprika.com/v1/coins';
//Documentation for Async functions :
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

let __ = undefined;
describe('Async await', () => {
  describe('Basic async await', () => {
    it('Should display Resolved', (done) => {
      //TODO Fix this function in order to make the test pass with async/await
      async function func() {
        const prom = () =>
          new Promise((resolve) => {
            setTimeout(() => resolve('Resolved'), 100);
          });
        const res = await prom();
        expect(res).toEqual('Resolved');
        done();
      }

      func();
    });

    it('Make this code work with async/await', async (done) => {
      const coinId = 'btc-bitcoin';
      let result = await axios.get(`${url}/${coinId}`);
      expect('Bitcoin').toEqual(result.data.name);
      done();
    });

    it('Add results of async actions', (done) => {
      const prom1 = () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(2), 200);
        });
      const prom2 = () =>
        new Promise((resolve) => {
          setTimeout(() => resolve(2), 200);
        });

      async function addResultOfPromises(promise1, promise2) {
        //TODO write code that will wait until both promises (written above) resolve and then sum their result
        const res = await Promise.all([prom1(), prom2()]).then(
          ([res1, res2]) => res1 + res2
        );
        expect(res).toEqual(4);
        done();
      }
      addResultOfPromises(prom1, prom2);
    });
  });
});
