import jwt from 'jsonwebtoken'

export const AuthController = {
	login: async () => {
		try {
			const userId = 1

			const accessToken = jwt.sign(
				{ userId },
				'4m98v2g6eSx3Vr1uD0nQzLpXvBc7YmC2uN9kFwDgUzP1xRv2bI',
				{
					expiresIn: '15m',
				}
			)
			const refreshToken = jwt.sign(
				{ userId },
				'4m98v2g6eSx3Vr1uD0nQzLpXvBc7YmC2uN9kFwDgUzP1xRv2bambylbi',
				{
					expiresIn: '7d',
				}
			)

			return { accessToken, refreshToken }
		} catch (error) {
			console.error(error, 'Login')
			throw new Error('Authentication failed')
		}
	},
}
