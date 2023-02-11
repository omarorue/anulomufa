import * as dotenv from 'dotenv'
import {initConsumer} from './kafkaconsumer'

dotenv.config()
initConsumer()

