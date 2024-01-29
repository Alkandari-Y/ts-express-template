import type { Express } from "express";
import swaggerUi from 'swagger-ui-express';
import fs from "fs"
import YAML from 'yaml'

import { app as appConfig } from "./config"

const loadSwagger = (app: Express): void => {
    if (appConfig.env === 'development' && (appConfig.stage === "local" || appConfig.stage === "testing")) {
        console.log('Loading docs...')
        const file = fs.readFileSync('./swagger.yaml', 'utf8')
        const swaggerDocument = YAML.parse(file)
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
}

export default loadSwagger;

