import _ from 'lodash'
import {
  generateAccessToken,
  generateRefreshToken,
  verifyJti,
} from '../services/jwt.service'

export default {
  authenticate({ userId, password }, db) {
    return new Promise((resolve, reject) => {
      const matchedUser = db.get('users').find({ userId, password }).value()
      if (matchedUser) {
        // db.get('users')
        //   .find({ userId, password })
        //   .assign({
        //     accessToken: generateAccessToken(),
        //     refreshToken: generateRefreshToken(),
        //   })
        //   .write()
        const access = generateAccessToken()
        console.log(access)
        resolve(this.json(matchedUser))
      } else {
        reject(new Error('Invalid user credentials.'))
      }
    })
  },
  json(user) {
    return user && _.omit(user, ['password'])
  },
}
