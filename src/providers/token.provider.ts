import jwt from 'jsonwebtoken';
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET as string;

export class TokenProvider {
    generateToken(id: string): string {
        const token = jwt.sign({ id }, jwtSecret, {
            expiresIn: '1d',
        });

        return token;
    }
}