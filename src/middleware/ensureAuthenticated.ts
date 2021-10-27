import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { JWT_SECRET } from '../constants/environment'

type Payload = {
  sub: string
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      errorCode: 'token.invalid',
    })
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, JWT_SECRET) as Payload

    request.user_id = sub

    return next()
  } catch {
    return response.status(401).json({
      errorCode: 'token.expired',
    })
  }
}
