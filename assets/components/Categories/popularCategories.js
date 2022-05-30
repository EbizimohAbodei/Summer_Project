const fetches = [
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p7179/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p4354/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p13050/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p6165/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p11617/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p3128/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p1393/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p12297/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p23886/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/helsinki:aflfbatkwe/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/helsinki:aflfbat76e/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p16485/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p20513/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p5590/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p16486/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p2433/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p1235/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p1947/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p14004/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p11185/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p360/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p2739/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p316/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p916/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p15875/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p1808/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p5121/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p2149/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p10727/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p6062/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p3670/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p1278/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p2625/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p19245/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p2771/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p965/"),
  axios.get("http://api.hel.fi/linkedevents/v1/keyword/yso:p26626/"),
];

//   useEffect(() => {
//     axios.all(fetches).then(
//       axios.spread((...res) => {
//         setCategories(res);
//       })
//     );
//   }, []);

// const categoryArr = categories.map((category) => {
//     return {
//       id: category.data.id,
//       eventName: category.data.name.en || category.data.name.fi,
//     };
//   });

// const [categories, setCategories] = useState([]);
