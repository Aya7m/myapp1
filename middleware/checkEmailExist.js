import connection from "../database/dbconnection.js"

import bycrpt from 'bcrypt'



let conn = connection

export const checkEmailExist = (req, res, next) => {

    conn.execute(`select email from users where email='${req.body.email}'`, (err, data) => {
        if (data?.length != 0) return res.status(409).json({ message: 'account already exist' })
            req.body.password=bycrpt.hashSync(req.body.password,8)

        next()

    })

}