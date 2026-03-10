// auth .controller.js
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcrypt';


const filePath = path.join(process.cwd(), 'src/database/user.json');

// http://localhost:3000/api/auth/register
export const postRegister = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill all fields"
            })
        }

        const data = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(data || '[]')

        if (users.find(user => user.email === email)) {
            return res.status(400)
                .json({
                    success: false,
                    message: 'User already exist'
                })
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = {
            fullName,
            email,
            password: hashedPassword
        }

        users.push(newUser)

        fs.writeFile(filePath, JSON.stringify(users, null, 2));

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: users.find(user => user.email === email)
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: `Error in Register: ${error.message}`
        })
    }
}

// Response
/*
    {
    "success": true,
    "message": "User created successfully",
    "user": {
        "fullName": "John Doe",
        "email": "john@gmail.com",
        "password": "123456"
    }
}\

{
    "success": false,
    "message": "User already exist"
}
*/

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: `Fill the required fields`
            })
        }

        const data = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(data);

        const user = users.find(i => i.email === email );


        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Invalid Email'
            })
        }
        
        const isPassMatch = await bcrypt.compare(password, user.password);

        if(!isPassMatch){
            return res.status(404).json({
                success: false,
                message: 'Invalid password'
            })

        }


        return res.status(200).json({
            success: true,
            message: 'Login SuccessFull',
            user: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: `Error in Login: ${error.message}`
        })
    }
}