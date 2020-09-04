import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 100 },
    { duration: "10m", target: 100 },
    { duration: "1m", target: 100 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;

  response = http.get("http://localhost:3000/api/products/789678");

//   response = http.get("http://localhost:2019/api/products/?id=123345");

//   response = http.get("http://localhost:2019/api/products/?id=345567");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=34567");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=12335");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=123345");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=23345");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=12334");

//   // clone
//   response = http.get("http://localhost:2019/api/products/?id=1345");

  // Automatically added sleep
  sleep(1);
}
