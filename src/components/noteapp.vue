<template>
  <div class="todoApp">
    <h1>To-Do-List Application</h1>
    <div class="formCont">
      <div class="taskForm">
        <h3>New Task</h3>
        <input
          class="taskInput"
          type="text"
          placeholder="Name of Task"
          name="task"
        />
        <h3>Task Description</h3>
        <textarea
          class="descInput"
          type="text"
          placeholder="Description"
          name="description"
        />
        <button @click="addTask">Add Task</button>
      </div>
    </div>

    <h1>Things to Get Done</h1>
    <hr size="5" />
    <div class="outerCont">
      <div class="container">
        <div class="taskContainer">
          <div v-for="(task, index) in chores" :key="index" class="taskList">
            <div class="taskTitle">
              <h3>
                {{ task.task }}
              </h3>
            </div>
            <div class="taskDesc">
              <p>{{ task.description }}</p>
            </div>
            <button @click="removeTask(index, 1)" class="delete">×</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chores: [
        {
          task: "Pick up groceries",
          description:
            "need to buy ingredients for dinner, and food for kids lunches",
        },
        {
          task: "Work Out With friend",
          description:
            "Meet James at the gym at 1:00 PM to workout. Work on Strength training",
        },
        { task: "Car needs fixing", description: "Wheels need to be adjusted" },
        {
          task: "Go to Laura's dance recital",
          description:
            "Don't forget Laura's dance recital at 6 PM. I'm so excited.",
        },
      ],
      colors: ["#ff7eb9", "#ff65a3", "#7afcff	", "#feff9c	", "#fff740"],
    };
  },
  methods: {
    addTask() {
      this.chores.push({
        task: document.querySelector("input[name=task]").value,
        description: document.querySelector("textarea[name=description]").value,
      });
      this.chores.task = " ";
      this.chores.description = " ";
    },
    removeTask(index) {
      this.chores.splice(index, 1);
    },
  },
};
</script>

<style scoped>
hr {
  background: #fbfbfb;
  border-radius: 10px;
  margin-bottom: 25px;
  height: 5px;
}
.todoApp {
  margin-top: 25px;
  padding: 0px 100px 0px 100px;
}
.todoApp h1 {
  margin: 0;
  margin-bottom: 15px;
  color: #dddde5;
}
.formCont {
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
}
.taskForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-style: solid;
  border-radius: 3px;
  padding: 20px;
  background: #e9e9e9;
}
.taskForm h3 {
  margin: 0px;
  margin-bottom: 5px;
  color: #202020;
}
.taskInput,
.descInput {
  width: 450px;
  height: 30px;
  padding: 7.5px;
  margin-bottom: 20px;
  font-size: 20px;
}
.descInput {
  height: 100px;
}
.container {
  display: flex;
  justify-content: center;
}
.taskContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  width: 1300px;
}
.taskList {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-radius: 3px;
  width: 267px;
  height: 267px;
  margin: 10px;
  padding: 10px;
  background: #fff740;
}
.taskTitle h3,
.taskDesc p {
  margin: 0px;
  font-family: "Gochi Hand";
  font-size: 25px;
}
.taskTitle h3 {
  font-size: 30px;
  margin-bottom: 15px;
}
.delete {
  position: absolute;
  border-radius: 40px;
  font-weight: 700;
  font-size: 18px;
  margin-top: -24px;
  margin-left: -24px;
}
</style>
