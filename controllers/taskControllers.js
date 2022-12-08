import Task from "../Models/Task.model.js";
import jwt from 'jsonwebtoken'
import User from "../Models/User.model.js";
const taskControllers = {
    getTasks: async (req, res) => {
        const tasks = await Task.find()

        res.json(tasks)
    },
    addTask: async (req, res) => {
        const { text } = req.body


        const task = await Task.create({
            user: req.user.id,
            text
        })
        return res.json(task)

    },
    deleteTask: async (req, res) => {
        const { id } = req.params

        try {
            const task = await Task.findById(id)

            if (task.user.toString() === req.user.id) {
                await task.remove()

                return res.json('Task deleted.')
            }
            res.status(401).json('Not acces')
        } catch (error) {
            return res.status(401).json(error.toString())

        }
    }
}

export default taskControllers