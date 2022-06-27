import { NextFunction, Request, Response, Router } from "express";
import * as express from "express";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal } from "../middleware/auth";
import * as path from "path";
import { UPLOAD_FOLDER } from "../constants";
import AuthController from "../modules/User/Auth.controller";
import UserController from "../modules/User/User.controller";

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const userController = new UserController();
    authRouter.get('/user' , userController.all);
    authRouter.get('/user/:id' , userController.find);

    // authenticated routes use authJWT
    router.use(authJwt, authRouter);
};

const registerNormalRoutes = (router: Router) => {
    const authController = new AuthController();
    router.post("/login", authLocal, authController.login);

    const userController = new UserController();
    router.post('/register', userController.create);
} 

const registerRoutes = (app: Router) => {
    app.use("/public", express.static(path.resolve(__dirname, "../public")));
    // onboarding routes (login, ...)
    registerNormalRoutes(app);
    // authenticated routes (authentication required)
    registerAuthenticatedRoutes(app);


    // fallback route, return our own 404 instead of default
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError());
    });
};

export { registerRoutes };