import * as multer from "multer"
import * as path from "path"
import {Request, Response, NextFunction} from "express"

export default new class UploadImages {
    upload(fieldname: string) {
        const storage = multer.diskStorage({
            destination: (req, res, cb) => {
                cb(null, 'src/uploads')
            },
            filename: (req, file, cb) => {
                cb(null, `img-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
            }
        })
        const uploadFile = multer({ storage })

        return (req: Request, res: Response, next: NextFunction) => {
            uploadFile.single(fieldname)(req,res,(err: any) => {
                if(err) return res.status(400).json({ messages: "Error when upload !" })

                res.locals.filename = req.file.filename
                next()
            })
        }
    }
}