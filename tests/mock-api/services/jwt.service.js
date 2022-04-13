import jwt from 'jsonwebtoken'
import { customAlphabet } from 'nanoid/non-secure'
import {
  secretKey,
  accessExpireTime,
  refreshExpireTime,
} from '../config/jwt.config'

const generateAccessToken = (userNo, userId, level) => {
  const accessToken = jwt.sign(
    {
      type: 'access',
      userNo,
      userId,
      level,
    },
    secretKey,
    {
      expiresIn: accessExpireTime,
    },
  )
  return accessToken
}

const generateRefreshToken = (userNo, userId) => {
  const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 10)
  const jti = nanoid()
  return jwt.sign(
    {
      type: 'refresh',
      userNo,
      userId,
    },
    secretKey,
    {
      expiresIn: refreshExpireTime,
      jwtid: jti,
    },
  )
}

const verifyJti = (userId, jti) => {
  if (!jti) {
    return false
  } else {
    return true
  }
}

export { generateAccessToken, generateRefreshToken, verifyJti }
