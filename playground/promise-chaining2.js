require('../src/db/mongoose');
const Task = require('../src/models/task');

//5d4097ca791cbc459b27f96d

// Task.findByIdAndDelete("5d3a0890cef248e7e41d746d")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({
//       completed: false
//     });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  let count = await Task.countDocuments({
    completed: false
  })
  return count;
}

deleteTaskAndCount("5d40a55bdc40d44efc4314f8").then(count => {
  console.log(count);
}).catch(e=>{
  console.log(e);
});