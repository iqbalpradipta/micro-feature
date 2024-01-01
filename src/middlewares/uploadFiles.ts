import * as multer from "multer"
import * as path from "path"
import {Request, Response, NextFunction} from "express"

export default new class UploadImages {
    uploadArticle(fieldname: string) {
        const storage = multer.diskStorage({
            destination: (req, res, cb) => {
                cb(null, 'src/uploads/article')
            },
            filename: (req, file, cb) => {
                cb(null, `Article-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
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

    uploadPartai(fieldname: string) {
        const storage = multer.diskStorage({
            destination: (req, res, cb) => {
                cb(null, 'src/uploads/partai')
            },
            filename: (req, file, cb) => {
                cb(null, `Partai-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
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

    uploadPaslon(fieldname: string) {
        const storage = multer.diskStorage({
            destination: (req, res, cb) => {
                cb(null, 'src/uploads/paslon')
            },
            filename: (req, file, cb) => {
                cb(null, `Paslon-${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
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