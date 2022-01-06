# MERN-BLOG

# KANBAN_BOARD_MERN-STACK

this project is for the kanban board project, the user can add a board, and inside it can add tasks to the lists like backlog, in Progress, todo and done, and can delete task card or can delete all the board with all its tasks with drop drap feature to change cards places between the lists.I coded this project using **_HTML5, SCSS, ECMA6, React, Node.js, Express.js ,Javascript, MongoDb and Mongoose._**

## Board Model:

- Add a board
- Find all cards by a board slug(board name)
- Delete a board with every task has the same boardId

## Task Model:

- Add a task
- Delete tasks by the task slug (task name)

### You can find Postman Collection in this [link](https://github.com/RaoufSEZAR/KANBAN_BOARD_MERN-STACK/blob/main/RastTaskProject.postman_collection.json)

## To try this project in your machine

after cloning the project add DB by adding .env file to api file and write this:

```
MONGO_URL=mongodb://localhost:27017/YOUR_DATABASE_NAME
PORT=5000
```

and inside api file in the same path write this in the terminal:

```
npm install
npm start
```

and this message will show in terminal after connecting successfuly to db: \***\*connected to db sccessfully\*\***
after that open client file and in the same path write this in the terminal:

```
npm install
npm start
```

## SOME PICTURES FROM PROJECT

### login

![login](https://user-images.githubusercontent.com/64332249/148446060-8d826308-11b4-4ac6-b0a1-11f7d72db37e.png)

### register

![register](https://user-images.githubusercontent.com/64332249/148446098-b2e23896-0d7f-4267-b450-480650972eff.png)

### home page

![home page](https://user-images.githubusercontent.com/64332249/148446191-90022695-0f5a-44b9-9a06-a220e9553fc1.png)

### update user

![update user](https://user-images.githubusercontent.com/64332249/148446212-8c7f7e2b-28d3-439c-b875-0b9606849263.png)

### create post

![create post](https://user-images.githubusercontent.com/64332249/148446274-badcaf3f-0701-4f17-a425-1c92400effdb.png)

### single post

![single post](https://user-images.githubusercontent.com/64332249/148446304-26a35067-d607-4053-920f-d30a7ace37a0.png)

