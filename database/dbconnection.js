
import mysqle from "mysql2"

// export const dbconnection=()=>{
//    const conn= mysqle.createConnection({
//         host:'localhost',
//         database:'linkedapp',
//         user:'root',
//         password:''
//     })
//     conn.connect((err)=>{
//         if(err) return console.log('database error');
//         console.log('database connect successfully');
//     })
// return conn
// }


const connection = mysqle.createConnection('mysql://uqm2m6riuldyjetk:fO1kocYBIP06Xc57y6cQ@bm9mhmtfpuegmyqa7rox-mysql.services.clever-cloud.com:3306/bm9mhmtfpuegmyqa7rox')

connection.connect((err)=>{
    if(err){
        console.log('database err ');
    }
    else{
        console.log('database connection successfully');
    }
})

export default connection