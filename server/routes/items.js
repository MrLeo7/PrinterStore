import express from 'express'
import {getItems, uploadItem} from '../controllers/items.js'



const router = express.Router();


router.get('/', getItems )
router.post('/', uploadItem )
// router.delete('/:id', deletePost)


export default router