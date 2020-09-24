const jobs = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "A" },
  { id: 4, name: "C" },
];

jobs.filter(function (A) {
  return A.name == "A";
});

console.log(jobs.filter((A) => A.name == "A"));
