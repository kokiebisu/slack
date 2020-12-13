import * as express from 'express';
import { refreshToken } from '../api/refreshToken';

const router = express.Router();

router.post('/', refreshToken);

export { router };
