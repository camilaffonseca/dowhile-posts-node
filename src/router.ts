import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { Router } from 'express'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)

export { router }
